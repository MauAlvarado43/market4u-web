import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/wishlist/ProductList.view"

function ProductList(){

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

    if (reqWishlist.loading) return <Loading/>;
    if (reqWishlist.error) return "Error";

    const { wishlist } = reqWishlist.data.users[0];

    console.log(wishlist);

    return <View wishlist={wishlist}/>;
    
}

ProductList.propTypes = {
    wishlist: PropTypes.array,
};

export default ProductList;