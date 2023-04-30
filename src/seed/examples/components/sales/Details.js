/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_SALE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/sales/Details.view";

function SaleDetails({ saleId, onCompleted = () => null, onError = () => null }) {

  const reqSale = useDetail(`
  {
    sale {
      name
      disscount
      startDate
      endDate
      createdAt
      product { }
      user { }
      banner { }
    }
  }`, saleId);
  
  const [callDelete] = useDelete(DELETE_SALE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqSale.loading) return <Loading />;
  if (reqSale.error) return "Error";
  const { sale = {} } = reqSale.data;

  const onClickDelete = () =>
    callDelete({ id: saleId });

  return <View
    sale={sale}
    onClickDelete={onClickDelete}
   />;
}

SaleDetails.propTypes = {
  saleId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default SaleDetails;