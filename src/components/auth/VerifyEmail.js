import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import View from "components/auth/VerifyEmail.view";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";
import { object, string } from "yup";
import swal from "sweetalert";

function VerifyEmail(props) {

  const { token = "" } = props.match.params;

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);

  const verifyEmailSchema = object({
    code: string().test({
      name: "code",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese el código de verificación" });

        if (!/^\d+$/.test(value))
          return context.createError({ message: "El código consta solamente de números" });

        return true;

      }
    })
  })

  const [callVerify, reqVerify] = usePost("/users/registry_verify", {
    onCompleted: () => {
      swal({
        title: "¡Cuenta verificada!",
        icon: "success",
        text: "Ya puedes iniciar sesión",
        buttons: {
          confirm: {
            text: "Iniciar sesión",
            className: "swal-button btn-primary",
            visible: true,
          },

        },
      }).then((respuesta) => {
        if (respuesta) {
          window.location.replace("/login");
        }
      });
    },
    onError: (error) => {
      if (error.status == 421) {
        swal("Código inválido", "Código inválido, por favor intente otra vez", "error");
      } else {
        swal("Error inesperado", "Error interno del servidor, por favor intente mas tarde", "error");
      }
    },
    includeAuth: false,
  });

  const [callGenerate, reqGenerate] = usePost("/users/registry_generate", {
    onCompleted: () => {
      swal("Código reenviado", "Código enviado nuevamente, asegúrate de verificarlo", "success")
    },
    onError: (data) => {
      if (data.status == 500) {
        swal("Error inesperado", "Error interno del servidor, por favor intente mas tarde", "error");
      }
    },
    includeAuth: false,
  });

  const onSubmit = (values) =>
    callVerify({ token: token, code: values.code });

  const onClickGenerate = () => callGenerate({ token: token });

  return (
    <View
      error={error}
      message={message}
      onClickGenerate={onClickGenerate}
      onSubmit={onSubmit}
      verifyEmailSchema={verifyEmailSchema}
      verified={verified}
    />
  );

}

VerifyEmail.propTypes = {
  props: PropTypes.object,
  match: PropTypes.object,
};

export default VerifyEmail;
