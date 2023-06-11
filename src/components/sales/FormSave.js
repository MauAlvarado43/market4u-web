import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery } from "seed/gql";
import { SAVE_SALE, SET_PRODUCT } from "seed/gql/queries";
import View from "components/sales/Form.view";
import { DateTime } from "luxon";
import { object, string } from "yup";
import swal from "sweetalert";

function SaleFormSave({ onCompleted = () => null, onError = () => null, refetchQuery = () => null }) {
    const companyId = sessionStorage.getItem("company");
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; 
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const todayDate = yyyy + '-' + mm + '-' + dd;

    let selectedStartDate;

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

    const qProducts = useQuery(`{ 
        products {
            id
            name
            company {}
            sale {}
        } 
    }`, "company.id=" + companyId);

    qProducts.refetch();

    const { products = [] } = qProducts.data;

    const [callSet, qSet] = useSet(SET_PRODUCT, {
        onCompleted: () => {
            //onCompleted()
        }

    });



    const [callSave, qSave] = useSave(SAVE_SALE, {
        onCompleted: (data) => {
            let checkboxProducts = Object.keys(selectedProductsCheckbox).filter((key) => selectedProductsCheckbox[key]);
            console.log(checkboxProducts)

            for(let i = 0; i < checkboxProducts.length; i++){
                    var newProductValues = {
                        id: parseInt(checkboxProducts[i]),
                        sale: data.saveSale.sale.id
                    };
                    callSet(newProductValues)
            }

            swal("¡Listo!", "Se ha creado la oferta de manera exitosa.", "success").then(() => {
                refetchQuery();
            });
            onCompleted();
        }

    });

    const [selectedProductsCheckbox, setSelectedProductsCheckbox] = useState({});
    const filteredProducts = products.filter(product => !product.sale)

    

    const error = qSave.error ? "An error has occurred" : null;
    
    const onSubmit = (values) => {
        
        values.disscount = parseFloat(values.disscount);
        values.startDate = DateTime.fromFormat(values.startDate, "yyyy-MM-dd");
        values.endDate = DateTime.fromFormat(values.endDate, "yyyy-MM-dd");
        if (!values.banner) {
            swal("No hay banner!", "Por favor, ingresa un banner.", "error");
            return
        }
        values.banner = parseInt(values.banner_id);

        values.company = parseInt(sessionStorage.getItem("company"));

        // if (values.products != undefined)
        //     setSelectedProductsCheckbox(values.products.id);



        callSave(values);

    }

    const onCancel = () => {

        onCompleted();
    }


    return <View
        products={filteredProducts}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        productSchema={productSchema}
        selectedProductsCheckbox={selectedProductsCheckbox}
        setSelectedProductsCheckbox={setSelectedProductsCheckbox}
    />;
}

SaleFormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleFormSave;