import React from "react";
import Product from "./Product";
import PurchaseData from "./PurchaseData";
import ShippingData from "./ShippingData";
import Buttons from "./Buttons";

const Card = () => {
  return (
    <section className="content-card">
      <Product />
      <PurchaseData />
      <ShippingData />
      <Buttons />
    </section>
  );
}

export default Card; 