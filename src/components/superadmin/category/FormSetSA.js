import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { CATEGORY, SET_CATEGORY } from "seed/gql/queries";
import View from "components/superadmin/category/FormSA.view";
import { object, string } from "yup";
function FormSet({ categoryId, onCompleted = () => null, onError = () => null }) {

    const qCategory = useDetail(CATEGORY,
        categoryId
    );

    const [callSet, qSet] = useSet(SET_CATEGORY, {
        onCompleted: () => {
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

    if (qCategory.loading) return <Loading />;

    const { category = {} } = qCategory.data;

    const error = qSet.error ? "Error" : null;

    const onSubmit = (values) => {
        values.id = parseInt(categoryId);
        callSet(values);
    };

    const onCancel = () => {
        onCompleted();
    }

    return <View
        category={category}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
    />;
}

FormSet.propTypes = {
    categoryId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSet;