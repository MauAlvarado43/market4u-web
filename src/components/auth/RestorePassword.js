import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/auth/RestorePassword.view";
import { usePost } from "seed/api";

function RestorePassword(props) {
  const { token = null } = props.match.params;
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const [callRestore, reqRestore] = usePost("/users/restore_password", {
    onCompleted: () => {
      setStatus("SUCCESS");
      setMessage("El cambio de contraseña ha sido exitoso, ahora puede iniciar sesión");
    },
    onError: (data) => {
      setStatus("ERROR");
      switch (data.status) {
        case 401:
          setMessage("No se encontró la solicutd, por favor intentelo nuevamente");
          break;
        case 421:
          setMessage("El link ya no es válido, han pasado mas de 20 minutos desde que se generó");
          break;
        default:
          setMessage("Error");
          break;
      }

    },
    includeAuth: false,
  });

  const onSubmit = (values) => {
    const { password, confirmPassword } = values;
    if (password != confirmPassword) {
      setStatus("ERROR");
      setMessage("Las contraseñas no coinciden, por favor verifiquelas");
    } else {
      callRestore({
        token: token,
        new_password: password,
      });
    }
  };

  return <View onSubmit={onSubmit} status={status} message={message} />;
}

RestorePassword.propTypes = {
  props: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default RestorePassword;
