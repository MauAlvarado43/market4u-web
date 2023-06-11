import React from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import swal from "sweetalert";
import View from "components/history/Shipping.view";

function Shipping({ shipping }) {

  const purchases = shipping.purchases.map((purchase) => {
    const productRaw = JSON.parse(JSON.parse(purchase.product))
    const sale = JSON.parse(purchase.sale);
    return {
      id: purchase.id,
      amount: purchase.amount,
      product: productRaw?.product??{},
      variant: productRaw?.variant??{},
      category: productRaw?.category??{},
      sale: sale || null
    }
  });

  console.log("purchases", purchases)

  return <View shipping={shipping} purchases={purchases}/>;
}

Shipping.propTypes = {};

export default Shipping;