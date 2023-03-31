/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PURCHASE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/purchases/Details.view";

function PurchaseDetails({ purchaseId, onCompleted = () => null, onError = () => null }) {

  const reqPurchase = useDetail(`
  {
    purchase {
      amount
      product
      sale
      createdAt
      cart { }
    }
  }`, purchaseId);
  
  const [callDelete] = useDelete(DELETE_PURCHASE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqPurchase.loading) return <Loading />;
  if (reqPurchase.error) return "Error";
  const { purchase = {} } = reqPurchase.data;

  const onClickDelete = () =>
    callDelete({ id: purchaseId });

  return <View
    purchase={purchase}
    onClickDelete={onClickDelete}
   />;
}

PurchaseDetails.propTypes = {
  purchaseId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PurchaseDetails;