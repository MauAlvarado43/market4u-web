import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SALE, SET_SALE, SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/sales/Form.view";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { usePost } from "seed/api";

import { object, string } from "yup";

function SaleFormSet({ saleId, onCompleted = () => null, onError = () => null }) {
    const qSale = useDetail(SALE, saleId);
    const qUsers = useQuery(`{ users { } }`);

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

                return true;

            }
        })
    })

    const [callSet, qSet] = useSet(SET_SALE, {
        onCompleted: () => {
        }
    });

    const [callSetProducts, qSetProducts] = useSet(SET_PRODUCT, {
        onCompleted: () => {
        }
    });


    const [callSetNull, qSetNull] = usePost("/products/update_product_null", {
        onCompleted: () => {
            console.log("se ha actualizado de manera exitosa el producto");
        },
    });

    const companyId = sessionStorage.getItem("company");

    let qProducts = useQuery(`{ 
        products {
            id
            name
            sale {}
        } 
    }`, "company.id=" + companyId);



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
      
        
          if(values.disscount < 1 || values.disscount > 100) {
            alert("Por favor, ingrese un valor mayor a 1 y menor que 100 para el descuento.")
            return;
        }
        values.startDate = DateTime.fromFormat(values.startDate, "yyyy-MM-dd");
        values.endDate = DateTime.fromFormat(values.endDate, "yyyy-MM-dd");

        
         if(values.startDate > values.endDate) {
            alert("Fechas ingresadas incorrectas.")
            return
        }
        values.company = parseInt(sessionStorage.getItem("company"));

        for (let i = 0; i < filteredProducts.length; i++) {
            
            let newValues = JSON.parse(JSON.stringify(filteredProducts[i]));
            newValues.product_id = newValues.id;
            delete newValues.id;

            console.log(newValues);
            callSetNull(newValues)
        }

        if (values.products != undefined) {
            console.log(filteredProducts)

            for (let i = 0; i < values.products.id.length; i++) {
                let newProductValuesEdit = {
                    id: parseInt(values.products.id[i]),
                    sale: parseInt(saleId)
                };
                callSetProducts(newProductValuesEdit)
            }

            if (isNaN(values.banner)) {
                alert("Favor de seleccionar un banner");
                return;
            }

        }
        callSet(values);
        onCompleted();
    };

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