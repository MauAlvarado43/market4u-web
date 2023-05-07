import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import View from "components/auth/VerifyEmail.view";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";
import { object, string } from "yup";

function VerifyEmail(props) {

  const { token = "" } = props.match.params;

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);

  const verifyEmailSchema = object({
    code: string().test({
      name: "code",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese el código de verificación" });

        return true;

      }
    })
  })

  const [callVerify, reqVerify] = usePost("/users/registry_verify", {
    onCompleted: () => {
      setError(null);
      setMessage("Correo verificado exitosamente, ahora puedes iniciar sesión");
      setVerified(true);
    },
    onError: (error) => {
      setMessage(null);
      switch (error.status) {
        case 421:
          setError("El link ya no es válido, han pasado mas de 20 minutos desde que se generó");
          break;
        default:
          setError("Error");
          break;
      }
    },
    includeAuth: false,
  });

  const [callGenerate, reqGenerate] = usePost("/users/registry_generate", {
    onCompleted: () => {
      setError(null);
      setMessage("Link enviado nuevamente, asegurate de verificarlo en los próximos 20 minutos");
    },
    onError: (data) => {
      setMessage(null);
      if(data.status == 400) {
        setError("Error");
      }
    },
    includeAuth: false,
  });

  useEffect(() => {
    // callVerify({ token: token });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reqVerify.loading) return <Loading />;

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
