import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/history/Opinion.view";

function Opinion({ match }) {
  
  const { shippingId } = match.params;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const reqShipping = useDetail(`{
    shipping {
      info
      folio
      total
      address
      status
      createdAt
      cart {
        payment
      }
      company {
        id
        name
        commonName
      }
      purchases {
        amount
        product
        sale
      }
    }
  }`, shippingId);

  if (reqShipping.loading) return <Loading />;
  if (reqShipping.error) return "Error";

  const { shipping = {} } = reqShipping.data;

  
  return <View shipping={shipping} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />;
}

Opinion.propTypes = {};

export default Opinion;