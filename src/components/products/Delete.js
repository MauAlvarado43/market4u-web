import React from "react";
import { useDelete } from "seed/gql";
import { DELETE_PRODUCT } from "seed/gql/queries";
import View from "components/products/Delete.view";

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

Delete.propTypes = {};

export default Delete;