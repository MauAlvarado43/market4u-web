import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/main/Main.view";
import { FilterContext } from "components/helpers/FilterContext";

function Main() {
  
  const pageSize = 20;
  const [pageNum, setPageNum] = useState(1);
  const { selectedCategories, selectedCompanies, priceRange, selectedPriceFilter } = useContext(FilterContext);

  const reqProducts = usePagination(
    `{
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
          category {
            name
          }
          company {
            commonName
          }
        }
      }
    }`,
    pageNum,
    pageSize
  );

  if (reqProducts.loading) return <Loading />;
  if (reqProducts.error) return "Error";

  const { products = [], totalPages = 0 } = reqProducts.data.productPagination;

  const filteredProducts = products.filter(product => {
    const { category, company, variants } = product;
    const productCategory = category ? category.name : '';
    const productCompany = company ? product.company.commonName : '';
    const productPrice = variants.length > 0 ? variants[0].price : 0;
    
    if (selectedCategories.length > 0 && !selectedCategories.includes(productCategory)) {
      return false;
    }
    
    if (selectedCompanies.length > 0 && !selectedCompanies.includes(productCompany)) {
      return false;
    }
    
    if (priceRange && (productPrice < priceRange[0] || productPrice > priceRange[1])) {
      return false;
    }
    
    return true;
  });

  let sortedProducts = [...filteredProducts];

  if (selectedPriceFilter !== '') {
    if (selectedPriceFilter === 'highest') {
      sortedProducts.sort((a, b) => b.variants[0].price - a.variants[0].price);
    } else if (selectedPriceFilter === 'lowest') {
      sortedProducts.sort((a, b) => a.variants[0].price - b.variants[0].price);
    }
  }

  return (
        <View
          products={sortedProducts}
        />
  );
}

Main.propTypes = {
  products: PropTypes.array,
  onClickPage: PropTypes.func,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
};

export default Main;