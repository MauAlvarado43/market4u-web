import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { usePost } from "seed/api";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { SAVE_CATEGORY } from "seed/gql/queries";
import View from "components/superadmin/category/FormSA.view";
import * as Yup from "yup";

function FormSave({ onCompleted = () => null, onError = () => null, refetchQuery }) {
    const [callSave, qSave] = useSave(SAVE_CATEGORY, {
        onCompleted: (data) => {
            refetchQuery();
            onCompleted();
        }
    });

    const error = qSave.error ? "An error has occurred" : null;

    const validateLetters = (e) => {
        const keyCode = e.keyCode || e.which;
        const keyValue = String.fromCharCode(keyCode);
        const regex = /^[A-Za-z\s]+$/; 
    
        if (!regex.test(keyValue)) 
            e.preventDefault();
    }

    const onSubmit = (values) => {
        callSave(values)
    }

    const onCancel = () => {
        onCompleted();
    }

    return <View
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        validateLetters={validateLetters}
    />;
}

FormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSave;