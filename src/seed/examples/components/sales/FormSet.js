/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SALE, SET_SALE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/sales/Form.view";

function SaleFormSet({ saleId, onCompleted = () => null, onError = () => null  }) {

  const qSale = useDetail(SALE, saleId);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_SALE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qSale.loading) return <Loading />;

  const { sale = {} } = qSale.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    callSet(values);
  };

  return <View
    sale={sale}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

SaleFormSet.propTypes = {
  saleId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default SaleFormSet;