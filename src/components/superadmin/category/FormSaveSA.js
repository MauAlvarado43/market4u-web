import React from "react";
import PropTypes from "prop-types";
import { useSave, useQuery } from "seed/gql";
import { SAVE_CATEGORY } from "seed/gql/queries";
import View from "components/superadmin/category/FormSA.view";
import { object, string } from "yup";
import swal from "sweetalert";

function FormSave({ onCompleted = () => null }) {
    
    const reqCategories = useQuery(`{ categories { name } }`);
    const [callSave, qSave] = useSave(SAVE_CATEGORY, {
        onCompleted: (data) => {
            onCompleted();
            reqCategories.refetch();
        }
    });

    const error = qSave.error ? "An error has occurred" : null;

    const productSchema = object({
        name: string().test({
            name: "name",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese un nombre a la categoría" });

                return true;

            }
        }),
    })

    const validateLetters = (e) => {
        const key = e.key;
        const regex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
    
        if (!regex.test(key))
            e.preventDefault();
    }

    const onSubmit = (values) => {
        const existingCategory = reqCategories.data.categories.find(
            (category) => category.name.toLowerCase() === values.name.toLowerCase()
        );
    
        if (existingCategory) {
            swal("¡Error!", "Ya existe una categoría con ese nombre", "error")
        } else {
        callSave(values);
        }
    }

    const onCancel = () => {
        onCompleted();
    }

    return <View
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        validateLetters={validateLetters}
        productSchema={productSchema}
    />;
}

FormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSave;