import React from 'react'
import View from "components/cart/StepsBar.view";
import './CartStyle.css'

const Steps = ({ activeStep, setActiveStep }) => {

  return <View activeStep={activeStep} setActiveStep={setActiveStep}/>
}

export default Steps