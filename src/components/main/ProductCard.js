import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/main/ProductCard.view";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { useDetail } from "seed/gql";

function ProductCard({ product }) {
  const qUser = useDetail(
    `{ 
      user {
        wishlist{
          name
        }
      }
    }`,
    sessionStorage.getItem("id")
  );

  const [callSetWishlist, setWishlistStatus] = usePost(
    "/users/add_products_wishlist",
    {
      onCompleted: () => {
        qUser.refetch();
      },
    }
  );

  const handleSetWishlist = (product_id) => {
    const values = {};
    values.product_id = product_id;
    values.user_id = parseInt(sessionStorage.getItem("id"));
    callSetWishlist(values);
  };

  const { user = [] } = qUser.data;
  const isProductInWishlist =
    user.wishlist && user.wishlist.some((item) => item.name === product.name);

  return (
    <View
      isProductInWishlist={isProductInWishlist}
      handleSetWishlist={handleSetWishlist}
      product={product}
    />
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
