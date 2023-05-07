/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSet, useDelete,useQuery } from "seed/gql";
import { Loading } from "seed/helpers";

///
import View from "components/superadmin/category/DeleteSA.view";
import { DELETE_CATEGORY } from "seed/gql/queries";
///

function Delete({ 
    ///
    categoryId, 
    ///
    onCompleted = () => 
        null
    , 
    onError = () => 
        null
    ,
    refetchQuery 
}) {

    const [callDelete] = useDelete(

        ///
        DELETE_CATEGORY, 
        ///

        {
            onCompleted: () => {
                refetchQuery();
                onCompleted();
            }
            //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
        }
    );

    const onClickDelete = () => {
        
        ///
        const id = parseInt(categoryId);
        ///

        callDelete({ 
            id: id 
        });
    }
        

    return <View
        onClose={onCompleted}
        onClickDelete={onClickDelete}
    />;
}

Delete.propTypes = {
    
    ///
    categoryId: PropTypes.number.isRequired,
    ///

    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default Delete;