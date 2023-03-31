/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { PAYMENT, SET_PAYMENT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/payments/Form.view";

function PaymentFormSet({ paymentId, onCompleted = () => null, onError = () => null  }) {

  const qPayment = useDetail(PAYMENT, paymentId);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_PAYMENT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qPayment.loading) return <Loading />;

  const { payment = {} } = qPayment.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = paymentId;
    callSet(values);
  };

  return <View
    payment={payment}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

PaymentFormSet.propTypes = {
  paymentId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PaymentFormSet;