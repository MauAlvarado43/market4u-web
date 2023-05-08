import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/sales/Sales.view";

function Sales() {
    const listRef = useRef(null);
  const refetchQuery = () => listRef.current.refetchQuery();

  return <View listRef={listRef} refetchQuery={refetchQuery}/>;
}

Sales.propTypes = {};

export default Sales;