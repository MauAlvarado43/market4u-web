import React, { useState } from "react";
import View from "components/auth/Signup.view";
import { usePost } from "seed/api";
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

        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese un nombre" });

        if(value.length < 3)
          return context.createError({ message: "El nombre debe tener al menos 3 caracteres" });

        return true;

      }
    }),
    lastname: string().test({
      name: "lastname",
      test(value, context) {

        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese un apellido" });

        if(value.length < 3)
          return context.createError({ message: "El apellido debe tener al menos 3 caracteres" });

          return true;

      }
    }),
    email: string().test({
      name: "email",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese un correo electrónico" });
        
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) 
          return context.createError({ message: "Ingrese un correo electrónico válido" });

        return true;

      }
    }),
    password: string().test({
      name: "password",
      test(value, context) {

        if(!value || value.length === 0)
          return context.createError({ message: "Ingrese una contraseña" });

        if(value.length < 8)
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        return true;

      }
    }),
    confirmPassword: string().test({
      name: "confirmPassword",
      test(value, context) {
          
        if(!value || value.length === 0) 
          return context.createError({ message: "Confirme la contraseña" });

        if(value.length < 8) 
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        if(value != context.parent.password)
          return context.createError({ message: "Las contraseñas no coinciden" });

        return true;
  
      }
    })
  })

  const [callSignup, reqSignup] = usePost("/users/signup", {
    onCompleted: (data) => {
      window.location.href = `/verify_email/${data.token}`
    },
    onError: (data) => {
      setLoading(false);
      switch (data.status) {
        case 401:
          setError("El correo ingresado ya se encuentra registrado");
          break;
        default:
          setError("Error");
          break;
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
