import React, { useEffect, useState } from 'react'
import './CartStyle.css'

const ResumenPedido = (props) => {
  const {cart, activeDiv, setActiveDiv} = props

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  let shipments = cart.shippings.filter(shipment => shipment.status === "CREATED");

  
  return (
    <div>
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
        <button onClick={() => setActiveDiv(1)} className="buttonShopping" style={{"--bg-color-shop": '#fa6400', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Continuar</button>
      </div>
      {console.log(activeDiv)}
    </div>
  )
}

export default ResumenPedido