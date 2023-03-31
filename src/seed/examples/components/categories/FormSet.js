/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { CATEGORY, SET_CATEGORY } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/categories/Form.view";

function CategoryFormSet({ categoryId, onCompleted = () => null, onError = () => null  }) {

  const qCategory = useDetail(CATEGORY, categoryId);
  const [callSet, qSet] = useSet(SET_CATEGORY, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qCategory.loading) return <Loading />;

  const { category = {} } = qCategory.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = categoryId;
    callSet(values);
  };

  return <View
    category={category}
    error={error}
    onSubmit={onSubmit}
  />;
}

CategoryFormSet.propTypes = {
  categoryId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CategoryFormSet;