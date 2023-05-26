import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { object, string } from "yup";
import View from "components/cart/Payment.view";

function Payment({ user, setData, products, setActiveStep, setPurchaseStep }) {

  const formikRef = useRef(null);
  const [savePayment, setSavePayment] = useState(false);

  const paymentSchema = object({
    name: string().test({
      name: "name",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese el nombre de la persona" });

        return true;

      }
    }),
    cardNumber: string().test({
      name: "cardNumber",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese el número de la tarjeta" });

        return true;

      }
    }),
    expireDate: string().test({
      name: "expireDate",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese la fecha de expiración" });

        return true;

      }
    }),
    cvv: string().test({
      name: "cvv",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese el cvv" });

        return true;

      }
    }),
    bank: string().test({
      name: "bank",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Seleccione un bando" });

        return true;

      }
    }),
    type: string().test({
      name: "type",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Seleccione un tipo" });

        return true;

      }
    }),
    address: string().test({
      name: "address",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese una dirección" });

        return true;

      }
    }),
  });

  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit()
    }
  }

  const onSubmit = (values) => {
    setData((prevData) => {
      const newData = { ...prevData };
      newData.payment = { ...values, save: savePayment };
      return newData;
    })
    setPurchaseStep(true);
    setActiveStep(4);
  }

  const onSelectCard = (id) => {
    const payments = user.payments;
    const card = payments.find((item) => item.id == id);
    if (!card) return;
    formikRef.current.setValues(card);
  }

  return (
    <View
      user={user}
      savePayment={savePayment}
      setSavePayment={setSavePayment}
      formikRef={formikRef}
      products={products}
      onSubmit={onSubmit}
      onSelectCard={onSelectCard}
      handleSubmit={handleSubmit}
      paymentSchema={paymentSchema}
    />
  );
}

Payment.propTypes = {};

export default Payment;