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
import { COMPANY, SET_COMPANY } from "seed/gql/queries";
import View from "components/superadmin/companies/FormSA.view";
///////////////////////////////////FIN-EDITAR/////////////////////////////////////

function FormSet({ 
    itemId, 
    onCompleted = () => null, 
    onError = () => null 
}) {
    const qItem = useDetail(
        
        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
        COMPANY, 
        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

        itemId
    );
    const [callSet, qSet] = useSet(
        
        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
        SET_COMPANY, 
        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

        {
            onCompleted: () =>{
                onCompleted();
            }
            //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
        }
    );
    if (qItem.loading) return <Loading />;
    /////////////////////////////////DESCOMENTAR/////////////////////////////////// 
    const { company = {} } = qItem.data;
    ///////////////////////////////INICIO-COMENTAR/////////////////////////////////
    // let item = {
    //    id: "1",
    //    name: "NombreFiscal",
    //    commonName: "NombreComercial",
    //    rfc: "AAAAAAAAAAAAAAAA",
    //    cp: "00000",
    //    phone: "0000000000",
    //    email: "a@b.c",
    //    municipality: "municipio",
    //    state: "estado",
    //};
    /////////////////////////////////FIN-COMENTAR//////////////////////////////////    
    const error = qSet.error ? "Error" : null;
    const onSubmit = (values) => {
        
        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
        values.id = parseInt(itemId);
        values.cp = parseInt(values.cp)
        values.photo = parseInt(values.photo.id);
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
        item={company}
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