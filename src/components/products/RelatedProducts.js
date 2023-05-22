import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/products/RelatedProducts.view";
import { useQuery } from "seed/gql";
import { useGet, usePost } from "seed/api";

function RelatedProducts({ product }) {
  
  const pageSize = 3;
  const pageLimit = 10;
  const [pageIndex, setPageIndex] = useState(0);
  const category = product.category.name;
  const qRelatedProducts = useGet("/products/get_related_products", {"product_id": product.id});

  if(qRelatedProducts.loading) return <div>Loading...</div>;
  if(qRelatedProducts.error) return <div>Error</div>;

  const { products } = qRelatedProducts.data;

  let relatedProducts = [];
  for(let i = 0; i < products.length && relatedProducts.length < pageLimit; i++)
      relatedProducts.push(products[i]);

  return <View 
    pageIndex={pageIndex}
    pageSize={pageSize}
    setPageIndex={setPageIndex}
    products={relatedProducts}
  />;
  
}

RelatedProducts.propTypes = {
  product: PropTypes.object
};

export default RelatedProducts;