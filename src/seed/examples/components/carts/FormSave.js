/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_CART } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/carts/Form.view";

function CartFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qUsers = useQuery(`{ users { } }`);
  const qPayments = useQuery(`{ payments { } }`);
  const [callSave, qSave] = useSave(SAVE_CART, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { users = [] } = qUsers.data;
  const { payments = [] } = qPayments.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    users={users}
    payments={payments}
    error={error}
    onSubmit={onSubmit}
  />;
}

CartFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CartFormSave;