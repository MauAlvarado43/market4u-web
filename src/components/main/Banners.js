import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery, usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/main/Banners.view";

function Banners() {

  const [activeIndex, setActiveIndex] = useState(0);

  const reqSales = useQuery(`{
    sales {
      id
      name
      banner {
        name
        url
      }
    }
  }`);

  if (reqSales.loading) return <Loading />;
  if (reqSales.error) return "Error";

  const { sales = [] } = reqSales.data;

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + sales.length) % sales.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % sales.length);
  };

  return <View sales={sales} activeIndex={activeIndex} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />;
}

Banners.propTypes = {};

export default Banners;