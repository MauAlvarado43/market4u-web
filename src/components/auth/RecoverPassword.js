import React, { useState } from "react";
import View from "components/auth/RecoverPassword.view";
import { usePost } from "seed/api";

function RecoverPassword() {

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const [callRecover, reqRecover] = usePost("/users/recover_password", {
    onCompleted: () => {
      setStatus("SUCCESS");
      setMessage("Se ha enviado un link de restablecimiento de contraseña a su correo");
    },
    onError: (data) => {
      setStatus("ERROR");
      switch (data.status) {
        case 401:
          setMessage("Ese correo electronico no se encuentra registrado");
          break;
        case 420:
          setMessage("Primero verifique su cuenta a traves del link enviado a su correo electronico");
          break;
        default:
          setMessage("Error");
          break;
      }
    },
    includeAuth: false,
  });

  const onSubmit = (values) => {
    const { email } = values;
    callRecover({ email: email })
  }

  return <View onSubmit={onSubmit} status={status} message={message} />;
}

RecoverPassword.propTypes = {};

export default RecoverPassword;