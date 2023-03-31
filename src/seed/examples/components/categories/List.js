/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/categories/List.view";

function CategoryList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqCategories = usePagination(`
  {
    categoryPagination {
      totalPages
      categories {
        name
        createdAt
        products { }
      }
    }
  }`, pageNum, pageSize);

  if (reqCategories.loading) return <Loading />;
  if (reqCategories.error) return "Error";
  const { categories = [], totalPages = 0 } = reqCategories.data.categoryPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    categories={categories}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

CategoryList.propTypes = {};

export default CategoryList;