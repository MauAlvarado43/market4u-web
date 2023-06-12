import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/nav/Filter.view";
import { FilterContext } from "components/helpers/FilterContext";

function Filter(props) {
  const { user = [], values = [], handleChange = {}, handleModalToggle = {} } = props;

  console.log(values)

  const {
    selectedCategories,
    setSelectedCategories,
    selectedCompanies,
    setSelectedCompanies,
    priceRange,
    setPriceRange,
    selectedPriceFilter,
    setSelectedPriceFilter,
    saleId,
    setSaleId
  } = useContext(FilterContext);

  const [filterCleared, setFilterCleared] = useState(false); 

  const reqCategory = useQuery(`{
    categories {
      name
    }
  }`);

  const reqBusiness = useQuery(`{
    companies {
      commonName
    }
  }`);

  useEffect(() => {
    if(filterCleared){
      setFilterCleared(false);
      values[0] = priceRange[0];
      values[1] = priceRange[1];
    }
  }, [filterCleared]); 

  if (reqCategory.loading) return <Loading />;
  if (reqCategory.error) return "Error";

  const { categories = [] } = reqCategory.data;
  const { companies = [] } = reqBusiness.data;

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    if (event.target.checked) {
      setSelectedCategories((prevSelectedCategories) => [
        ...prevSelectedCategories,
        categoryName,
      ]);
    } else {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((category) => category !== categoryName)
      );
    }
  };

  const handleCompanyChange = (event) => {
    const companyName = event.target.value;
    if (event.target.checked) {
      setSelectedCompanies((prevSelectedCompanies) => [
        ...prevSelectedCompanies,
        companyName,
      ]);
    } else {
      setSelectedCompanies((prevSelectedCompanies) =>
        prevSelectedCompanies.filter((company) => company !== companyName)
      );
    }
  };

  const handleFilterClear = () => {
    setSelectedCategories([]);
    setSelectedCompanies([]);
    setSelectedPriceFilter("all");
    setPriceRange([0, 100000]);
    setSaleId("");
    console.log(values)
    handleChange(priceRange);
    setFilterCleared(true); 
  };

  const handlePriceFilter = (filter) => {
    setSelectedPriceFilter(filter);
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
    handleChange(priceRange);
  };

  return (
    <View
      user={user}
      values={values}
      companies={companies}
      categories={categories}
      priceRange={priceRange}
      handleChange={handlePriceChange}
      handleModalToggle={handleModalToggle}
      handlePriceChange={handlePriceChange}
      handlePriceFilter={handlePriceFilter}
      handleFilterClear={handleFilterClear}
      selectedCategories={selectedCategories}
      selectedCompanies={selectedCompanies}
      handleCompanyChange={handleCompanyChange}
      handleCategoryChange={handleCategoryChange}
    />
  );
}

Filter.propTypes = {
  user: PropTypes.object,
  values: PropTypes.array,
  handleChange: PropTypes.func,
  handleModalToggle: PropTypes.func,
};

export default Filter;
