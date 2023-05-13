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
import View from "components/superadmin/users/FormSA.view";
///////////////////////////////////FIN-EDITAR/////////////////////////////////////

function FormSave({ 
    onCompleted = () => null, 
    onError = () => null, 
    refetchQuery 
}) {
    const [callSave, qSave] = usePost("/users/create_user_superadmin", {
        onCompleted: () => {
            console.log("se ha actualizado de manera exitosa el usuario");
            onCompleted();
        },
    });
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
    const qCompanies = useQuery(
        `
        { 
            companies {
                id
                name
            } 
        }
        `
    );
    const { companies = [] } = qCompanies.data;
    //console.log(companies)

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
        // values.tokenVerified = true;
        // values.token = ""
        // for (let i = 1; i <= 20; i++) {
        //     values.token += Math.random().toString(36).substring(2, 3);
        // }
        // values.isActive = true;
        // values.active = true;
        // values.code = 0;
        values.company = parseInt(values.company.id)
        values.username = values.email.slice();
        if(values.type==="NORMAL" && isNaN(values.company)){
            alert("El usuario normal no puede tener una compañia")
            return
        }else if(values.type === 'SELLER' || values.type === 'ADMIN' ){
            //console.log(values.company)
            if(isNaN(values.company)){
                alert('Este tipo de usuario debe tener una compañia')
                return
            }
                
        }
        if(values.type==="NORMAL")
            delete values.company
        console.log(values);
        if(values.password === '' || isNaN(values.password)){
            alert("Debe poner una contraseña")
            return 
        }

        console.log(values.password)

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
        companies={companies}
    />;
}

FormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSave;