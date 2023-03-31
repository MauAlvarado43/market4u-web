/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_CATEGORY } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/categories/Details.view";

function CategoryDetails({ categoryId, onCompleted = () => null, onError = () => null }) {

  const reqCategory = useDetail(`
  {
    category {
      name
      createdAt
      products { }
    }
  }`, categoryId);
  
  const [callDelete] = useDelete(DELETE_CATEGORY, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqCategory.loading) return <Loading />;
  if (reqCategory.error) return "Error";
  const { category = {} } = reqCategory.data;

  const onClickDelete = () =>
    callDelete({ id: categoryId });

  return <View
    category={category}
    onClickDelete={onClickDelete}
   />;
}

CategoryDetails.propTypes = {
  categoryId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CategoryDetails;