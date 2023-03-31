/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/carts/List.view";

function CartList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqCarts = usePagination(`
  {
    cartPagination {
      totalPages
      carts {
        destiny
        createdAt
        purchases { }
        user { }
        payment { }
      }
    }
  }`, pageNum, pageSize);

  if (reqCarts.loading) return <Loading />;
  if (reqCarts.error) return "Error";
  const { carts = [], totalPages = 0 } = reqCarts.data.cartPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    carts={carts}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

CartList.propTypes = {};

export default CartList;