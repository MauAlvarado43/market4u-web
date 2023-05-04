import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import View from "components/auth/VerifyEmail.view";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";

function VerifyEmail(props) {
  const { token = "" } = props.match.params;

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [callVerify, reqVerify] = usePost("/users/registry_verify", {
    onCompleted: () => {
      setStatus("SUCCESS");
      setMessage("Correo verificado exitosamente, ahora puedes iniciar sesión");
    },
    onError: (error) => {
      setStatus("ERROR");
      switch (error.status) {
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

  const [callGenerate, reqGenerate] = usePost("/users/registry_generate", {
    onCompleted: () => {
      setStatus("SUCCESS");
      setMessage("Link enviado nuevamente, asegurate de verificarlo en los próximos 20 minutos");
    },
    onError: (data) => {
      if (data.status == 400) {
        setStatus("ERROR");
        setMessage("Error");
      }
    },
    includeAuth: false,
  });

  useEffect(() => {
    callVerify({ token: token });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reqVerify.loading) return <Loading />;
  const onClickGenerate = () => callGenerate({ token: token });

  return (
    <View status={status} message={message} onClickGenerate={onClickGenerate} />
  );
}

VerifyEmail.propTypes = {
  props: PropTypes.object,
  match: PropTypes.object,
};

export default VerifyEmail;
