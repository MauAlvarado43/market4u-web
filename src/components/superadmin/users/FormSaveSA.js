import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import View from "components/superadmin/users/FormSA.view";
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

  const [callSave, qSave] = usePost("/users/create_user_superadmin", {
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
    })
  });

  const onChangeType = (event) => {
    const newValue = event.target.value;
    setShowCompany(newValue !== "NORMAL" && newValue !== "SUPERADMIN")
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