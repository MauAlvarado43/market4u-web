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

  const onSelectCard = (id) => {
    const payments = user.payments;
    const card = payments.find((item) => item.id == id);
    if (!card) return;
    formikRef.current.setValues(card);
    console.log(card);
  }

  return <View user={user} formikRef={formikRef} products={products} onSubmit={onSubmit} onSelectCard={onSelectCard}/>;
}

Payment.propTypes = {};

export default Payment;