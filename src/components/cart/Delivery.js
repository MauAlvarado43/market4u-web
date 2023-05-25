import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDetail } from "seed/gql";
import View from "components/cart/Delivery.view";

function Delivery({ user, setData, products, setActiveStep }) {

  const formikRef = useRef(null);

  const onSubmit = () => {
    const values = formikRef.current.values;
    console.log("values: ", values)
    setData((prevData) => {
      const newData = {...prevData};
      newData.delivery = values;
      return newData;
    })
    setActiveStep(3);
  }

  console.log("user", user);

  return <View formikRef={formikRef} user={user} products={products} onSubmit={onSubmit} />;

}

Delivery.propTypes = {};

export default Delivery;