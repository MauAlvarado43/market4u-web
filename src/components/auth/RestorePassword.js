import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/auth/RestorePassword.view";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { object, string } from "yup";

function RestorePassword(props) {

  const { token = "" } = props.match.params;
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const [passwordField, setPasswordField] = useState(false);
  const [confirmPasswordField, setConfirmPasswordField] = useState(false);

  const onClickShowPassword = () => setPasswordField(!passwordField);
  const onClickShowConfirmPassword = () => setConfirmPasswordField(!confirmPasswordField);

  const restorePasswordSchema = object({
    password: string().test({
      name: "password",
      test(value, context) {

        if(!value || value.length === 0)
          return context.createError({ message: "Ingrese una contraseña" });

        if(value.length < 8)
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        return true;

      }
    }),
    confirmPassword: string().test({
      name: "confirmPassword",
      test(value, context) {
          
        if(!value || value.length === 0) 
          return context.createError({ message: "Confirme la contraseña" });

        if(value.length < 8) 
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        if(value != context.parent.password)
          return context.createError({ message: "Las contraseñas no coinciden" });

        return true;
  
      }
    })
  })

  const [callRestore, reqRestore] = usePost("/users/restore_password", {
    onCompleted: () => {
      swal({
        title: "Contraseña actualizada",
        icon: "success",
        text: "El cambio de contraseña ha sido exitoso, ahora puede iniciar sesión",
        buttons: {
          cancel: {
            text: "Regresar",
            className: "swal-button btn-secondary",
            closeModal: true,
            visible: true,
          },
          confirm: {
            text: "Iniciar sesión",
            className: "swal-button btn-primary",
            visible: true,
          },
        },
      }).then((response) => {
        if (response) {
          window.location.replace(`/login`);
        }
      });
    },
    onError: (data) => {
      switch (data.status) {
        case 401:
          swal("Usuario no encontrado", "No se encontró la solicutd, por favor intentelo nuevamente", "error");
          break;
        default:
          swal("Error inesperado", "Error interno del servidor, por favor intente mas tarde", "error");
          break;
      }
    },
    includeAuth: false,
  });

  const onSubmit = (values) => {
    const { password, confirmPassword } = values;
    callRestore({
      token: token,
      new_password: password,
    });
  };

  return <View 
    onSubmit={onSubmit} 
    passwordField={passwordField}
    confirmPasswordField={confirmPasswordField}
    onClickShowPassword={onClickShowPassword}
    onClickShowConfirmPassword={onClickShowConfirmPassword}
    error={error}
    message={message} 
    restorePasswordSchema={restorePasswordSchema}
  />;

}

RestorePassword.propTypes = {
  props: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default RestorePassword;
