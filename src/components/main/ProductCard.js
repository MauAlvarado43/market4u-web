import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/main/ProductCard.view";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { useDetail } from "seed/gql";

function ProductCard({ product }) {

  const qUser = useDetail(`{ 
      user {
        wishlist{
          name
        }
      }
    }`,sessionStorage.getItem("id")
  );

  const [ callSetWishlist, setWishlistStatus ] = usePost("/users/add_products_wishlist", {
    onCompleted: (data) => {
      if(data.exist_product)
        swal("¡Ups!", "El producto ya se encuentra en tu lista de deseos", "https://static.thenounproject.com/png/1391832-200.png");
      else
        swal("¡Listo!", "Se ha agregado el producto a tu lista de deseos", "success");

      qUser.refetch();
    },
  });

  const handleSetWishlist = (product_id) => {
    const values = {}
    values.product_id = product_id;
    values.user_id = parseInt(sessionStorage.getItem("id"));
    callSetWishlist(values);
  };

  return <View 
          handleSetWishlist={handleSetWishlist}
          product={product} 
        />;
}

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;