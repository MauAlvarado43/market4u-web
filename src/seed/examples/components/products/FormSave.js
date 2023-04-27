/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/products/Form.view";

function ProductFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qUsers = useQuery(`{ users { } }`);
  const qSales = useQuery(`{ sales { } }`);
  const qCategories = useQuery(`{ categories { } }`);
  const [callSave, qSave] = useSave(SAVE_PRODUCT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { users = [] } = qUsers.data;
  const { sales = [] } = qSales.data;
  const { categories = [] } = qCategories.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    users={users}
    sales={sales}
    categories={categories}
    error={error}
    onSubmit={onSubmit}
  />;
}

ProductFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProductFormSave;