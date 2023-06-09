import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SALE, SET_SALE, SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/sales/Form.view";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { object, string } from "yup";

function SaleFormSet({ saleId, onCompleted = () => null, onError = () => null, refetchQuery = () => null }) {
    const qSale = useDetail(SALE, saleId);
    const qUsers = useQuery(`{ users { } }`);
    const companyId = sessionStorage.getItem("company");

    let selectedStartDate;
    const today = new Date;
    var todayDate = today.getFullYear() + "-" + ((today.getMonth() + 1).length != 2 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)) + "-" + (today.getDate().length != 2 ? "0" + today.getDate() : today.getDate());


    const productSchema = object({
        name: string().test({
            name: "name",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese un nombre de la oferta" });


                return true;

            }
        }),
        disscount: string().test({
            name: "disscount",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el descuento de la oferta" });
                if (value < 1 || value > 100)
                    return context.createError({ message: "La oferta no puede ser menor a 1 o mayor que 100" });

                return true;

            }
        }),
        startDate: string().test({
            name: "startDate",
            test(value, context) {
                selectedStartDate = value

                if (!value || value.length === 0)
                    return context.createError({ message: "Fechas de inicio ingresada incorrectamente" });

                if (value < todayDate) {
                    return context.createError({ message: "La fecha de inicio no puede ser anterior a la fecha actual" });
                }

                return true;

            }
        }),
        endDate: string().test({
            name: "endDate",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Fechas de fin ingresada incorrectamente" });

                if (value < selectedStartDate)
                    return context.createError({ message: "La fecha de fin no puede ser menor que la fecha de inicio" })

                return true;

            }
        }),
    })

    const [callSet, qSet] = useSet(SET_SALE, {
        onCompleted: () => {
            swal("¡Listo!", "Se ha actualizado la oferta de manera exitosa.", "success").then(() => {
                //window.location.replace("/sales");
                refetchQuery();
            });
            onCompleted();

            //refetchQuery();

        }

    });

    const [callSetProducts, qSetProducts] = useSet(SET_PRODUCT, {
        onCompleted: () => {
        }
    });


    const [callSetNull, qSetNull] = usePost("/products/update_product_null", {
        onCompleted: () => {

        },
    });



    let qProducts = useQuery(`{ 
        products {
            id
            name
            sale {}
        } 
    }`, "company.id=" + companyId);

    qProducts.refetch();


    let { products = [] } = qProducts.data;


    const filteredProducts = products.filter(product => {
        if (product.sale == null || product.sale.id == saleId)
            return true;
        else
            return false;
    })


    if (qSale.loading) return <Loading />;

    const { sale = {} } = qSale.data;
    const { users = [] } = qUsers.data;
    const error = qSet.error ? "An error has occurred" : null;


    const onSubmit = (values) => {

        values.id = parseInt(saleId);
        values.banner = parseInt(values.banner.id);
        values.disscount = parseFloat(values.disscount);
        values.startDate = DateTime.fromFormat(values.startDate, "yyyy-MM-dd");
        values.endDate = DateTime.fromFormat(values.endDate, "yyyy-MM-dd");
        values.company = parseInt(sessionStorage.getItem("company"));

        for (let i = 0; i < filteredProducts.length; i++) {

            let newValues = JSON.parse(JSON.stringify(filteredProducts[i]));
            newValues.product_id = newValues.id;
            delete newValues.id;

            callSetNull(newValues);
            if (values.products != undefined && i === filteredProducts.length-1){
                forCallSetProducts(values);
            }
        }

        
        callSet(values);
        //onCompleted();
    };

    const forCallSetProducts = (values) =>{
        if (values.products != undefined) {

            for (let i = 0; i < values.products.id.length; i++) {
                let newProductValuesEdit = {
                    id: parseInt(values.products.id[i]),
                    sale: parseInt(saleId)
                };
                callSetProducts(newProductValuesEdit)
            }

        }
    }

    const onCancel = () => {
        onCompleted();
    }

    return <View
        sale={sale}
        products={filteredProducts}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        productSchema={productSchema}
    />;
}

SaleFormSet.propTypes = {
    saleId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleFormSet;