import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { COMPANY, SET_COMPANY } from "seed/gql/queries";
import View from "components/superadmin/companies/FormSA.view";
import { object, string } from "yup";
import swal from "sweetalert";

function FormSet({ itemId, onCompleted = () => null, onError = () => null }) {

    const re = /^[A-Z&Ñ]{3,4}[0-9]{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[A-Z0-9]{2}[0-9A]$/;

    const qCompanies = useQuery(
        `
        {
            companies {
                name
                rfc
            }
        }
        `);

    const { companies = [] } = qCompanies.data;

    const qItem = useDetail(
        COMPANY,
        itemId
    );

    const [callSet, qSet] = useSet(SET_COMPANY, {
        onCompleted: () => {
            onCompleted();
            swal("¡Listo!", "Se ha actualizado la oferta de manera exitosa.", "success");
        }
    }
    );

    const productSchema = object({
        name: string().test({
            name: "name",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el nombre fiscal de la empresa" });

                for (let i = 0; i < companies.length; i++) {
                    if(companies[i].id != itemId)
                        if (companies[i].name === value)
                            return context.createError({ message: "Este nombre fiscal ya está registrado por otra empresa" });
                }

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

                if (!re.test(value)) {
                    return context.createError({ message: "El RFC no es válido" });
                }

                for (let i = 0; i < companies.length; i++) {
                    if(companies[i].id != itemId)
                        if (companies[i].rfc === value)
                            return context.createError({ message: "Este rfc ya está registrado por otra empresa" });
                }

                return true;

            }
        }),
        cp: string().test({
            name: "cp",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el código postal de la empresa" });

                if (value.length != 5)
                    return context.createError({ message: "El código postal debe de ser de 5 dígitos" });

                return true;

            }
        }),
        phone: string().test({
            name: "phone",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el teléfono de la empresa" });

                if (value.length != 10) {
                    return context.createError({ message: "El número de teléfono debe de ser de 10 dígitos" });
                }

                return true;

            }
        }),
        email: string().test({
            name: "email",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el correo electrónico de la empresa" });

                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
                    return context.createError({ message: "Ingrese un correo electrónico válido" });

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
                    return context.createError({ message: "Ingrese el sitio web de la empresa" });


                if (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value))
                    return context.createError({ message: "Ingrese un sitio web de la forma: https://ejemplo.com" });

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
        }), state: string().test({
            name: "state",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el estado de la empresa" });

                return true;

            }
        })

    })

    if (qItem.loading) return <Loading />;

    const { company = {} } = qItem.data;

    const error = qSet.error ? "Error" : null;

    const onSubmit = (values) => {
        values.id = parseInt(itemId);
        values.cp = parseInt(values.cp)
        values.photo = parseInt(values.photo.id);
        values.phone = String(values.phone)
        callSet(values);
    };

    const onCancel = () => {
        onCompleted();
    }
    return <View
        item={company}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        productSchema={productSchema}
    />;
}

FormSet.propTypes = {
    itemId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSet;