import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/sales/Sales.view";

function Sales() {

  const type = sessionStorage.getItem("type");
  if (type != "ADMIN" && type != "SELLER") window.location.replace("/profile/info");

  const listRef = useRef(null);

  return <View listRef={listRef} />;
}

Sales.propTypes = {};

export default Sales;