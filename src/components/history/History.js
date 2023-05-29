import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/history/History.view";

function History() {

  const userId = sessionStorage.getItem('id');
  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);

  const reqShippings = usePagination(`{
    shippingPagination {
      totalPages
      shippings {
        info
        folio
        address
        status
        createdAt
        company {
          id
          name
          commonName
        }
        purchases {
          amount
          product
          sale
        }
      }
    }
  }`, pageNum, pageSize, `buyer.id=${userId}`);

  if (reqShippings.loading) return <Loading />;
  if (reqShippings.error) return "Error";

  const { totalPages = 0, shippings = [] } = reqShippings.data.shippingPagination;
  const onClickPage = (pageNum) => setPageNum(pageNum);

  console.log("shippings", shippings)


  return <View shippings={shippings} pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} />;
}

History.propTypes = {};

export default History;