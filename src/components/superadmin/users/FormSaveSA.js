import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import View from "components/superadmin/users/FormSA.view";
import swal from "sweetalert";
import { object, string, ref } from "yup";


function FormSave({
  onCompleted = () => null,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showCompany, setShowCompany] = useState(true);
  const [selectedType, setSelectedType] = useState("ADMIN");

  const qUsers = useQuery(
    `
        { 
            users {
                id
                email
                firstName
                lastName
                type
            } 
        }
        `
  );

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

  const [callSave, qSave] = usePost("/users/create_user_superadmin", {
    onCompleted: () => {
      qUsers.refetch();
      swal("¡Listo!", "Se ha creado el usuario de manera exitosa.", "success");
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
    if (pass.length < 8)
      return false;
    else
      return true;
  };

  const validateLetters = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(keyValue))
      e.preventDefault();
  }

  const validationSchema = object({
    password: string().test({
      name: "password",
      test(value, context) {
        if (!validatePassword(password) && password) {
          return context.createError({
            message: "La contraseña no cumple con los requisitos mínimos.",
          });
        }
        return true;
      },
    }),
    passwordConfirm: string().test({
      name: "passwordConfirm",
      test(value, context) {
        if (passwordConfirm !== password) {
          return context.createError({
            message: "Las contraseñas no coinciden.",
          });
        }
        return true;
      },
    }), firstName: string().test({
      name: "firstName",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un nombre al usuario" });

        return true;

      }
    }),
    lastName: string().test({
      name: "lastName",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un apellido al usuario" });

        return true;

      }
    }),
    email: string().test({
      name: "email",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un correo electrónico al usuario" });

        return true;

      }
    }),
  });

  const onChangeType = (event) => {
    const newValue = event.target.value;
    setShowCompany(newValue !== "NORMAL" && newValue !== "SUPERADMIN")
    setSelectedType(newValue);
  }

  const onSubmit = (values) => {
    let newValues = JSON.parse(JSON.stringify(values));

    newValues.password = password;
    newValues.type = document.getElementById("type").value;
    if (newValues.type === "NORMAL" || newValues.type === "SUPERADMIN")
      newValues.company_id = null;
    else
      newValues.company_id = parseInt(values.company.id);

    delete newValues.company;

    if (validationSchema.validate({ password })) {
      callSave(newValues)
    }
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
    selectedType={selectedType}
    showPassConfirm={showPassConfirm}
    setSelectedType={setSelectedType}
    validateLetters={validateLetters}
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