/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/variantoptions/List.view";

function VariantoptionList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqVariantoptions = usePagination(`
  {
    variantoptionPagination {
      totalPages
      variantoptions {
        title
        value
        createdAt
        variant { }
      }
    }
  }`, pageNum, pageSize);

  if (reqVariantoptions.loading) return <Loading />;
  if (reqVariantoptions.error) return "Error";
  const { variantoptions = [], totalPages = 0 } = reqVariantoptions.data.variantoptionPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    variantoptions={variantoptions}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

VariantoptionList.propTypes = {};

export default VariantoptionList;