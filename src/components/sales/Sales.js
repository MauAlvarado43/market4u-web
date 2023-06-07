import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/sales/Sales.view";

function Sales() {

  const type = sessionStorage.getItem("type");
  if (type != "ADMIN" && type != "SELLER") window.location.replace("/profile/info");

  const listRef = useRef(null);
  const refetchQuery = () => {
    listRef.current.refetchQuery();
  };

  return <View
    listRef={listRef}
    refetchQuery={refetchQuery}
  />;
}

Sales.propTypes = {};

export default Sales;