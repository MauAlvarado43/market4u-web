import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/sales/Sales.view";

function Sales() {
    const listRef = useRef(null);

  return <View listRef={listRef} />;
}

Sales.propTypes = {};

export default Sales;