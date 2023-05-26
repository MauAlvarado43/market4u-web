/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { CART, SET_CART } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/carts/Form.view";

function CartFormSet({ cartId, onCompleted = () => null, onError = () => null  }) {

  const qCart = useDetail(CART, cartId);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_CART, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qCart.loading) return <Loading />;

  const { cart = {} } = qCart.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = cartId;
    callSet(values);
  };

  return <View
    cart={cart}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

CartFormSet.propTypes = {
  cartId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CartFormSet;