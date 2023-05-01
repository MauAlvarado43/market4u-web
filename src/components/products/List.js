import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/products/List.view";

const ProductList = forwardRef(function ProductList(props, ref){

  const userId = sessionStorage.getItem('id');
  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqProducts = usePagination(`
  {
    productPagination {
      totalPages
      products {
        name
        shortDescription
        description
        createdAt
        user { }
        sale { name }
        category { name }
        variants {
          stock
          price
          shipment
          photos {
            url
          }
          variantoptions {
            title
            value
          }
        }
      }
    }
  }`, pageNum, pageSize, "(user.id=" + userId + ")", { orderBy: "-id" });

  const refetchQuery = () => reqProducts.refetch();
  useImperativeHandle(ref, () => ({ refetchQuery }));

  if (reqProducts.loading) return <Loading />;
  if (reqProducts.error) return "Error";
  const { products = [], totalPages = 0 } = reqProducts.data.productPagination;

  const onClickPage = (pageNum) => setPageNum(pageNum);

  return <View
    reqProducts={reqProducts}
    products={products}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;


}); 

ProductList.propTypes = {};

export default ProductList;