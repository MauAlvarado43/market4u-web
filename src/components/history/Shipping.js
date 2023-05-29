import React from "react";
import PropTypes from "prop-types";
import View from "components/history/Shipping.view";

function Shipping({ shipping }) {
  return <View shipping={shipping} />;
}

Shipping.propTypes = {};

export default Shipping;