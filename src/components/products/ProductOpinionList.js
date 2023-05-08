import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/products/ProductOpinionList.view";

function ProductOpinionList({ product, rate }) {

  let [filters, setFilters] = useState({});
  let opinions = product?.opinions??[];

  let opinionRateCount = {};

  for(let i = 1; i <= 5; i++)
    opinionRateCount[i] = { count: 0, percent: 0 };

  opinions.forEach(opinion => {
    opinionRateCount[opinion.rate].count++;
    opinionRateCount[opinion.rate].percent = (opinionRateCount[opinion.rate].count / opinions.length) * 100;
  });

  // TODO: Implement filters

  return <View 
    opinions={opinions}
    product={product}
    rate={rate}
    opinionRateCount={opinionRateCount}
  />;

}

ProductOpinionList.propTypes = {
    product: PropTypes.object,
    rate: PropTypes.number
};

export default ProductOpinionList;