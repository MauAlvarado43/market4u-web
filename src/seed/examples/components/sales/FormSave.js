/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_SALE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/sales/Form.view";

function SaleFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qProducts = useQuery(`{ products { } }`);
  const qUsers = useQuery(`{ users { } }`);
  const [callSave, qSave] = useSave(SAVE_SALE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { products = [] } = qProducts.data;
  const { users = [] } = qUsers.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    products={products}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

SaleFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default SaleFormSave;