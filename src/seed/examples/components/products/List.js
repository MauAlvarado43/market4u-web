/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/products/List.view";

function ProductList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqProducts = usePagination(`
  {
    productPagination {
      totalPages
      products {
        name
        shortDescription
        sku
        description
        createdAt
        company { }
        opinions { }
        sale { }
        category { }
        variants { }
      }
    }
  }`, pageNum, pageSize);

  if (reqProducts.loading) return <Loading />;
  if (reqProducts.error) return "Error";
  const { products = [], totalPages = 0 } = reqProducts.data.productPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    products={products}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

ProductList.propTypes = {};

export default ProductList;