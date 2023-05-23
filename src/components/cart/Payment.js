import React from "react";
import PropTypes from "prop-types";
import View from "components/cart/Payment.view";

function Payment({ user, setData, products, setActiveStep }) {

  const onSubmit = (values) => {
    setData((prevData) => {
      const newData = {...prevData};
      newData.payment = newData;
      return newData;
    })
    setActiveStep(4);
  }

  return <View user={user} products={products} onSubmit={onSubmit}/>;
}

Payment.propTypes = {};

export default Payment;