import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [saleId, setSaleId] = useState("");

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        selectedCompanies,
        setSelectedCompanies,
        priceRange,
        setPriceRange,
        selectedPriceFilter,
        setSelectedPriceFilter,
        setSaleId,
        saleId
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
