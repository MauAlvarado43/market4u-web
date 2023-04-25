/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_PURCHASE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/purchases/Form.view";

function PurchaseFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qShippings = useQuery(`{ shippings { } }`);
  const [callSave, qSave] = useSave(SAVE_PURCHASE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { shippings = [] } = qShippings.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    shippings={shippings}
    error={error}
    onSubmit={onSubmit}
  />;
}

PurchaseFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PurchaseFormSave;