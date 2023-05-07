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
import View from "components/superadmin/sales/DeleteSA.view";

function SaleDelete({ saleId, onCompleted = () => null, onError = () => null,refetchQuery }) {
    

    const [callDelete] = useDelete(DELETE_SALE, {
        onCompleted: () => {
            refetchQuery();
            onCompleted();
        }
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });



    const onClickDelete = () =>{
        //console.log(products)
        const sale = parseInt(saleId);
        callDelete({ id: sale });
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