import React, { useState } from "react";
import PropTypes from "prop-types";
import { object, string } from "yup";
import View from "components/auth/company/Fiel.view";

function Fiel({ onFinish, setData }) {

  const [passwordField, setPasswordField] = useState(false);

  const fielSchema = object({
    password: string().test({
      name: "password",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese la contraseña de clave privada" });

        return true;

      }
    })
  });

  const onClickShowPassword = () => setPasswordField(!passwordField);

  const onSubmit = (values) => {
    console.log("values", values);
    setData((prev) => { return {...prev, validation: values} });
    onFinish();
  }

  return <View fielSchema={fielSchema} passwordField={passwordField} onClickShowPassword={onClickShowPassword} onSubmit={onSubmit}/>;
}

Fiel.propTypes = {};

export default Fiel;