import React from "react";
import { useDelete } from "seed/gql";
import { DELETE_PRODUCT } from "seed/gql/queries";
import View from "components/superadmin/products/DeleteSA.view";
import PropTypes from "prop-types";

function Delete({ productId, onCompleted = () => null, onError = () => null, refetchQuery }) {

  const [callDelete] = useDelete(DELETE_PRODUCT, {
    onCompleted: () => {
        refetchQuery();
        onCompleted();
    }
  });

  const onClickDelete = () => callDelete({ id: parseInt(productId) });

  return <View
    onClose={onCompleted}
    onClickDelete={onClickDelete}
  />;


}

Delete.propTypes = {
  productId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
  refetchQuery: PropTypes.object
};

export default Delete;