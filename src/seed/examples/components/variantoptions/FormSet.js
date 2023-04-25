/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { VARIANTOPTION, SET_VARIANTOPTION } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/variantoptions/Form.view";

function VariantoptionFormSet({ variantoptionId, onCompleted = () => null, onError = () => null  }) {

  const qVariantoption = useDetail(VARIANTOPTION, variantoptionId);
  const qVariants = useQuery(`{ variants { } }`);
  const [callSet, qSet] = useSet(SET_VARIANTOPTION, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qVariantoption.loading) return <Loading />;

  const { variantoption = {} } = qVariantoption.data;
  const { variants = [] } = qVariants.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = variantoptionId;
    callSet(values);
  };

  return <View
    variantoption={variantoption}
    variants={variants}
    error={error}
    onSubmit={onSubmit}
  />;
}

VariantoptionFormSet.propTypes = {
  variantoptionId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default VariantoptionFormSet;