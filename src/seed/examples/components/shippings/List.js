/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/shippings/List.view";

function ShippingList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqShippings = usePagination(`
  {
    shippingPagination {
      totalPages
      shippings {
        info
        folio
        address
        status
        createdAt
        cart { }
        buyer { }
        company { }
      }
    }
  }`, pageNum, pageSize);

  if (reqShippings.loading) return <Loading />;
  if (reqShippings.error) return "Error";
  const { shippings = [], totalPages = 0 } = reqShippings.data.shippingPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    shippings={shippings}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

ShippingList.propTypes = {};

export default ShippingList;