/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_USER } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/users/Form.view";

function UserFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qCompanies = useQuery(`{ companies { } }`);
  const qProducts = useQuery(`{ products { } }`);
  const [callSave, qSave] = useSave(SAVE_USER, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { companies = [] } = qCompanies.data;
  const { products = [] } = qProducts.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    companies={companies}
    products={products}
    error={error}
    onSubmit={onSubmit}
  />;
}

UserFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default UserFormSave;