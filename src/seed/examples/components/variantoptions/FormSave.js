/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_VARIANTOPTION } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/variantoptions/Form.view";

function VariantoptionFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qVariants = useQuery(`{ variants { } }`);
  const [callSave, qSave] = useSave(SAVE_VARIANTOPTION, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { variants = [] } = qVariants.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    variants={variants}
    error={error}
    onSubmit={onSubmit}
  />;
}

VariantoptionFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default VariantoptionFormSave;