import React, { useEffect, useState } from 'react'
import './CartStyle.css'
import { Divider } from "@material-ui/core";

const CarritoCompras = (props) => {
  const {cart, activeDiv, setActiveDiv} = props

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  let shipments = cart.shippings.filter(shipment => shipment.status === "CREATED");

  
  return (
    <div className='step-cart'>

      <div className='cart-products'>
        <h2>Productos agregados ({shipments[0].purchases.length})</h2>
        <Divider/>
        {shipments.map((shipment) => (
          <div className="shipment">
            {shipment.purchases.map((purchase) => (
              <div className="purchase">
                <div className="purchase-img-div">
                  <img
                    src={(JSON.parse(purchase.product)).url_img}
                  />
                </div>
                <div className="purchase-info">
                  <h4>{(JSON.parse(purchase.product)).name}</h4>
                  <p>$ {(JSON.parse(purchase.product)).price * purchase.amount}</p>
                  Talla: {(JSON.parse(purchase.product)).size}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className='cart-summary'>
        <h1>Resumen de compra</h1>
        <table className='summary-table'>
          <tr>
            <td>Subtotal ({shipments[0].purchases.length} productos:)</td>
            <td>$ {((shipments[0].purchases).reduce((acc, curr) => acc + ((JSON.parse(curr.product)).price * curr.amount), 0)).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Envío:</td>
            <td>$ 99.00</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>$ {(((shipments[0].purchases).reduce((acc, curr) => acc + ((JSON.parse(curr.product)).price * curr.amount), 0)) + 99).toFixed(2)}</td>
          </tr>
        </table>
        <button onClick={() => setActiveDiv(2)} className="buttonShopping" style={{"--bg-color-shop": '#fa6400', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Continuar</button>
      </div>
      {console.log(activeDiv)}
    </div>
  )
}

export default CarritoCompras