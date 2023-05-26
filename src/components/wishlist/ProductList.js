import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/wishlist/ProductList.view";

function ProductList({ selectedCategory, selectedPriceFilter }) {
  const reqWishlist = useQuery(
    `{
      users{
          wishlist{
              name
              shortDescription
              variants{
                  price
                  photos{
                      url
                  }
              }
              category{
                  name
              }
          }
      }
    }`,
    "id = " + sessionStorage.getItem("id")
  );

  if (reqWishlist.loading) return <Loading />;
  if (reqWishlist.error) return "Error";

  const { wishlist } = reqWishlist.data.users[0];

  let filteredWishlist = wishlist.map((product) => ({ ...product }));
  if (selectedCategory && selectedCategory !== "all") {
    filteredWishlist = filteredWishlist.filter(
      (product) => product.category.name === selectedCategory
    );
  }

  if (selectedPriceFilter && selectedPriceFilter !== "all") {
    if (selectedPriceFilter === "highest") {
      filteredWishlist.sort(
        (a, b) => b.variants[0].price - a.variants[0].price
      );
    } else if (selectedPriceFilter === "lowest") {
      filteredWishlist.sort(
        (a, b) => a.variants[0].price - b.variants[0].price
      );
    }
  }

  if (
    selectedPriceFilter !== "" ||
    selectedPriceFilter !== "all" ||
    selectedCategory !== "" ||
    selectedCategory !== "all"
  )
    return <View wishlist={filteredWishlist} />;
  else return <View wishlist={wishlist} />;
}

ProductList.propTypes = {
  wishlist: PropTypes.array,
  selectedCategory: PropTypes.string,
  selectedPriceFilter: PropTypes.string,
};

export default ProductList;
