import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { usePost } from "seed/api";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { SAVE_COMPANY } from "seed/gql/queries";
import View from "components/superadmin/companies/FormSA.view";
import { object, string } from "yup";
import swal from "sweetalert";

function FormSave({ onCompleted = () => null, onError = () => null, refetchQuery }) {

    const [callSave, qSave] = useSave(SAVE_COMPANY, {
        onCompleted: (data) => {
            refetchQuery();
            onCompleted();
            swal("¡Listo!", "Se ha creado la empresa de manera exitosa.", "success");
        }
    }
    );

    const productSchema = object({
        name: string().test({
            name: "name",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el nombre fiscal de la empresa" });

                return true;

            }
        }),
        commonName: string().test({
            name: "commonName",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el nombre comercial de la empresa" });

                return true;

            }
        }),
        rfc: string().test({
            name: "rfc",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el rfc de la empresa" });

                return true;

            }
        }),
        cp: string().test({
            name: "cp",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el código postal de la empresa" });

                return true;

            }
        }),
        phone: string().test({
            name: "phone",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el teléfono de la empresa" });

                return true;

            }
        }),
        email: string().test({
            name: "email",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el correo electrónico de la empresa" });

                return true;

            }
        }),
        municipality: string().test({
            name: "municipality",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el municipio de la empresa" });

                return true;

            }
        }),
        cologn: string().test({
            name: "cologn",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingresela colonia de la empresa" });

                return true;

            }
        }),
        website: string().test({
            name: "website",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el website de la empresa" });

                return true;

            }
        }),
        street: string().test({
            name: "street",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese la calle de la empresa" });

                return true;

            }
        }),
        city: string().test({
            name: "city",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese la ciudad de la empresa" });

                return true;

            }
        })
        
    })

    const error = qSave.error ? "An error has occurred" : null;

    const onSubmit = (values) => {
        values.cp = parseInt(values.cp);
        if (values.photo === undefined) {
            swal("No hay foto de la empresa!", "Por favor, ingresa un foto a la empresa.", "error");
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
        productSchema = {productSchema}
    />;
}

FormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSave;