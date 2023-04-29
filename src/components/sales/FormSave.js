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


function SaleFormSave({ onCompleted = () => null, onError = () => null }) {

    const userId = sessionStorage.getItem("id");
    const qUsers = useQuery(`{ users { } }`);
    const [selectedProducts, setSelectedProducts] = useState([])

    const qProducts = useQuery(`{ 
        products {
            id
            name
            sale {}
        } 
    }`, "user.id=" + userId);
    const { products = [] } = qProducts.data;
    const [callSet, qSet] = useSet(SET_PRODUCT, {
        onCompleted: () =>
            onCompleted()
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });

    const [callSave, qSave] = useSave(SAVE_SALE, {
        onCompleted: (data) => {
            const selectedProductsInt = selectedProducts.map(str => 
                parseInt(str, 10));
            for(let i=0;i<selectedProductsInt.length;i++){
                var newProductValues = {
                    id: selectedProductsInt[i],
                    sale: data.saveSale.sale.id
                    };
                callSet(newProductValues)
                
            }
            // iterar selectedProducts
            onCompleted();
            //console.log("sss");
        }
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });
    //const { users = [] } = qUsers.data;


    
    const filteredProducts = products.filter(product => !product.sale)

    


    const error = qSave.error ? "An error has occurred" : null;

    const onSubmit = (values) => {
        //console.log(qUsers.data);
        console.log(values);
        values.disscount = parseFloat(values.disscount);
        values.startDate = DateTime.fromFormat(values.startDate, "yyyy-MM-dd");
        values.endDate = DateTime.fromFormat(values.endDate, "yyyy-MM-dd");
        values.banner = parseInt(values.banner_id);
        values.user = parseInt(sessionStorage.getItem("id"));
        
        if(values.products != undefined)
            setSelectedProducts(values.products.id);

        //console.log(values); //para probar que esté guardando informacion     
        if(isNaN(values.banner)){
            alert("Favor de seleccionar un banner");
            //console.log("adios")   
            return;

        }
        
        callSave(values);
        
    }


    return <View
        products={filteredProducts}
        error={error}
        onSubmit={onSubmit}
    />;
}

SaleFormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleFormSave;