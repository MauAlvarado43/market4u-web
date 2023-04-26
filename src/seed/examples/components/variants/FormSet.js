/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { VARIANT, SET_VARIANT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/variants/Form.view";

function VariantFormSet({ variantId, onCompleted = () => null, onError = () => null  }) {

  const qVariant = useDetail(VARIANT, variantId);
  const qProducts = useQuery(`{ products { } }`);
  const [callSet, qSet] = useSet(SET_VARIANT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qVariant.loading) return <Loading />;

  const { variant = {} } = qVariant.data;
  const { products = [] } = qProducts.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = variantId;
    callSet(values);
  };

  return <View
    variant={variant}
    products={products}
    error={error}
    onSubmit={onSubmit}
  />;
}

VariantFormSet.propTypes = {
  variantId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default VariantFormSet;