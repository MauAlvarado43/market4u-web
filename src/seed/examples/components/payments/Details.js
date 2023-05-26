/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PAYMENT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/payments/Details.view";

function PaymentDetails({ paymentId, onCompleted = () => null, onError = () => null }) {

  const reqPayment = useDetail(`
  {
    payment {
      cardNumber
      expireDate
      type
      address
      bank
      name
      createdAt
      user { }
    }
  }`, paymentId);
  
  const [callDelete] = useDelete(DELETE_PAYMENT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqPayment.loading) return <Loading />;
  if (reqPayment.error) return "Error";
  const { payment = {} } = reqPayment.data;

  const onClickDelete = () =>
    callDelete({ id: paymentId });

  return <View
    payment={payment}
    onClickDelete={onClickDelete}
   />;
}

PaymentDetails.propTypes = {
  paymentId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PaymentDetails;