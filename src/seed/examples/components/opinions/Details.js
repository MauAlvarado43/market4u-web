/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_OPINION } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/opinions/Details.view";

function OpinionDetails({ opinionId, onCompleted = () => null, onError = () => null }) {

  const reqOpinion = useDetail(`
  {
    opinion {
      title
      description
      rate
      createdAt
      product { }
      user { }
    }
  }`, opinionId);
  
  const [callDelete] = useDelete(DELETE_OPINION, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqOpinion.loading) return <Loading />;
  if (reqOpinion.error) return "Error";
  const { opinion = {} } = reqOpinion.data;

  const onClickDelete = () =>
    callDelete({ id: opinionId });

  return <View
    opinion={opinion}
    onClickDelete={onClickDelete}
   />;
}

OpinionDetails.propTypes = {
  opinionId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default OpinionDetails;