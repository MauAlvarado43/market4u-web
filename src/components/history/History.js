import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePagination } from "seed/gql"
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/history/History.view";

function History() {

  const pageSize = 15;
  const userId = sessionStorage.getItem('id');
  const [pageNum, setPageNum] = useState(1);

  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");

  const reqShippings = usePagination(`{
    shippingPagination {
      totalPages
      shippings {
        info
        folio
        total
        address
        status
        createdAt
        cart {
          payment
        }
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


  const handlePriceFilter = (filter) => {
    setSelectedPriceFilter(filter);
  };

  // return <View shippings={shippings} pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} handlePriceFilter={handlePriceFilter}/>;

  return (
    <View
      shippings={shippings}
      pageNum={pageNum}
      totalPages={totalPages}
      onClickPage={onClickPage}
      selectedPriceFilter={selectedPriceFilter}
      handlePriceFilter={handlePriceFilter}
    />
  );

}

History.propTypes = {};

export default History;