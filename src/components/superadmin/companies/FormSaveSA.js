/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { usePost } from "seed/api";
import { DateTime } from "luxon";
import { useHistory } from "react-router";

/////////////////////////////////INICIO-EDITAR////////////////////////////////////
import { SAVE_COMPANY } from "seed/gql/queries";
import View from "components/superadmin/companies/FormSA.view";
///////////////////////////////////FIN-EDITAR/////////////////////////////////////

function FormSave({ 
    onCompleted = () => null, 
    onError = () => null, 
    refetchQuery 
}) {
    const [callSave, qSave] = useSave(
        
        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
        SAVE_COMPANY, 
        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

        {
            onCompleted: (data) => {
                refetchQuery();
                onCompleted();
            }
            //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
        }
    );
    const error = qSave.error ? "An error has occurred" : null;
    const onSubmit = (values) => {
        values.cp = parseInt(values.cp);
        if (values.photo === undefined) {
            alert("Favor de seleccionar una foto para la empresa");
            return;
        }
        values.photo = parseInt(values.photo_id);
        values.active = false
        /////////////////////////////////DESCOMENTAR/////////////////////////////////// 
        callSave(values);
        ///////////////////////////////INICIO-COMENTAR/////////////////////////////////
        // onCompleted();
        /////////////////////////////////FIN-COMENTAR//////////////////////////////////
    }
    const onCancel = () => {
        onCompleted();
    }
    return <View
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
    />;
}

FormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSave;