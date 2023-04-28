/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_SALE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/superuser/Pruebas.view";

function SaleFormSave({ onCompleted = () => null, onError = () => null }) {

    const qUsers = useQuery(`{ users { } }`);


    
    const qProducts = useQuery(`{ 
        users (id: $id) {
            id
            product_ids
        } 
    }`);
    
    
    
    const [callSave, qSave] = useSave(SAVE_SALE, {
        onCompleted: () =>
            onCompleted()
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });
    const { users = [] } = qUsers.data;


    const { products = [] } = qProducts.data;
    console.log(products);


    const error = qSave.error ? "An error has occurred" : null;

    const onSubmit = (values) => {
        //console.log(qUsers.data);
        values.startDate = new Date(values.startDate);
        values.endDate = new Date(values.endDate);
        values.banner = parseInt(values.banner_id);
        values.user =parseInt(sessionStorage.getItem("id"));
        console.log(values);
        //callSave(values);
    }


    return <View
        users={users}
        error={error}
        onSubmit={onSubmit}
    />;
}

SaleFormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleFormSave;