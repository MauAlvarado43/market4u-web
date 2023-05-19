import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import View from "components/users/Form.view";
import swal from "sweetalert";
import { object, string } from "yup";


function FormSave({
    onCompleted = () => null,
    refetchQuery
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [showCompany, setShowCompany] = useState(true);

    const qUsers = useQuery(
        `
        { 
            users {
                id
                email
            } 
        }
        `
    );
    const { users = [] } = qUsers.data;

    const qCompanies = useQuery(
        `
        { 
            companies {
                id
                name
            } 
        }
        `
    );
    const { companies = [] } = qCompanies.data;

    const [callSave, qSave] = usePost("/users/create_user_company", {
        onCompleted: () => {
            swal("¡Listo!", "Se ha creado el usuario de manera exitosa.", "success");
            onCompleted();
            refetchQuery();
        },
    });

    const error = qSave.error ? "An error has occurred" : null;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibilityConfirm = () => {
        setShowPassConfirm(!showPassConfirm);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (event.target.value !== "") {
            document.getElementById("passConfirm").disabled = false;
        } else {
            document.getElementById("passConfirm").disabled = true;
            document.getElementById("passConfirm").value = "";
        }
    };

    const validatePassword = (pass) => {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        if (regex.test(pass)) {
            return true;
        } else {
            return false;
        }
    };

    const validationSchema = object({
        password: string().test({
            name: "password",
            test(value, context) {
                if (!validatePassword(password) && (password))
                    return context.createError({
                        message: "La contraseña debe de tener al menos 8 caracteres, un caracter especial y un número."
                    });

                return true;
            }
        }),
        passwordConfirm: string().test({
            id: "passConfirm",
            test(value, context) {
                if (passwordConfirm !== password) {
                    return context.createError({
                        message: "Las contraseñas no coinciden",
                    });
                }

                return true;

            }
        }),
        firstName: string().test({
            name: "firstName",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el nombre del usuario" });

                return true;

            }
        }),
        lastName: string().test({
            name: "lastName",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el apellido del usuario" });

                return true;

            }
        }),
        email: string().test({
            name: "email",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el correo electrónico del usuario" });

                return true;

            }
        }),
        telephone: string().test({
            name: "telephone",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el teléfono del usuario" });

                return true;

            }
        }),
        street: string().test({
            name: "street",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese la calle del usuario" });

                return true;

            }
        }),
        cologn: string().test({
            name: "cologn",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese la colonia del usuario" });

                return true;

            }
        }),
        city: string().test({
            name: "city",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese la ciudad del usuario" });

                return true;

            }
        }),
        cp: string().test({
            name: "cp",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el código postal del usuario" });

                return true;

            }
        }),
        municipality: string().test({
            name: "municipality",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el municipio del usuario" });

                return true;

            }
        })
    });

    const onChangeType = (event) => {
        const newValue = event.target.value;
        setShowCompany(newValue !== "NORMAL" && newValue !== "SUPERADMIN")
    }


    const companyId = sessionStorage.getItem("company");

    const onSubmit = (values) => {
        let newValues = JSON.parse(JSON.stringify(values));

        newValues.password = password;

        newValues.company_id = parseInt(companyId);

        //delete newValues.company;
        console.log(newValues)

        if (validationSchema.validate({ password }))
            callSave(newValues)
        else
            return;

    }

    const onCancel = () => {
        onCompleted();
    }

    return <View
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        companies={companies}
        setPassword={setPassword}
        showCompany={showCompany}
        onChangeType={onChangeType}
        showPassword={showPassword}
        showPassConfirm={showPassConfirm}
        validationSchema={validationSchema}
        setPasswordConfirm={setPasswordConfirm}
        handlePasswordChange={handlePasswordChange}
        togglePasswordVisibility={togglePasswordVisibility}
        togglePasswordVisibilityConfirm={togglePasswordVisibilityConfirm}
    />;
}

FormSave.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSave;