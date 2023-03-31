/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { MESSAGE, SET_MESSAGE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/messages/Form.view";

function MessageFormSet({ messageId, onCompleted = () => null, onError = () => null  }) {

  const qMessage = useDetail(MESSAGE, messageId);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_MESSAGE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qMessage.loading) return <Loading />;

  const { message = {} } = qMessage.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = messageId;
    callSet(values);
  };

  return <View
    message={message}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

MessageFormSet.propTypes = {
  messageId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default MessageFormSet;