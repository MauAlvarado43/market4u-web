import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { usePost } from "seed/api";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { SAVE_COMPANY } from "seed/gql/queries";
import View from "components/superadmin/companies/FormSA.view";

function FormSave({ onCompleted = () => null, onError = () => null, refetchQuery }) {

    const [callSave, qSave] = useSave(SAVE_COMPANY, {
        onCompleted: (data) => {
            refetchQuery();
            onCompleted();
        }
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
        callSave(values);
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