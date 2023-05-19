import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSave } from "seed/gql";
import { SAVE_CATEGORY } from "seed/gql/queries";
import View from "components/superadmin/category/FormSA.view";
import { object, string } from "yup";
function FormSave({ onCompleted = () => null, onError = () => null, refetchQuery }) {
    const [callSave, qSave] = useSave(SAVE_CATEGORY, {
        onCompleted: (data) => {
            refetchQuery();
            onCompleted();
        }
    });

    const productSchema = object({
        name: string().test({
            name: "name",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese un nombre de la categoría" });

                return true;

            }
        })
    })

    const error = qSave.error ? "An error has occurred" : null;

    const onSubmit = (values) => {
        callSave(values);
    }

    const onCancel = () => {
        onCompleted();
    }

    return <View
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        productSchema={productSchema}
    />;
}

FormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSave;