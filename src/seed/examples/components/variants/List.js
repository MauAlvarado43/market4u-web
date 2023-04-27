/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/variants/List.view";

function VariantList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqVariants = usePagination(`
  {
    variantPagination {
      totalPages
      variants {
        price
        stock
        shipment
        createdAt
        options { }
        product { }
        photos { }
      }
    }
  }`, pageNum, pageSize);

  if (reqVariants.loading) return <Loading />;
  if (reqVariants.error) return "Error";
  const { variants = [], totalPages = 0 } = reqVariants.data.variantPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    variants={variants}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

VariantList.propTypes = {};

export default VariantList;