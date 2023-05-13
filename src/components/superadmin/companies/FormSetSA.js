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


import { COMPANY, SET_COMPANY } from "seed/gql/queries";
import View from "components/superadmin/companies/FormSA.view";


function FormSet({ 
    itemId, 
    onCompleted = () => null, 
    onError = () => null 
}) {
    const qItem = useDetail(
        
        
        COMPANY, 
        

        itemId
    );
    const [callSet, qSet] = useSet(
        
        
        SET_COMPANY, 
        

        {
            onCompleted: () =>{
                onCompleted();
            }
            //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
        }
    );
    if (qItem.loading) return <Loading />;
    
    const { company = {} } = qItem.data;
    
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
        
    const error = qSet.error ? "Error" : null;
    const onSubmit = (values) => {
        
        
        values.id = parseInt(itemId);
        values.cp = parseInt(values.cp)
        values.photo = parseInt(values.photo.id);
        
        
        
        callSet(values);
        
        // onCompleted();
        
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