import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/auth/company/SignupCompany.view";

function SignupCompany() {

  const [activeStep, setActiveStep] = useState(1);

  

  return <View activeStep={activeStep} />;
}

SignupCompany.propTypes = {};

export default SignupCompany;