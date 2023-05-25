import React, { useEffect, useState } from 'react'
import { Divider } from "@material-ui/core"
import PurchaseCard from './S1-Purchase'

const CarritoCompras = (props) => {


  const { cart, shipments, activeDiv, setActiveDiv, finalAmount, setFinalAmount, totalCost, setTotalCost, prodAmounts, setProdAmounts } = props
  

  function updateAmount(num) {
    setFinalAmount(finalAmount + num)
  }
  
  function updateTotalCost(cost) {
    setTotalCost(totalCost + cost)
  }

  const updateProdAmount = (index, newValue) => {
    setProdAmounts(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = prevItems[index]+newValue;
      return updatedItems;
    });
  };
  
  
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
                activeDiv = {activeDiv}
                indexs = {indexs}
                indexp = {indexp}
                purchase = {purchase}
                updateAmount = {updateAmount}
                updateTotalCost = {updateTotalCost}
                updateProdAmount={updateProdAmount}
                prodAmounts = {prodAmounts}
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className='cart-summary'>
        <h1>Resumen de compra</h1>
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
            <td>Total:</td>
            <td>$ {(totalCost + 99).toFixed(2)}</td>
          </tr>
        </table>
        <div className='buttons'>
          <button onClick={() => setActiveDiv(2)} disabled={totalCost == 0} className="buttonShopping" style={{"--bg-color-shop": '#FC4B08', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000', 'marginLeft': "100px", 'marginRight': "auto" }}>Continuar</button>
        </div>  
      </div>
    </div>
  )
}

export default CarritoCompras