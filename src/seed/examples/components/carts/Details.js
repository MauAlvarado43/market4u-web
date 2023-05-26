/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_CART } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/carts/Details.view";

function CartDetails({ cartId, onCompleted = () => null, onError = () => null }) {

  const reqCart = useDetail(`
  {
    cart {
      payment
      createdAt
      buyer { }
      shippings { }
    }
  }`, cartId);
  
  const [callDelete] = useDelete(DELETE_CART, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqCart.loading) return <Loading />;
  if (reqCart.error) return "Error";
  const { cart = {} } = reqCart.data;

  const onClickDelete = () =>
    callDelete({ id: cartId });

  return <View
    cart={cart}
    onClickDelete={onClickDelete}
   />;
}

CartDetails.propTypes = {
  cartId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CartDetails;