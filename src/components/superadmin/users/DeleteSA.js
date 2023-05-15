/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSet, useDelete,useQuery } from "seed/gql";
import { Loading } from "seed/helpers";


import View from "components/superadmin/users/DeleteSA.view";
import { DELETE_USER } from "seed/gql/queries";


function Delete({ 
    itemId, 
    onCompleted = () => null, 
    onError = () => null,
}) {
    const [callDelete] = useDelete(
        DELETE_USER, 
        {
            onCompleted: () => {
                onCompleted();
            }
            //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
        }
    );
    const onClickDelete = () => {
        const id = parseInt(itemId);
        
        callDelete({ id: id });
        
    }
    return <View
        onClose={onCompleted}
        onClickDelete={onClickDelete}
    />;
}

Delete.propTypes = {
    itemId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default Delete;