import React from "react";
import PropTypes from "prop-types";
import View from "components/history/Shipping.view";

function Shipping({ shipping }) {

  console.log("shipping", shipping)

  const purchases = shipping.purchases.map((purchase) => {
    const productRaw = JSON.parse(JSON.parse(purchase.product))
    return {
      id: purchase.id,
      amount: purchase.amount,
      product: productRaw?.product??{},
      variant: productRaw?.variant??{},
      category: productRaw?.category??{},
      sale: {}
    }
  });

  console.log("purchases", purchases)

  return <View shipping={shipping} purchases={purchases}/>;
}

Shipping.propTypes = {};

export default Shipping;