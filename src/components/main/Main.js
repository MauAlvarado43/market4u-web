import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import { getProductsFilters } from "components/utils/filters";
import View from "components/main/Main.view";
import { FilterContext } from "components/helpers/FilterContext";

function Main() {

  const pageSize = 28;
  const [pageNum, setPageNum] = useState(1);
  const { selectedCategories, selectedCompanies, priceRange, selectedPriceFilter, saleId } = useContext(FilterContext);

  const type = sessionStorage.getItem("type");
  if (type != "NORMAL") window.location.replace("/home");

  const filters = getProductsFilters({
    companies: selectedCompanies,
    categories: selectedCategories,
    prices: priceRange,
    sale: saleId
  })

  console.log(filters)

  const reqProducts = usePagination(`{
    productPagination {
      totalPages
      products {
        name
        shortDescription
        sale {
          name
        }
        variants {
          price
          photos {
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
  }`, pageNum, pageSize, filters);

  if (reqProducts.loading) return <Loading />;
  if (reqProducts.error) return "Error";

  const { products = [], totalPages = 0 } = reqProducts.data.productPagination;
  let sortedProducts = [...products];

  if (selectedPriceFilter !== '') {
    if (selectedPriceFilter === 'highest') {
      sortedProducts.sort((a, b) => b.variants[0].price - a.variants[0].price);
    } else if (selectedPriceFilter === 'lowest') {
      sortedProducts.sort((a, b) => a.variants[0].price - b.variants[0].price);
    }
  }

  const onClickPage = (num) => setPageNum(num);

  return (
    <View
      products={sortedProducts}
      pageNum={pageNum}
      totalPages={totalPages}
      onClickPage={onClickPage}
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