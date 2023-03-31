/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { PURCHASE, SET_PURCHASE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/purchases/Form.view";

function PurchaseFormSet({ purchaseId, onCompleted = () => null, onError = () => null  }) {

  const qPurchase = useDetail(PURCHASE, purchaseId);
  const qCarts = useQuery(`{ carts { } }`);
  const [callSet, qSet] = useSet(SET_PURCHASE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qPurchase.loading) return <Loading />;

  const { purchase = {} } = qPurchase.data;
  const { carts = [] } = qCarts.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = purchaseId;
    callSet(values);
  };

  return <View
    purchase={purchase}
    carts={carts}
    error={error}
    onSubmit={onSubmit}
  />;
}

PurchaseFormSet.propTypes = {
  purchaseId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PurchaseFormSet;