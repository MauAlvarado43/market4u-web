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

  const type = sessionStorage.getItem("type");
  if (type != "NORMAL") window.location.replace("/home");

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
        subtotal
        shipment
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

  const handlePriceFilter = (filter) => {
    setSelectedPriceFilter(filter);
  };

  const refetchQuery = () => {
    reqShippings.refetch();
  }

  return (
    <View
      shippings={shippings}
      pageNum={pageNum}
      totalPages={totalPages}
      onClickPage={onClickPage}
      selectedPriceFilter={selectedPriceFilter}
      handlePriceFilter={handlePriceFilter}
      refetchQuery={refetchQuery}
    />
  );

}

History.propTypes = {};

export default History;