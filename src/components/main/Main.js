import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery, usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/main/Main.view";

function Main() {

  const pageSize = 20;
  const [pageNum, setPageNum] = useState(1);

  const reqProducts = usePagination(`{
    productPagination {
      totalPages
      products {
        id
        name
        shortDescription
        variants {
          price
          photos {
            id
            url
          }
        }
      }
    }
  }`, pageNum, pageSize);

  if (reqProducts.loading) return <Loading />;
  if (reqProducts.error) return "Error";

  const { products = [], totalPages = 0 } = reqProducts.data.productPagination;
  const onClickPage = (pageNum) => setPageNum(pageNum);

  return <View products={products} onClickPage={onClickPage} pageNum={pageNum} totalPages={totalPages}/>;
}

Main.propTypes = {};

export default Main;