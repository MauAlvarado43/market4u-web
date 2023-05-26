import React from "react";
import PropTypes from "prop-types";
import "./CartStyle.css"

const getTotal = (products) => {
  let total = 0;
  for (let product of products) {
    total += (product?.variant?.price * product?.amount)
  }
  return total;
}


const SumaryView = ({ products, onSubmit }) =>
  <div className="text-center">
    <div className="p-5" style={{ border: "5px #519EA4 solid", borderRadius: "20px" }}>

      <h1 style={{ fontSize: "2rem" }}>Resumen de compra</h1>
      <table className='summary-table'>
        <tr>
          <td><h3>Subtotal ({products.length} productos):</h3></td>
          <td><h3>$ {getTotal(products).toFixed(2)}</h3></td>
        </tr>
        <tr>
          <td colSpan={2}>
            <ul>
              {
                products.map((product) => (
                  <li key={product.id}>
                    {product?.amount} x {product?.sku} = {(product?.amount * product?.variant?.price).toFixed(2)}
                  </li>
                ))
              }
            </ul>
          </td>
        </tr>
        <tr>
          <td><h3>Envío:</h3></td>
          <td><h3>$ {
            function () {
              let total = 0;
              for (let product of products) {
                total += product?.variant?.shipment
              }
              return total.toFixed(2);
            }()
          }</h3></td>
        </tr>
        <tr>
          <td><h3>Total:</h3></td>
          <td><h3>$ {
            function () {
              let totalShipment = 0;
              let total = getTotal(products);
              for (let product of products) {
                totalShipment += product?.variant?.shipment
              }
              total += totalShipment;
              return total.toFixed(2);
            }()
          }</h3></td>
        </tr>
      </table>
      <div className='text-center'>
        <button onClick={onSubmit} className="buttonShopping" style={{ backgroundColor: "#FC4B08" }}>Continuar</button>
      </div>
    </div>

  </div>;

SumaryView.propTypes = {};

export default SumaryView;