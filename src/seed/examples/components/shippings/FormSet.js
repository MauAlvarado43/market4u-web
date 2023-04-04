/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SHIPPING, SET_SHIPPING } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/shippings/Form.view";

function ShippingFormSet({ shippingId, onCompleted = () => null, onError = () => null  }) {

  const qShipping = useDetail(SHIPPING, shippingId);
  const qUsers = useQuery(`{ users { } }`);
  const qCarts = useQuery(`{ carts { } }`);
  const [callSet, qSet] = useSet(SET_SHIPPING, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qShipping.loading) return <Loading />;

  const { shipping = {} } = qShipping.data;
  const { users = [] } = qUsers.data;
  const { carts = [] } = qCarts.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = shippingId;
    callSet(values);
  };

  return <View
    shipping={shipping}
    users={users}
    carts={carts}
    error={error}
    onSubmit={onSubmit}
  />;
}

ShippingFormSet.propTypes = {
  shippingId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ShippingFormSet;