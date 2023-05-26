import React from 'react'
import View from "components/cart/StepsBar.view";

const Steps = ({ cartStep, deliveryStep, paymentStep, purchaseStep, activeStep, setActiveStep }) => {

  return (
    <View
      cartStep={cartStep}
      deliveryStep={deliveryStep}
      paymentStep={paymentStep}
      purchaseStep={purchaseStep}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />
  );
}

export default Steps