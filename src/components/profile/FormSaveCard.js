import React from "react";
import PropTypes from "prop-types";
import View from "components/profile/FormCard.view";
import { SAVE_PAYMENT } from "seed/gql/queries";
import { useSave } from "seed/gql";

function FormSaveCard() {
    const [ callSave, setCallSave] = useSave(SAVE_PAYMENT, {
        onCompleted: () => {
            console.log("a");
        }
    });

    const onSumbit = (values) => {
        
    }

    return <View/>;
}

FormSaveCard.propTypes = { };
  
export default FormSaveCard;