/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { COMPANY, SET_COMPANY } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/companies/Form.view";

function CompanyFormSet({ companyId, onCompleted = () => null, onError = () => null  }) {

  const qCompany = useDetail(COMPANY, companyId);
  const [callSet, qSet] = useSet(SET_COMPANY, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qCompany.loading) return <Loading />;

  const { company = {} } = qCompany.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = companyId;
    callSet(values);
  };

  return <View
    company={company}
    error={error}
    onSubmit={onSubmit}
  />;
}

CompanyFormSet.propTypes = {
  companyId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CompanyFormSet;