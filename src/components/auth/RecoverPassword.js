import React, { useState } from "react";
import View from "components/auth/RecoverPassword.view";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { object, string } from "yup";

function RecoverPassword() {

  const [token, setToken] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const recoverPasswordSchema = object({
    email: string().test({
      name: "email",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un correo electrónico" });

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          return context.createError({ message: "Ingrese un correo electrónico válido" });

        return true;

      }
    }),
  });

  const [callGenerate, reqGenerate] = usePost("/users/registry_generate", {
    onCompleted: () => {
      window.location.replace(`/verify_email/${token}`);
    },
    onError: () => {
      swal("Error inesperado", "Error interno del servidor, por favor intente mas tarde", "error");
    },
    includeAuth: false,
  });

  const [callRecover, reqRecover] = usePost("/users/recover_password", {
    onCompleted: (data) => {
      if (data.token) {
        swal({
          title: "Usuario no verificado",
          icon: "error",
          text: "Aún no verificas tu correo, hazlo ahora mismo para restablecer tu contraseña",
          buttons: {
            cancel: {
              text: "Regresar",
              className: "swal-button btn-secondary",
              closeModal: true,
              visible: true,
            },
            confirm: {
              text: "Verificar correo",
              className: "swal-button btn-primary",
              visible: true,
            },
          },
        }).then((response) => {
          if (response) {
            setToken(data.token);
            callGenerate({ token: data.token });
          }
        });
      } else {
        swal("Restablecimiento enviado", "Se ha enviado un link de restablecimiento de contraseña a su correo electrónico", "success");
      }
    },
    onError: (data) => {
      switch (data.status) {
        case 401:
          swal("Correo no encontrado", "El correo electrónico ingresado no se encuentra registrado", "error");
          break;
        default:
          swal("Error inesperado", "Error interno del servidor, por favor intente mas tarde", "error");
          break;
      }
    },
    includeAuth: false,
  });

  const onSubmit = (values) => {
    const { email } = values;
    callRecover({ email: email })
  }

  return <View
    onSubmit={onSubmit}
    error={error}
    message={message}
    recoverPasswordSchema={recoverPasswordSchema}
  />;
}

RecoverPassword.propTypes = {};

export default RecoverPassword;