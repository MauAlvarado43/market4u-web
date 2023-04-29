/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SALE, SET_SALE, SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/superuser/Pruebas.view";

function SaleFormSet({ saleId, onCompleted = () => null, onError = () => null }) {
    const qSale = useDetail(SALE, saleId);
    const qUsers = useQuery(`{ users { } }`);
    const [callSet, qSet] = useSet(SET_SALE, {
        onCompleted: () =>
            onCompleted()
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });

    const [callSetProducts, qSetProducts] = useSet(SET_PRODUCT, {
        onCompleted: () =>
            onCompleted()
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });

    const userId = sessionStorage.getItem("id");

    let qProducts = useQuery(`{ 
        products {
            id
            name
            sale {}
        } 
    }`, "user.id=" + userId);



    let { products = [] } = qProducts.data;
    

    const filteredProducts = products.filter(product => {
        if (product.sale == null || product.sale.id == saleId)
            return true;
        else
            return false;
    })
    console.log(filteredProducts)

    


    if (qSale.loading) return <Loading />;

    const { sale = {} } = qSale.data;
    const { users = [] } = qUsers.data;
    const error = qSet.error ? "An error has occurred" : null;


    const onSubmit = (values) => {
        values.id = parseInt(saleId);
        values.banner = parseInt(values.banner.id);
        
        // values.products.id - ---nuevos
        // anteriores ---

        for(let i=0;i<filteredProducts.length;i++) {
            let newProductValuesEdit = {
                id: parseInt(filteredProducts[i].id),
                sale: undefined
            };
            console.log(newProductValuesEdit)
            callSetProducts(newProductValuesEdit)
        }


        for(let i=0;i<values.products.id.length;i++) {
            let newProductValuesEdit = {
                id: parseInt(values.products.id[i]),
                sale: parseInt(saleId)
            };
            callSetProducts(newProductValuesEdit)
        }
        
        // for(let i=0;i<selectedProductsInt.length;i++){
        //     var newProductValues = {
        //         id: selectedProductsInt[i],
        //         sale: data.saveSale.sale.id
        //         };
        //     callSet(newProductValues)
            
        // }
        //callSet(values);
    };

    return <View
        sale={sale}
        products={filteredProducts}
        error={error}
        onSubmit={onSubmit}
    />;
}

SaleFormSet.propTypes = {
    saleId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleFormSet;