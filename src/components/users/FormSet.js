/*historyhoB
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { usePost } from "seed/api";

import { USER, SET_USER } from "seed/gql/queries";
import View from "components/users/Form.view";


function FormSet({ 
    itemId, 
    onCompleted = () => null, 
    onError = () => null 
}) {
    const qItem = useDetail(
        
        
        USER, 
        

        itemId
    );
    const [callSet, qSet] = usePost("/users/update_user_normal", {
        onCompleted: () => {
            console.log("se ha actualizado de manera exitosa el usuario");
            onCompleted();
        },
    });
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
    if (qItem.loading) return <Loading />;
    
    const { user = {} } = qItem.data;

    
    const lastEmail = user.email;
    const companyId = sessionStorage.getItem("company");
    

    
    // let item = {
    //     id: "1",
    //     username: "usuario1",
    //     firstName: "nombre",
    //     lastName: "apellido",
    //     email: "a@b.c",
    //     type: "administrador",
    //     street: "calle",
    //     city: "ciudad",
    //     cp: "00000",
    //     municipality: "municipio",
    //     state: "estado",
    //     telephone: "0000000000",
    // };
     
    const error = qSet.error ? "Error" : null;
    const onSubmit = (values) => {
        
        
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === values.email && users[i].email !== lastEmail) {
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
        values.id = parseInt(itemId);
        values.cp = parseInt(values.cp);
        values.company = parseInt(companyId);
        //values.photo = parseInt(values.photo);
        if(values.password == undefined)
            values.password = ''

        let newValues = JSON.parse(JSON.stringify(values));
        newValues.user_id = newValues.id;
        delete newValues.id;

        console.log(newValues);
        callSet(newValues);
    };
    const onCancel = () => {
        onCompleted();
    }
    return <View
        item={user}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}

    />;
}

FormSet.propTypes = {
    itemId: PropTypes.number.isRequired,    
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSet;