import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDetail } from "seed/gql";
import { object, string } from "yup";
import View from "components/cart/Delivery.view";

function Delivery({ user, setData, products, setActiveStep, setPaymentStep }) {

  const formikRef = useRef(null);

  const deliverySchema = object({
    telephone: string().test({
      name: "telephone",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un teléfono" });

        if (value.length !== 10)
          return context.createError({ message: "El teléfono debe tener 10 caracteres" });

        return true;

      }
    }),
    email: string().test({
      name: "email",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un correo" });

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          return context.createError({ message: "Ingrese un correo electrónico válido" });

        return true;

      }
    }),
    street: string().test({
      name: "street",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese una calle" });

        return true;

      }
    }),
    cologn: string().test({
      name: "cologn",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese una colonia" });

        return true;

      }
    }),
    cp: string().test({
      name: "cp",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un código postal" });
        
        if (value.length !== 5)
          return context.createError({ message: "El código postal debe tener 5 dígitos" });

        return true;

      }
    }),
    city: string().test({
      name: "city",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese una entidad/ciudad" });

        return true;

      }
    }),
    state: string().test({
      name: "state",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Seleccione un estado" });

        return true;

      }
    }),
    references: string().test({
      name: "references",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese referencias" });

        return true;

      }
    })
  })

  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit()
    }
  }

  const onSubmit = (values) => {

    setData((prevData) => {
      const newData = { ...prevData };
      newData.delivery = values;
      return newData;
    })
    setPaymentStep(true);
    setActiveStep(3);

  }

  return <View formikRef={formikRef} user={user} products={products} onSubmit={onSubmit} deliverySchema={deliverySchema} handleSubmit={handleSubmit}/>;

}

Delivery.propTypes = {};

export default Delivery;