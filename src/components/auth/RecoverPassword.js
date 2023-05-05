import React, { useState } from "react";
import View from "components/auth/RecoverPassword.view";
import { usePost } from "seed/api";
import { object, string } from "yup";

function RecoverPassword() {

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const recoverPasswordSchema = object({
    email: string().test({
      name: "email",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese un correo electrónico" });

        return true;

      }
    }),
  });

  const [callRecover, reqRecover] = usePost("/users/recover_password", {
    onCompleted: () => {
      setError(null);
      setMessage("Se ha enviado un link de restablecimiento de contraseña a su correo");
    },
    onError: (data) => {
      setMessage(null);
      switch (data.status) {
        case 401:
          setError("Ese correo electronico no se encuentra registrado");
          break;
        case 420:
          setError("Primero verifique su cuenta a traves del link enviado a su correo electronico");
          break;
        default:
          setError("Error");
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