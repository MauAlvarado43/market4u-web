/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSet, useDelete,useQuery } from "seed/gql";
import { Loading } from "seed/helpers";

/////////////////////////////////INICIO-EDITAR////////////////////////////////////
import View from "components/superadmin/users/DeleteSA.view";
import { DELETE_USER } from "seed/gql/queries";
///////////////////////////////////FIN-EDITAR/////////////////////////////////////

function Delete({ 
    itemId, 
    onCompleted = () => null, 
    onError = () => null,
    refetchQuery 
}) {
    const [callDelete] = useDelete(

        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
        DELETE_USER, 
        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

        {
            onCompleted: () => {
                refetchQuery();
                onCompleted();
            }
            //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
        }
    );
    const onClickDelete = () => {
        const id = parseInt(itemId);
        /////////////////////////////////DESCOMENTAR/////////////////////////////////// 
        callDelete({ id: id });
        ///////////////////////////////INICIO-COMENTAR/////////////////////////////////
        // onCompleted();
        /////////////////////////////////FIN-COMENTAR//////////////////////////////////
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