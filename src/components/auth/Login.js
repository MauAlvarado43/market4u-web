import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import swal from "sweetalert";
import View from "components/auth/Login.view";
import { object, string } from "yup";

function Login({ history }) {

  const [token, setToken] = useState("");

  const loginSchema = object({
    email: string().test({
      name: "email",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un correo electrónico" });

        return true;

      }
    }),
    password: string().test({
      name: "password",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese una contraseña" });

        return true;

      }
    })
  })

  const [error, setError] = useState(null);
  const [passwordField, setPasswordField] = useState(false);

  const [callGenerate, reqGenerate] = usePost("/users/registry_generate", {
    onCompleted: () => {
      window.location.replace(`/verify_email/${token}`);
    },
    onError: () => {
      swal("Error inesperado", "Error interno del servidor, por favor intente mas tarde", "error");
    },
    includeAuth: false,
  });

  const [callLogin, reqLogin] = usePost("/users/login", {
    onCompleted: (data) => {
      if (data.token) {
        swal({
          title: "Usuario no verificado",
          icon: "error",
          text: "Aún no verificas tu correo, para iniciar sesión hazlo ahora mismo",
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
        // swal("Usuario no verificado", "Aún no verificas tu correo, para iniciar sesión hazlo ahora mismo", "error");
      } else {
        sessionStorage.setItem("token", data.key);
        sessionStorage.setItem("id", data.user);
        sessionStorage.setItem("company", data.company);
        sessionStorage.setItem("type", data.type);
        if (data.type == "NORMAL") {
          window.location.replace("/home");
        } else {
          window.location.replace("/profile/info");
        }
      }

    },
    onError: (error) => {
      swal("Error al iniciar sesión", "Usuario o contraseña incorrectos", "error");
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