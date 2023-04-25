/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/purchases/List.view";

function PurchaseList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqPurchases = usePagination(`
  {
    purchasePagination {
      totalPages
      purchases {
        amount
        product
        sale
        createdAt
        shipping { }
      }
    }
  }`, pageNum, pageSize);

  if (reqPurchases.loading) return <Loading />;
  if (reqPurchases.error) return "Error";
  const { purchases = [], totalPages = 0 } = reqPurchases.data.purchasePagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    purchases={purchases}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

PurchaseList.propTypes = {};

export default PurchaseList;