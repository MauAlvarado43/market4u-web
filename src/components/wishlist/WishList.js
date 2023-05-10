import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/wishlist/WishList.view";

function WishList() {
    const listRef = useRef(null);
  const refetchQuery = () => listRef.current.refetchQuery();

  return <View listRef={listRef} refetchQuery={refetchQuery}/>;
}

WishList.propTypes = {};

export default WishList;