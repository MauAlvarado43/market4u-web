import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/wishlist/WishList.view";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";

function WishList() {

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");

  const type = sessionStorage.getItem("type");
  if (type != "NORMAL") window.location.replace("/home");

  const reqCategories = useQuery(
    `{
      categories{
        name
      }
    }`
  );

  if (reqCategories.loading) return <Loading/>;
  if (reqCategories.error) return "Error";

  const { categories } = reqCategories.data;

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceFilter = (filter) => {
    setSelectedPriceFilter(filter);
  };

  return (
    <View 
      categories={categories}
      selectedCategory={selectedCategory}
      selectedPriceFilter={selectedPriceFilter}
      handleCategoryFilter={handleCategoryFilter}
      handlePriceFilter={handlePriceFilter}
    />
  );
}

WishList.propTypes = {
  categories: PropTypes.array,
  selectedCategory: PropTypes.string,
  selectedPriceFilter: PropTypes.string,
  handleCategoryFilter: PropTypes.func,
  handlePriceFilter: PropTypes.func
};

export default WishList;