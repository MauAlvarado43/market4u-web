import React from "react";
import PropTypes from "prop-types";
import View from "components/main/Main.view";

function Main() {

  const type = sessionStorage.getItem("type");
  if (type != "NORMAL") window.location.replace("/home");

  return <View/>;
}

Main.propTypes = {
  products: PropTypes.array,
  onClickPage: PropTypes.func,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
};

export default Main;