/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/sales/List.view";

function SaleList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqSales = usePagination(`
  {
    salePagination {
      totalPages
      sales {
        name
        disscount
        startDate
        endDate
        createdAt
        product { }
        company { }
        banner { }
      }
    }
  }`, pageNum, pageSize);

  if (reqSales.loading) return <Loading />;
  if (reqSales.error) return "Error";
  const { sales = [], totalPages = 0 } = reqSales.data.salePagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    sales={sales}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

SaleList.propTypes = {};

export default SaleList;