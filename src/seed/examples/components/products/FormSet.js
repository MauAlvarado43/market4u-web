/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { PRODUCT, SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/products/Form.view";

function ProductFormSet({ productId, onCompleted = () => null, onError = () => null  }) {

  const qProduct = useDetail(PRODUCT, productId);
  const qCompanies = useQuery(`{ companies { } }`);
  const qSales = useQuery(`{ sales { } }`);
  const qCategories = useQuery(`{ categories { } }`);
  const [callSet, qSet] = useSet(SET_PRODUCT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qProduct.loading) return <Loading />;

  const { product = {} } = qProduct.data;
  const { companies = [] } = qCompanies.data;
  const { sales = [] } = qSales.data;
  const { categories = [] } = qCategories.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = productId;
    callSet(values);
  };

  return <View
    product={product}
    companies={companies}
    sales={sales}
    categories={categories}
    error={error}
    onSubmit={onSubmit}
  />;
}

ProductFormSet.propTypes = {
  productId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProductFormSet;