import React, { useState } from "react";
import View from "components/auth/Signup.view";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { object, string } from "yup";

function Signup({ history }) {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordField, setPasswordField] = useState(false);
  const [confirmPasswordField, setConfirmPasswordField] = useState(false);

  const signupSchema = object({
    firstname: string().test({
      name: "firstname",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un nombre" });

        if (value.length < 3)
          return context.createError({ message: "El nombre debe tener al menos 3 caracteres" });

        if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i.test(value))
          return context.createError({ message: "El nombre solo debe contener letras" });

        return true;

      }
    }),
    lastname: string().test({
      name: "lastname",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un apellido" });

        if (value.length < 3)
          return context.createError({ message: "El apellido debe tener al menos 3 caracteres" });

        if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i.test(value))
          return context.createError({ message: "Los apellidos solo deben contener letras" });

        return true;

      }
    }),
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
    password: string().test({
      name: "password",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese una contraseña" });

        if (value.length < 8)
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        return true;

      }
    }),
    confirmPassword: string().test({
      name: "confirmPassword",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Confirme la contraseña" });

        if (value.length < 8)
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        if (value != context.parent.password)
          return context.createError({ message: "Las contraseñas no coinciden" });

        return true;

      }
    })
  })

  const [callSignup, reqSignup] = usePost("/users/signup", {
    onCompleted: (data) => {
      window.location.replace(`/verify_email/${data.token}`)
    },
    onError: (error) => {
      setLoading(false);
      if (error.status == 401) {

        swal({
          title: "Usuario ya registrado",
          icon: "error",
          text: "El correo ingresado ya se encuentra registrado, si eres tú por favor inicia sesión, de lo contrario ingrese otro correo",
          buttons: {
            cancel: {
              text: "Continuar registro",
              className: "swal-button btn-primary",
              closeModal: true,
              visible: true,
            },
            confirm: {
              text: "Iniciar sesión",
              className: "swal-button btn-secondary",
              visible: true,
            },
          },
        }).then((respuesta) => {
          if (respuesta) {
            window.location.replace("/login");
          }
        });

      } else {
        swal("Error inesperado", "Error interno del servidor, por favor intente mas tarde", "error");
      }
    },
    includeAuth: false
  });

  const onSubmit = async (values) => {
    const { firstname, lastname, email, password, confirmPassword } = values;
    await signupSchema.validate({ firstname, lastname, email, password, confirmPassword });
    setLoading(true);
    callSignup({
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
    });
  };

  const onClickShowPassword = () => setPasswordField(!passwordField);
  const onClickShowConfirmPassword = () => setConfirmPasswordField(!confirmPasswordField);

  return (
    <View
      onSubmit={onSubmit}
      passwordField={passwordField}
      confirmPasswordField={confirmPasswordField}
      onClickShowPassword={onClickShowPassword}
      onClickShowConfirmPassword={onClickShowConfirmPassword}
      error={error}
      loading={loading}
      signupSchema={signupSchema}
    />
  );
}

Signup.propTypes = {};

export default Signup;
