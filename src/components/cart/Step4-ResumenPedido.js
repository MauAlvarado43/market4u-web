
import React, { useEffect, useState } from 'react'
import './CartStyle.css'
import { Divider } from '@material-ui/core'
import PurchaseCard from './S1-Purchase'
import PaymentCard from './S4-PaymentCard'
import PurchaseCompleted from "./PurchaseCompleted";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';


const ResumenPedido = (props) => {
  
  const { cart, shipments, activeDiv, setActiveDiv, finalAmount, setFinalAmount, totalCost, setTotalCost, prodAmounts, updateProdAmount } = props

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  function updateAmount(num) {
    setFinalAmount(finalAmount + num)
  }
  
  function updateTotalCost(cost) {
    setTotalCost(totalCost + cost)
  }

  const email = cart.users[0].email
  const address = cart.users[0].address
  const payment = (cart.users[0].buyerCarts[0].payment)

  const history = useHistory();

  
  return (
    <div className='payment-div'>

      <div className='payment-order-div'>
        <h2>Resumen del pedido</h2>

        <Divider/>

        <div className='order-sum-heads'>
          <h3>Contacto</h3>
          <p onClick={() => setActiveDiv(2)}>Editar</p>
        </div>
        <p className='order-data'>teléfono del usuario, {email}</p>

        <Divider/>

        <div className='order-sum-heads'>
          <h3>Dirección de entrega</h3>
          <p onClick={() => setActiveDiv(2)}>Editar</p>
        </div>
        <p className='order-data'>{address}</p>

        <Divider/>

        <div className='order-sum-heads'>
          <h3>Método de pago</h3>
          <p onClick={() => setActiveDiv(3)}>Editar</p>
        </div>
        
        <PaymentCard
          payment={payment}
          index={1}
        />

      </div>

      <div className='payment-products'>

        <div>
          <div className='payment-num-prods'>
            <h2>{finalAmount === 1 ? `${finalAmount} producto` : `${finalAmount} productos`}</h2>
          </div>
          <div className='payment-prods-edit' onClick={() => setActiveDiv(1)}>
            <h2>Editar</h2>
          </div>
        </div>

        <Divider/>

        <div>
          {shipments.map((shipment,indexs) => (
            <div id={indexs}>
              {shipment.purchases.map((purchase, indexp) =>(
                <PurchaseCard
                  activeDiv = {activeDiv}
                  indexs = {indexs}
                  indexp = {indexp}
                  purchase = {purchase}
                  updateAmount = {updateAmount}
                  updateTotalCost = {updateTotalCost}
                  updateProdAmount = {updateProdAmount}
                  prodAmounts = {prodAmounts}
                />
              ))}
            </div>
          ))}
        </div>

        <Divider/>

        <div>
          <table className='summary-table'>
            <tr>
              <td>Subtotal ({finalAmount} productos):</td>
              <td>$ {totalCost.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Envío:</td>
              <td>$ 99.00</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Divider/>
              </td>
            </tr>
            <tr>
              <td>IVA</td>
              <td>Incluido en los productos</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Divider/>
              </td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>$ {(totalCost + 99).toFixed(2)}</td>
            </tr>
          </table>

          <Divider/>

          <div className='buttons'>
            <button onClick={(e) => history.push('/finalizar')}  disabled={totalCost == 0} className="buttonShopping" style={{"--bg-color-shop": '#FC4B08', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Realizar pedido</button>
            <button onClick={(e) => setActiveDiv(2)} className="buttonShopping" style={{"--bg-color-shop": '#519EA4', "--bg-color-hover": '#6ad2d9', "--bg-color-active": '#366a6e'}}>Regresar</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ResumenPedido