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
import { SAVE_USER } from "seed/gql/queries";
import View from "components/users/Form.view";
///////////////////////////////////FIN-EDITAR/////////////////////////////////////

function FormSave({ 
    onCompleted = () => null, 
    onError = () => null, 
    refetchQuery 
}) {
    const [callSave, qSave] = useSave(
        
        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
        SAVE_USER, 
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

    const qUsers = useQuery(
        `
        { 
            users {
                id
                email
            } 
        }
        `
    );
    const { users = [] } = qUsers.data;

    /////////////////////////////////INICIO-EDITAR////////////////////////////////////
    const companyId = sessionStorage.getItem("company");
    ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

    const onSubmit = (values) => {
        
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === values.email) {
                alert("Este correo ya ha sido utilizado");
                return;
            }
        }
        if (values.password !== values.password2) {
            alert("Las contraseñas no coinciden");
            return;
        }
        if (values.cp !== "") {
            values.cp = parseInt(values.cp);
        }
        values.tokenVerified = true;
        values.token = ""
        for (let i = 1; i <= 20; i++) {
            values.token += Math.random().toString(36).substring(2, 3);
        }
        values.isActive = true;
        values.active = true;
        values.code = 0;
        values.company = parseInt(companyId)
        values.username = values.email.slice();
        console.log(values);
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