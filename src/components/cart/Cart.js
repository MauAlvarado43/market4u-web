import React from "react";
import PropTypes from "prop-types";
import View from "components/cart/Cart.view";

function Cart({ setData, products, setProducts, setActiveStep }) {


  const onSubmit = () => {
    setData((prevData) => {
      let newData = {...prevData};
      newData.products = products;
      return newData;
    })
    setActiveStep(2);
  }

  const onDeleteProduct = (id) => {
    const newProducts = [];
    for (let product of products) {
      if (product.id != id) {
        newProducts.push(product);
      }
    }
    setProducts(newProducts);
    sessionStorage.setItem("cart", JSON.stringify(newProducts.map((item) => {
      return {
        product: item.id,
        variant: item.variant.id,
        amount: item.amount
      }
    })));
  }

  const onAddAmount = (id) => {

    const newProducts = [...products];

    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id == id) {
        newProducts[i].amount += 1;
      }
    }

    setProducts([...newProducts])

    sessionStorage.setItem("cart", JSON.stringify(newProducts.map((item) => {
      return {
        product: item.id,
        variant: item.variant.id,
        amount: item.amount
      }
    })));

  }

  const onRemoveAmount = (id) => {

    const newProducts = [...products];

    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id == id) {
        if (newProducts[i].amount == 1) {
          alert("Si desea quitar el producto, de click en el boton");
        } else {
          newProducts[i].amount -= 1;
        }
      }
    }

    setProducts([...newProducts])

    sessionStorage.setItem("cart", JSON.stringify(newProducts.map((item) => {
      return {
        product: item.id,
        variant: item.variant.id,
        amount: item.amount
      }
    })));

  }

  return <View products={products} onSubmit={onSubmit} onDeleteProduct={onDeleteProduct} onAddAmount={onAddAmount} onRemoveAmount={onRemoveAmount} />;
}

Cart.propTypes = {};

export default Cart;