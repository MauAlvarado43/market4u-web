import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import swal from "sweetalert";
import View from "components/auth/company/SignupCompany.view";

function SignupCompany() {

  const [activeStep, setActiveStep] = useState(1);
  const [data, setData] = useState({});


  const [callSignup, reqSignup] = usePost('/companies/registry', {
    onCompleted: () => {
      swal("Empresa registrada", "Ahora puede empezar a vender tus productos, inicia sesión con la cuenta de usuario que registraste", "success").then(() => {
        window.location.href = "/login";
      });
    }, 
    onError: (error) => {
      
      if (error.code == 440) {
        swal("¡Compañia ya registrada!", "Ya existe una compañia con ese RFC, por favor compruebalo y vuelve a intentarlo", "error")
      } else if (error.code == 441) {
        swal("¡Usuario ya registrada!", "Ya existe una compañia con ese RFC, por favor compruebalo y vuelve a intentarlo", "error")
      } else if (error.code == 442) {
        swal("Fiel inválida", "No hemos podido comprobar su fiel, por favor verifiquelas y vuelva a intentarlo", "error")      
      } else {
        swal("Error del servidor", "Error interno del servidor, por favor intenta mas tarde", "error")
      }
    },
    includeAuth: false
  })


  const onSubmit = () => {
    callSignup(data);
  }


  return (
    <View
      data={data}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      onFinish={onSubmit}
      setData={setData} 
    />
  );

}

SignupCompany.propTypes = {};

export default SignupCompany;