/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { OPINION, SET_OPINION } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/opinions/Form.view";

function OpinionFormSet({ opinionId, onCompleted = () => null, onError = () => null  }) {

  const qOpinion = useDetail(OPINION, opinionId);
  const qProducts = useQuery(`{ products { } }`);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_OPINION, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qOpinion.loading) return <Loading />;

  const { opinion = {} } = qOpinion.data;
  const { products = [] } = qProducts.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = opinionId;
    callSet(values);
  };

  return <View
    opinion={opinion}
    products={products}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

OpinionFormSet.propTypes = {
  opinionId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default OpinionFormSet;