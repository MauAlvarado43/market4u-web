/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_COMPANY } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/companies/Details.view";

function CompanyDetails({ companyId, onCompleted = () => null, onError = () => null }) {

  const reqCompany = useDetail(`
  {
    company {
      name
      commonName
      rfc
      cp
      phone
      email
      active
      municipality
      state
      cologn
      website
      street
      city
      createdAt
      photo { }
      users { }
    }
  }`, companyId);
  
  const [callDelete] = useDelete(DELETE_COMPANY, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqCompany.loading) return <Loading />;
  if (reqCompany.error) return "Error";
  const { company = {} } = reqCompany.data;

  const onClickDelete = () =>
    callDelete({ id: companyId });

  return <View
    company={company}
    onClickDelete={onClickDelete}
   />;
}

CompanyDetails.propTypes = {
  companyId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CompanyDetails;