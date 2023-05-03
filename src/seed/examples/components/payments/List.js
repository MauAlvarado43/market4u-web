/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/payments/List.view";

function PaymentList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqPayments = usePagination(`
  {
    paymentPagination {
      totalPages
      payments {
        cardNumber
        expireDate
        type
        address
        bank
        createdAt
        user { }
      }
    }
  }`, pageNum, pageSize);

  if (reqPayments.loading) return <Loading />;
  if (reqPayments.error) return "Error";
  const { payments = [], totalPages = 0 } = reqPayments.data.paymentPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    payments={payments}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

PaymentList.propTypes = {};

export default PaymentList;