import React, { useRef } from "react";
import PropTypes from "prop-types";

///
import View from "components/superadmin/products/productsSA.view";
///

function Products() {
  
  const listRef = useRef(null);
  const refetchQuery = () => listRef.current.refetchQuery();

  return <View listRef={listRef} refetchQuery={refetchQuery}/>;
}

Products.propTypes = {};

export default Products;