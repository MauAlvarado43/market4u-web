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

/////////////////////////////////INICIO-EDITAR////////////////////////////////////
import { USER, SET_USER } from "seed/gql/queries";
import View from "components/superadmin/users/FormSA.view";
///////////////////////////////////FIN-EDITAR/////////////////////////////////////

function FormSet({ 
    itemId, 
    onCompleted = () => null, 
    onError = () => null 
}) {
    const qItem = useDetail(
        
        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
        USER, 
        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

        itemId
    );
    const [callSet, qSet] = useSet(
        
        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
        SET_USER, 
        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

        {
            onCompleted: () =>{
                onCompleted();
            }
            //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
        }
    );
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
    if (qItem.loading) return <Loading />;
    /////////////////////////////////DESCOMENTAR/////////////////////////////////// 
    const { user = {} } = qItem.data;
    const lastEmail = user.email;
    ///////////////////////////////INICIO-COMENTAR/////////////////////////////////
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
    /////////////////////////////////FIN-COMENTAR////////////////////////////////// 
    const error = qSet.error ? "Error" : null;
    const onSubmit = (values) => {
        
        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
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
        values.company = parseInt(values.company.id);
        values.photo = parseInt(values.photo);
        console.log(values);
        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////
        
        /////////////////////////////////DESCOMENTAR/////////////////////////////////// 
        callSet(values);
        ///////////////////////////////INICIO-COMENTAR/////////////////////////////////
        // onCompleted();
        /////////////////////////////////FIN-COMENTAR//////////////////////////////////
    };
    const onCancel = () => {
        onCompleted();
    }
    return <View
        item={user}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        companies={companies}
    />;
}

FormSet.propTypes = {
    itemId: PropTypes.number.isRequired,    
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSet;