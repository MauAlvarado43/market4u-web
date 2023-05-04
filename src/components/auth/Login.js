import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import View from "components/auth/Login.view";

function Login({ history }) {

  const [error, setError] = useState(null);
  const [passwordField, setPasswordField] = useState(true);

  const [callLogin, reqLogin] = usePost("/users/login", {
    onCompleted: (data) => {
      sessionStorage.setItem("token", data.key);
      sessionStorage.setItem("id", data.user);
      sessionStorage.setItem("company", data.company);

      history.replace("/");
    },
    onError: () => {
      setError("Usuario o contraseña incorrectos")
    },
    includeAuth: false
  });


  const onSubmit = (values) => {
    const { email, password } = values;
    callLogin({ email: email, password: password });
  };

  const onClickShowPassword = () => setPasswordField(!passwordField);

  return (
    <View
      error={error}
      passwordField={passwordField}
      onSubmit={onSubmit}
      onClickShowPassword={onClickShowPassword}
    />
  );
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
