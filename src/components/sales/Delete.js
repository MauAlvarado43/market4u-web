/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSet, useDelete,useQuery } from "seed/gql";
import { DELETE_SALE,SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/sales/Delete.view";

function SaleDelete({ saleId, onCompleted = () => null, onError = () => null }) {

    let qProducts = useQuery(`{ 
        products {
            id
            name
            sale {}
        } 
    }`, "sale.id=" + saleId);


    let { products = [] } = qProducts.data;

    const [callSetProducts, qSetProducts] = useSet(SET_PRODUCT, {
        onCompleted: () =>
            onCompleted()
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });

    const [callDelete] = useDelete(DELETE_SALE, {
        onCompleted: () =>
            onCompleted()
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });



    const onClickDelete = () =>{
        //console.log(products)
        const sale = parseInt(saleId);

        callDelete({ id: sale });
    }
        

    return <View
        onClickDelete={onClickDelete}
    />;
}

SaleDelete.propTypes = {
    saleId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleDelete;