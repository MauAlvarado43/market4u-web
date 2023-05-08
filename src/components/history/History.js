import React from "react";
import PropTypes from "prop-types";
import { Loading } from "seed/helpers";
import { useDetail } from "seed/gql";
import HistoryView from "components/history/History.view";

function History() {

  const userId = sessionStorage.getItem("id");

  const reqUser = useDetail(`{
    user {
      firstName
      lastName
      username
      email
      payments {
        cardNumber
      }
      address
      buyerCarts {
        createdAt
        payment {
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
            createdAt
            amount
            sale
            product
          }
        }
      }
    }
  }`, userId);

  if (reqUser.loading) return <Loading />;
  if (reqUser.error) return "Error: ";

  const { user = null } = reqUser.data;
  let carts = [];

  if (user) {

  }

  if (info.users) {
    carts = info;
    console.log(carts.users[0].address);
  }

  let totals = [];
  let total_purchase = 0;
  if (carts) {
    carts.users[0].buyerCarts[0].shippings.forEach((shipment) => {
      shipment.purchases.forEach((purchase) => {
        total_purchase += JSON.parse(purchase.product).price * purchase.amount;
      });
      totals.push(total_purchase);
      total_purchase = 0;
    });
  }

  return <HistoryView />;
}

History.propTypes = {};

export default History;