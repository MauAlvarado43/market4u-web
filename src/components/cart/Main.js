import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import { useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/cart/Main.view";

function Main() {

  const userId = sessionStorage.getItem("id");
  const [activeStep, setActiveStep] = useState(1);
  const [products, setProducts] = useState([]);
  const cart = sessionStorage.getItem("cart");
  const [data, setData] = useState({});

  const [callProducts, reqProducts] = usePost("/carts/active_products", {
    onCompleted: (data) => {
      setProducts(data);
    },
    onError: (err) => {
      alert("Ha ocurrido un error al cargar los productos");
    }
  })

  const reqUser = useDetail(`{
    user {
      firstName
      lastName
      email
      street
      city
      cp
      municipality
      state
      telephone
      cologn
      payments {
        cardNumber
        expireDate
        address
        bank
      }
    }
  }`, userId);

  useEffect(() => {
    if (cart) {
      callProducts({ cart: JSON.parse(cart) })
    }
  }, [cart])


  if (reqUser.loading) return <Loading />
  if (reqUser.error) return "Error";

  const { user = {} } = reqUser.data;

  console.log(data);

  return (
    <View
      user={user}
      data={data}
      setData={setData}
      products={products}
      setProducts={setProducts}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />
  );
}

Main.propTypes = {};

export default Main;