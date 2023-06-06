import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/superadmin/products/ListSA.view";

const ProductList = forwardRef(function ProductList(props, ref){

  const pageSize = 9;
  const [pageNum, setPageNum] = useState(1);
  const reqProducts = usePagination(`
    {
      productPagination {
        totalPages
        products {
          name
          company { name }
          shortDescription
          description
          createdAt
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
    }`, 
    pageNum, 
    pageSize);

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