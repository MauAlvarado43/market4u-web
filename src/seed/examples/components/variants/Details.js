/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_VARIANT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/variants/Details.view";

function VariantDetails({ variantId, onCompleted = () => null, onError = () => null }) {

  const reqVariant = useDetail(`
  {
    variant {
      price
      stock
      shipment
      createdAt
      options { }
      product { }
      photos { }
    }
  }`, variantId);
  
  const [callDelete] = useDelete(DELETE_VARIANT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqVariant.loading) return <Loading />;
  if (reqVariant.error) return "Error";
  const { variant = {} } = reqVariant.data;

  const onClickDelete = () =>
    callDelete({ id: variantId });

  return <View
    variant={variant}
    onClickDelete={onClickDelete}
   />;
}

VariantDetails.propTypes = {
  variantId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default VariantDetails;