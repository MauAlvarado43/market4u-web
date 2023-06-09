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
import { usePost } from "seed/api";
import swal from "sweetalert";
function SaleDelete({ saleId, onCompleted = () => null, onError = () => null, refetchQuery = () => null }) {

    let qProducts = useQuery(`{ 
        products {
            name
            sale {}
        } 
    }`, "sale.id=" + saleId);


    let { products = [] } = qProducts.data;

    const [callSetNull, qSetNull] = usePost("/products/nullable_products", {
        onCompleted: () => {
            swal("¡Listo!", "Se ha eliminado la oferta de manera exitosa.", "success").then(() => {
                window.location.replace("/sales");
                //refetchQuery();
            });
            onCompleted();
        },
    });

    const onClickDelete = () =>{
        const sale = parseInt(saleId);
        const newValues = {}
        newValues.sale_id = sale
        callSetNull(newValues)
    }
        

    return <View
    onClose={onCompleted}
    onClickDelete={onClickDelete}
    />;
}

SaleDelete.propTypes = {
    saleId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleDelete;