import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/main/ProductCard.view";

function ProductCard({ product }) {
  return <View product={product} />;
}

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;