import React, { useEffect, useState } from 'react'
import './CartStyle.css'
import { Divider } from "@material-ui/core";
import PurchaseCard from './S1-Purchase'

const CarritoCompras = (props) => {


  const {cart, activeDiv, setActiveDiv} = props
  
  let shipments = cart.shippings.filter(shipment => shipment.status === "CREATED");

  let auxSum = 0
  if (shipments[0]) {
    shipments[0].purchases.forEach(element => {
      auxSum += element.amount
    });
  }
  
  const [finalAmount, setFinalAmount] = useState(auxSum)
  const [totalCost, setTotalCost] = useState(((shipments[0].purchases).reduce((acc, curr) => acc + ((JSON.parse(curr.product)).price * curr.amount), 0)))
  

  function updateAmount(num) {
    setFinalAmount(finalAmount + num)
  }
  
  function updateTotalCost(cost) {
    setTotalCost(totalCost + cost)
  }
  
  
  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);
  
  
  return (
    <div className='step-cart'>

      <div className='cart-info'>
        <h2>Productos agregados ({finalAmount})</h2>
        <Divider/>
      </div>

      <div className='cart-products'>
        {shipments.map((shipment,indexs) => (
          <div className="shipment" id={indexs}>
            {shipment.purchases.map((purchase, indexp) =>(
              <PurchaseCard
                indexs = {indexs}
                indexp = {indexp}
                purchase = {purchase}
                updateAmount = {updateAmount}
                updateTotalCost = {updateTotalCost}
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className='cart-summary'>
        <h1>Resumen de compra</h1>
        <table className='summary-table'>
          <tr>
            <td>Subtotal ({finalAmount} productos:)</td>
            <td>$ {totalCost.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Envío:</td>
            <td>$ 99.00</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>$ {(totalCost + 99).toFixed(2)}</td>
          </tr>
        </table>
        <button onClick={() => setActiveDiv(2)} className="buttonShopping" style={{"--bg-color-shop": '#fa6400', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Continuar</button>
      </div>

    </div>
  )
}

export default CarritoCompras