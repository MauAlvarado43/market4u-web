/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_VARIANTOPTION } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/variantoptions/Details.view";

function VariantoptionDetails({ variantoptionId, onCompleted = () => null, onError = () => null }) {

  const reqVariantoption = useDetail(`
  {
    variantoption {
      title
      value
      createdAt
      variant { }
    }
  }`, variantoptionId);
  
  const [callDelete] = useDelete(DELETE_VARIANTOPTION, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqVariantoption.loading) return <Loading />;
  if (reqVariantoption.error) return "Error";
  const { variantoption = {} } = reqVariantoption.data;

  const onClickDelete = () =>
    callDelete({ id: variantoptionId });

  return <View
    variantoption={variantoption}
    onClickDelete={onClickDelete}
   />;
}

VariantoptionDetails.propTypes = {
  variantoptionId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default VariantoptionDetails;