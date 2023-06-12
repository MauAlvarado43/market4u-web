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
          return context.createError({ message: "Ingrese el nombre del titular de la tarjeta" });

        if (value.length < 3)
          return context.createError({ message: "El nombre del titular debe tener al menos 3 caracteres" });

        if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i.test(value))
          return context.createError({ message: "El nombre del titular solo debe contener letras" });

        return true;

      }
    }),
    cardNumber: string().test({
      name: "cardNumber",
      test(value, context) {

        const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese el número de la tarjeta" });

        if (value.length !== 16)
          return context.createError({ message: "El número de tarjeta debe tener 16 dígitos" });

        if (!visaRegEx.test(value) && !mastercardRegEx.test(value))
          return context.createError({ message: "El número de tarjeta es inválido" });

        return true;

      }
    }),
    expireDate: string().test({
      name: "expireDate",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese el vencimiento" });

        if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value))
          return context.createError({ message: "El formato de vencimiento debe ser MM/AA" });

        return true;

      }
    }),
    cvv: string().test({
      name: "cvv",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese el CVV" });

        if (!/\d{3}$/.test(value))
          return context.createError({ message: "El CVV debe tener 3 números" });

        return true;

      }
    }),
    bank: string().test({
      name: "bank",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Seleccione un banco" });

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