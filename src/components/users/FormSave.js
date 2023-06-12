import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import View from "components/users/Form.view";
import swal from "sweetalert";
import { object, string } from "yup";

function FormSave({ onCompleted = () => null, refetchQuery = () => null }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [callSave, qSave] = usePost("/users/create_user_company", {
    onCompleted: () => {
      swal("¡Listo!", "Se ha creado el usuario de manera exitosa.", "success").then(() => {
        onCompleted();
        refetchQuery();
      });
    },
  });

  const qUsers = useQuery(`{ users { username } }`);

  const error = qSave.error ? "Ha ocurrido un error" : null;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityConfirm = () => {
    setShowPassConfirm(!showPassConfirm);
  };


  const validateLetters = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;

    if (!regex.test(keyValue)) e.preventDefault();
  };


  const validationSchema = object({
    password: string().test({
      name: "password",
      test(value, context) {

        if (password === "")
          return context.createError({ message: "Ingrese una contraseña" });

        if (password.length < 8)
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        return true;

      }
    }),
    passwordConfirm: string().test({
      name: "passwordConfirm",
      test(value, context) {
        if (passwordConfirm === "")
          return context.createError({ message: "Confirme la contraseña" });

        if (passwordConfirm != password)
          return context.createError({ message: "Las contraseñas no coinciden" });

        return true;

      }
    }),
    firstName: string().test({
      name: "firstName",
      test(value, context) {
        if (!value || value.length === 0)
          return context.createError({
            message: "Ingrese un nombre para el usuario",
          });

        if (value.length < 3)
          return context.createError({
            message: "El nombre debe tener al menos 3 caracteres",
          });

        return true;
      },
    }),
    lastName: string().test({
      name: "lastName",
      test(value, context) {
        if (!value || value.length === 0)
          return context.createError({
            message: "Ingrese un apellido para el usuario",
          });

        if(value.length < 3)
          return context.createError({ message: "El apellido debe tener al menos 3 caracteres" });

        return true;
      },
    }),
    email: string().test({
      name: "email",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un correo electrónico" });

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          return context.createError({ message: "Ingrese un correo electrónico válido" });

        return true;

      }
    })
  });

  const companyID = sessionStorage.getItem("company");

  const onSubmit = async (values) => {
    const existingUsername = qUsers.data.users.find(
      (user) => user.username.toLowerCase() === values.email.toLowerCase()
    );

    if(existingUsername)
      return swal("¡Error!", "El correo que intentas registrar, ya está en uso", "error");
    
    let newValues = JSON.parse(JSON.stringify(values));
    
    newValues.password = password;
    newValues.type = 'SELLER';
    
    newValues.company_id = parseInt(companyID);

    delete newValues.company;
    
    callSave(newValues);
  };

  const onCancel = () => {
    onCompleted();
  };

  return (
    <View
      error={error}
      onSubmit={onSubmit}
      onCancel={onCancel}
      setPassword={setPassword}
      showPassword={showPassword}
      showPassConfirm={showPassConfirm}
      validateLetters={validateLetters}
      validationSchema={validationSchema}
      setPasswordConfirm={setPasswordConfirm}
      togglePasswordVisibility={togglePasswordVisibility}
      togglePasswordVisibilityConfirm={togglePasswordVisibilityConfirm}
    />
  );
}

FormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
};

export default FormSave;
