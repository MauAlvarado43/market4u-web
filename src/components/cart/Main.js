import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";
import View from "components/cart/Main.view";

function Main() {
  
  const [activeStep, setActiveStep] = useState(1);
  const [products, setProducts] = useState([]);
  const cart = sessionStorage.getItem("cart");

  const [callProducts, reqProducts] = usePost("/carts/active_products", {
    onCompleted: (data) => {  
      setProducts(data);
    }, 
    onError: (err) => {
      alert("Ha ocurrido un error al cargar los productos");
    }
  })

  useEffect(() => {
    if (cart) {
      callProducts({cart: JSON.parse(cart)})
    }
  }, [cart])

  return <View products={products} setProducts={setProducts} activeStep={activeStep} setActiveStep={setActiveStep} />;
}

Main.propTypes = {};

export default Main;