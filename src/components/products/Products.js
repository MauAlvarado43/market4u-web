import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/products/Products.view";

function Products() {
  
  const listRef = useRef(null);
  const refetchQuery = () => listRef.current.refetchQuery();

  return <View listRef={listRef} refetchQuery={refetchQuery}/>;
}

Products.propTypes = {};

export default Products;