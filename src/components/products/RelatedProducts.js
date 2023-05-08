import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/products/RelatedProducts.view";
import { useQuery } from "seed/gql";

function RelatedProducts({ product }) {
  
  const pageSize = 5;
  const pageLimit = 10;
  const [pageIndex, setPageIndex] = useState(0);
  const category = product.category.name;
  const qRelatedProducts = useQuery(`
    {
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
        opinions {
          title
          description
          rate
          user {  }
        }
      }
    }
  `, `((category.name=${category}) AND (id<>${product.id}))`, { limit: pageLimit });

  if(qRelatedProducts.loading) return <div>Loading...</div>;
  if(qRelatedProducts.error) return <div>Error</div>;

  const { products } = qRelatedProducts.data;

  return <View 
    pageIndex={pageIndex}
    pageSize={pageSize}
    setPageIndex={setPageIndex}
    products={products}
  />;
  
}

RelatedProducts.propTypes = {
  product: PropTypes.object
};

export default RelatedProducts;