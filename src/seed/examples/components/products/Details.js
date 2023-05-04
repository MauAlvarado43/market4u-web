/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/products/Details.view";

function ProductDetails({ productId, onCompleted = () => null, onError = () => null }) {

  const reqProduct = useDetail(`
  {
    product {
      name
      shortDescription
      description
      createdAt
      user { }
      opinions { }
      sales { }
      category { }
      variants { }
    }
  }`, productId);
  
  const [callDelete] = useDelete(DELETE_PRODUCT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqProduct.loading) return <Loading />;
  if (reqProduct.error) return "Error";
  const { product = {} } = reqProduct.data;

  const onClickDelete = () =>
    callDelete({ id: productId });

  return <View
    product={product}
    onClickDelete={onClickDelete}
   />;
}

ProductDetails.propTypes = {
  productId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProductDetails;