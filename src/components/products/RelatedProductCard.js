import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/products/RelatedProductCard.view";

function RelatedProductCard({ product }) {
  return <View 
    product={product}
  />;
}

RelatedProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

export default RelatedProductCard;