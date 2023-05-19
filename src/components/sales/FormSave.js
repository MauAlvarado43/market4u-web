/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_SALE, SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/sales/Form.view";
import { usePost } from "seed/api";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { object, string } from "yup";

function SaleFormSave({ onCompleted = () => null, onError = () => null }) {

    //const history = useHistory();
    const companyId = sessionStorage.getItem("company");
    const [selectedProducts, setSelectedProducts] = useState([])
    // const [selectedStartDate, setSelectedStartDate] = useState()
    // const [selectedEndDate, setselectedEndDate] = useState()

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
        }),
        startDate: string().test({
            name: "startDate",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Fechas de inicio ingresada incorrectamente" });

                return true;

            }
        }),
        endDate: string().test({
            name: "endDate",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Fechas de fin ingresada incorrectamente" });

                return true;

            }
        })
    })

    const qProducts = useQuery(`{ 
        products {
            id
            name
            company {}
            sale {}
        } 
    }`, "company.id=" + companyId);
    const { products = [] } = qProducts.data;
    const [callSet, qSet] = useSet(SET_PRODUCT, {
        onCompleted: () => {
                //onCompleted()
            }
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });

    const [callSave, qSave] = useSave(SAVE_SALE, {
        onCompleted: (data) => {
            const selectedProductsInt = selectedProducts.map(str =>
                parseInt(str, 10));
            for (let i = 0; i < selectedProductsInt.length; i++) {
                var newProductValues = {
                    id: selectedProductsInt[i],
                    sale: data.saveSale.sale.id
                };
                callSet(newProductValues)

            }
            
            onCompleted();
           
        }
        
    });




    const filteredProducts = products.filter(product => !product.sale)




    const error = qSave.error ? "An error has occurred" : null;

    const onSubmit = (values) => {
        
        console.log(values);
        values.disscount = parseFloat(values.disscount);
        if(values.disscount < 1 || values.disscount > 100){
            alert("Por favor, ingrese un valor mayor a 1 y menor que 100 para el descuento.")
            return;
        }
        values.startDate = DateTime.fromFormat(values.startDate, "yyyy-MM-dd");
        values.endDate = DateTime.fromFormat(values.endDate, "yyyy-MM-dd");
        // if(values.startDate > values.endDate){
        //     alert("Fechas ingresadas incorrectas.")
        //     return
        // }
        if(values)
        values.banner = parseInt(values.banner_id);
        values.company = parseInt(sessionStorage.getItem("company"));

        if (values.products != undefined)
            setSelectedProducts(values.products.id);

    

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
    />;
}

SaleFormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleFormSave;