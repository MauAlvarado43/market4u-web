import React from "react";
import PropTypes from "prop-types";
import View from "components/cart/Cart.view";
import { useQuery } from "seed/gql";

function Cart() {

  
  const userId = sessionStorage.getItem("id");

  const qInfo = useQuery(`
  {
    users {
      id
      firstName
      lastName
      username
      email
      payments {
        cardNumber
      }
      address
      buyerCarts {
        id
        createdAt
        payment {
          id
          cardNumber
          type
        }
        shippings {
          createdAt
          info
          folio
          address
          status
          purchases {
            id
            createdAt
            amount
            sale
            product
          }
        }
      }
    }
  }
  `, `id=${userId} AND buyerCarts.shippings.status=CREATED`);
  let info = qInfo.data
  let cart

  
  if (info.users) {
    cart = info
    // console.log((cart.users[0].address))
  } else {
    return "Loading..."
  }
  
  return <View 
    cart = {cart}/>;
}

Cart.propTypes = {};

export default Cart;