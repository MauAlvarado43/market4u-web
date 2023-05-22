import React from "react";
import data from "./data.json";
import OrderDetails from "./detalle-pedidos/OrderDetails";
import Products from "./detalle-pedidos/Products";
import './detailsorders.css';

const detailsorder = () => {
  return (
    <div className=" d-flex column-gap max-width h-div-container text-secondary m-auto pt-3">
      <section className="w-25 d-flex flex-column align-items-center overflow-auto mt-3">
        {data.products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </section>

      <section className="w-75">
        <OrderDetails order={data.orders} />
      </section>
    </div>
  );
};

export default detailsorder;