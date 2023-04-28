/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_SALE, SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/superuser/Pruebas.view";

function SaleFormSave({ onCompleted = () => null, onError = () => null }) {

    const qUsers = useQuery(`{ users { } }`);

    const qProducts = useQuery(`{ 
        products {
            id
            name
        } 
    }`, "user_id=" + sessionStorage.getItem("id"));



    const [callSave, qSave] = useSave(SAVE_SALE, {
        onCompleted: () =>
            onCompleted()
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });
    const { users = [] } = qUsers.data;


    const { products = [] } = qProducts.data;
    console.log(products);



    const [callSet, qSet] = useSet(SET_PRODUCT, {
        onCompleted: () =>
            onCompleted()
        //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
    });


    const error = qSave.error ? "An error has occurred" : null;

    const onSubmit = (values) => {
        //console.log(qUsers.data);
        values.startDate = new Date(values.startDate);
        values.endDate = new Date(values.endDate);
        values.banner = parseInt(values.banner_id);
        values.user = parseInt(sessionStorage.getItem("id"));
        console.log(values);

        
        console.log(values.products.id);

        

        
        //callSet({id: values.products.id[0], sales: Int});

        //callSet(values);



        //callSave(values);


    }


    return <View
        products={products}
        error={error}
        onSubmit={onSubmit}
    />;
}

SaleFormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleFormSave;