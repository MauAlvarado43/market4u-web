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
              opinions {
                createdAt
                title
                description
                rate
                user { 
                  firstName
                  lastName
                  photo { url }
                }
              }
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

  const RatingStars = ({ rating, showEmptyStars }) => {
    const MAX_STARS = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    }
  
    if (hasHalfStar) {
      stars.push(<i key={fullStars} className="fas fa-star-half-alt"></i>);
    }
  
    if (showEmptyStars) {
      for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={fullStars + i + 1} className="far fa-star"></i>);
      }
    }
  
    return <div className="rating-stars">{stars}</div>;
  };

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

  // Calcula el rating promedio para cada producto
  filteredWishlist.forEach((product) => {
    const totalRate = product.opinions.reduce((sum, opinion) => sum + opinion.rate, 0);
    const averageRate = totalRate / product.opinions.length;
    product.rating = averageRate;
  });

  if (
    selectedPriceFilter !== "" ||
    selectedPriceFilter !== "all" ||
    selectedCategory !== "" ||
    selectedCategory !== "all"
  )
    return <View wishlist={filteredWishlist} 
              RatingStars={RatingStars}/>;
  else return <View wishlist={wishlist} 
                RatingStars={RatingStars}/>;
}

ProductList.propTypes = {
  wishlist: PropTypes.array,
  selectedCategory: PropTypes.string,
  selectedPriceFilter: PropTypes.string,
};

export default ProductList;
