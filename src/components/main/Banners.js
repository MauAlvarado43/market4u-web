import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { getShortFotmatDate } from "components/utils/dates";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/main/Banners.view";
import { FilterContext } from "components/helpers/FilterContext";

function Banners() {

  const actualDate = getShortFotmatDate(new Date());
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true
  };
  const {
    saleId,
    setSaleId,
  } = useContext(FilterContext);

  const reqSales = useQuery(`{
    sales {
      name
      banner {
        name
        url
      }
    }
  }`, `(startDate <= ${actualDate} AND endDate >= ${actualDate})`);

  if (reqSales.loading) return <Loading />;
  if (reqSales.error) return "Error";

  const { sales = [] } = reqSales.data;

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + sales.length) % sales.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % sales.length);
  };

  return <View 
          sales={sales}
          settings={settings} 
          setSaleId={setSaleId}
          activeIndex={activeIndex} 
          handlePrevClick={handlePrevClick} 
          handleNextClick={handleNextClick} 
        />;
}

Banners.propTypes = {};

export default Banners;