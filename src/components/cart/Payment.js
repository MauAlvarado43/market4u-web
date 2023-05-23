import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/cart/Payment.view";

function Payment({ user, setData, products, setActiveStep }) {

  const formikRef = useRef(null);

  const onSubmit = () => {
    const values = formikRef.current.values;
    setData((prevData) => {
      const newData = {...prevData};
      newData.payment = values;
      return newData;
    })
    setActiveStep(4);
  }

  return <View user={user} formikRef={formikRef} products={products} onSubmit={onSubmit}/>;
}

Payment.propTypes = {};

export default Payment;