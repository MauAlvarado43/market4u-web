/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_VARIANT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/variants/Form.view";

function VariantFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qProducts = useQuery(`{ products { } }`);
  const [callSave, qSave] = useSave(SAVE_VARIANT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { products = [] } = qProducts.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    products={products}
    error={error}
    onSubmit={onSubmit}
  />;
}

VariantFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default VariantFormSave;