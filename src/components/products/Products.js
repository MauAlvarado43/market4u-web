import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/products/Products.view";

function Products() {
  
  const type = sessionStorage.getItem("type");
  if (type != "ADMIN" && type != "SELLER") window.location.replace("/profile/info");

  const listRef = useRef(null);
  const refetchQuery = () => listRef.current.refetchQuery();

  return <View listRef={listRef} refetchQuery={refetchQuery}/>;
}

Products.propTypes = {};

export default Products;