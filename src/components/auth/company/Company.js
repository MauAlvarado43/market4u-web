import React from "react";
import PropTypes from "prop-types";
import { object, string } from "yup";
import View from "components/auth/company/Company.view";

function Company({ setActiveStep, setData }) {

  const companySchema = object({
    name: string().test({
      name: "name",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese el nombre fiscal" });

        return true;

      }
    }),
    commonName: string().test({
      name: "commonName",
      test(value, context) {

        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese el nombre comercial" });

        return true;

      }
    }),
    rfc: string().test({
      name: "rfc",
      test(value, context) {

        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese el rfc de la empresa" });
        if (value.length !== 13)
          return context.createError({ message: "El rfc de la empresa debe tener 13 caracteres" });

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
    })
  });

  const onSubmit = (values) => {
    setActiveStep(2);
    setData((prev) => { return {...prev, company: values} });
  }

  return <View companySchema={companySchema} onSubmit={onSubmit}/>;
}

Company.propTypes = {};

export default Company;