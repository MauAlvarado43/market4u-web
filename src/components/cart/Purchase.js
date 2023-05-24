import React from "react";
import PropTypes from "prop-types";
import View from "components/cart/Purchase.view";

function Purchase({ user, data, setData, products, setActiveStep }) {

  console.log(data);

  return <View products={products} data={data} setActiveStep={setActiveStep}/>;
}

Purchase.propTypes = {};

export default Purchase;