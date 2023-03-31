/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_MESSAGE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/messages/Details.view";

function MessageDetails({ messageId, onCompleted = () => null, onError = () => null }) {

  const reqMessage = useDetail(`
  {
    message {
      content
      createdAt
      sender { }
      target { }
    }
  }`, messageId);
  
  const [callDelete] = useDelete(DELETE_MESSAGE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqMessage.loading) return <Loading />;
  if (reqMessage.error) return "Error";
  const { message = {} } = reqMessage.data;

  const onClickDelete = () =>
    callDelete({ id: messageId });

  return <View
    message={message}
    onClickDelete={onClickDelete}
   />;
}

MessageDetails.propTypes = {
  messageId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default MessageDetails;