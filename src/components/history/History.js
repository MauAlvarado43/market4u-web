import React from "react";
import PropTypes from "prop-types";
import HistoryView from "components/history/History.view";
import { useQuery } from "seed/gql";

// const qCart = useQuery(`{ 
//   cart {
//       buyer {}
//       payment {}
//       shippings {}
//   } 
// }`, "buyer.id=" + userId);


// query {
//   user (id: 10000) {
//     address
//     active
//     type
//     company {
//       id
//     }
//     products {
//       id
//     }
//   }
// }



function History() {
  return <HistoryView 
    // cart = {cart}
  />;
}

History.propTypes = {};

export default History;