import React, { useEffect, useState } from 'react'
import './CartStyle.css'
import { Divider } from "@material-ui/core";
import AddRemoveBtn from './AddRemoveBtns'

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

  function updateAmount(num) {
    setFinalAmount(finalAmount + num)
  }
  
  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);
  
  
  

  
  return (
    <div className='step-cart'>

      <div className='cart-info'>
        <h2>Productos agregados ({shipments[0].purchases.length})</h2>
        <Divider/>
      </div>

      <div className='cart-products'>
        {finalAmount}
        {shipments.map((shipment) => (
          <div className="shipment">
            {shipment.purchases.map((purchase, index) => {
              return (
              <div className="purchase">

                <div className="purchase-img-div">
                  <img
                    src={(JSON.parse(purchase.product)).url_img}
                  />
                  <div className='prod-amount'><p>{purchase.amount}</p></div>
                </div>

                <div className="purchase-info">
                  <h4>{(JSON.parse(purchase.product)).name}</h4>
                  <p>$ {(JSON.parse(purchase.product)).price * purchase.amount}</p>
                  Talla: {(JSON.parse(purchase.product)).size}
                </div>

                <AddRemoveBtn
                  amount = {purchase.amount}
                  updateAmount = {updateAmount}
                />

              </div>)
            })}
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
    </div>
  )
}

export default CarritoCompras