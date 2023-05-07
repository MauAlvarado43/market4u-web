import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import View from "components/auth/Login.view";
import { object, string } from "yup";

function Login({ history }) {

  const loginSchema = object({
    email: string().test({
      name: "email",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese un correo electrónico" });

        return true;

      }
    }),
    password: string().test({
      name: "password",
      test(value, context) {

        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese una contraseña" });

        return true;

      }
    })
  })

  const [error, setError] = useState(null);
  const [passwordField, setPasswordField] = useState(false);

  const [callLogin, reqLogin] = usePost("/users/login", {
    onCompleted: (data) => {
      setError(null);
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

  const onSubmit = async (values) => {
    const { email, password } = values;
    await loginSchema.validate({ email, password });
    callLogin({ email: email, password: password });
  };

  const onClickShowPassword = () => setPasswordField(!passwordField);

  return (
    <View
      error={error}
      passwordField={passwordField}
      onSubmit={onSubmit}
      onClickShowPassword={onClickShowPassword}
      loginSchema={loginSchema}
    />
  );
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;