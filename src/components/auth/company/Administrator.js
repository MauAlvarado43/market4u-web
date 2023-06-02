import React, { useState } from "react";
import PropTypes from "prop-types";
import { object, string } from "yup";
import View from "components/auth/company/Administrator.view";

function Administrator({ setActiveStep, setData }) {

  const [passwordField, setPasswordField] = useState(false);
  const [confirmPasswordField, setConfirmPasswordField] = useState(false);

  const userSchema = object({
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

  const onClickShowPassword = () => setPasswordField(!passwordField);
  const onClickShowConfirmPassword = () => setConfirmPasswordField(!confirmPasswordField);

  const onSubmit = (values) => {
    setActiveStep(3);
    setData((prev) => { return {...prev, user: values} });
  }

  return (
    <View
      userSchema={userSchema}
      onSubmit={onSubmit}
      passwordField={passwordField}
      confirmPasswordField={confirmPasswordField}
      onClickShowPassword={onClickShowPassword}
      onClickShowConfirmPassword={onClickShowConfirmPassword}
    />
  );
}

Administrator.propTypes = {};

export default Administrator;