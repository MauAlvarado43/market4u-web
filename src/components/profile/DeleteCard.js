import React from "react";
import { useDelete } from "seed/gql";
import { DELETE_PAYMENT } from "seed/gql/queries";
import View from "components/profile/DeleteCard.view";
import PropTypes from "prop-types";

function DeleteCard({ cardId, onCompleted = () => null, onError = () => null }) {

  const [callDelete] = useDelete(DELETE_PAYMENT, {
    onCompleted: () => {
        onCompleted();
    }
  });

  const onClickDelete = () => callDelete({ id: parseInt(cardId) });

  return <View
    onClose={onCompleted}
    onClickDelete={onClickDelete}
  />;


}

DeleteCard.propTypes = {
  productId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
  refetchQuery: PropTypes.object
};

export default DeleteCard;