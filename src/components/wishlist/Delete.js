import React from "react";
import View from "components/products/Delete.view";
import PropTypes from "prop-types";
import { useQuery, useSet } from "seed/gql";
import { Loading } from "seed/helpers";
import { SET_USER } from "seed/gql/queries";
import swal from "sweetalert";

function Delete({ productId, onCompleted = () => null, onError = () => null, refetchQuery }) {

  const [callSetUser, qSetUser] = useSet(SET_USER, {
    onCompleted: () => {
      reqWishlist.refetch();
      onCompleted();
    }
  });

  const reqWishlist = useQuery(
    `{
      users{
        wishlist{
          id
          name
        }
      }
    }`,
    "id = " + sessionStorage.getItem("id")
  );

  if (reqWishlist.loading) return <Loading/>;
  if (reqWishlist.error) return "Error";

  const { wishlist } = reqWishlist.data.users[0];

  const onClickDelete = () => {
    const updatedWishlist = wishlist.filter((product) => parseInt(product.id) !== parseInt(productId));
    const productIds = updatedWishlist.map((product) => product.id);
    callSetUser({ id: parseInt(sessionStorage.getItem("id")), wishlist: productIds });
  };

  return <View
          onClose={onCompleted}
          onClickDelete={onClickDelete}
        />;

}

Delete.propTypes = {
  productId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
  refetchQuery: PropTypes.object
};

export default Delete;