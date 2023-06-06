import React from "react";
import PropTypes from "prop-types";
import { useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { CATEGORY, SET_CATEGORY } from "seed/gql/queries";
import View from "components/superadmin/category/FormSA.view";
import { object, string } from "yup";
import swal from "sweetalert";
function FormSet({ categoryId, onCompleted = () => null, onError = () => null }) {
    const reqCategories = useQuery(`{ categories { name } }`);

    const qCategory = useDetail(CATEGORY,
        categoryId
    );

    const [callSet, qSet] = useSet(SET_CATEGORY, {
        onCompleted: () => {
            onCompleted();
            reqCategories.refetch();
        }
    });

    if (qCategory.loading) return <Loading />;
    
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

    const { category = {} } = qCategory.data;

    const error = qSet.error ? "Error" : null;

    const onSubmit = (values) => {
        values.id = parseInt(categoryId);
        const existingCategory = reqCategories.data.categories.find(
            (category) => category.name.toLowerCase() === values.name.toLowerCase()
        );
    
        if (existingCategory) {
            swal("¡Error!", "Ya existe una categoría con ese nombre", "error")
        } else {
            callSet(values);
        }
    };

    const onCancel = () => {
        onCompleted();
    }

    return <View
        category={category}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        productSchema={productSchema}
        validateLetters={validateLetters}
    />;
}

FormSet.propTypes = {
    categoryId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSet;