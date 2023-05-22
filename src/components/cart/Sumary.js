import React from "react";
import PropTypes from "prop-types";
import View from "components/cart/Sumary.view";

function Sumary({ products, onSubmit }) {

  return <View products={products} onSubmit={onSubmit}/>;
}

Sumary.propTypes = {};

export default Sumary;