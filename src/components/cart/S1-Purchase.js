import React, { useEffect, useState } from 'react'
import AddRemoveBtn from './S1-AddRemoveBtns'
import './CartStyle.css'

const PurchaseCard = (props) => {

  const { activeDiv, indexs, indexp, purchase, updateAmount, updateTotalCost, updateProdAmount, prodAmounts } = props

  const [productAmount, setProductAmount] = useState(purchase.amount)

  const price = (JSON.parse(purchase.product)).price


  return (
    <div className={activeDiv === 1 ? 'purchase' : 'payment-prod-div'} key={indexs+indexp}>
      <div className={activeDiv === 1 ? 'purchase-img-div' : 'payment-img-div'} >
        <img
          src={(JSON.parse(purchase.product)).url_img}
        />
        <div className='prod-amount'><p>{prodAmounts[indexp]}</p></div>
      </div>

      <div className={activeDiv === 1 ? 'purchase-info' : 'payment-info'} >
        <h4>{(JSON.parse(purchase.product)).name}</h4>
        <p>$ {(price * prodAmounts[indexp]).toFixed(2)}</p>
        Talla: {(JSON.parse(purchase.product)).size}
      </div>

      <div className={activeDiv === 1 ? 'purchase-btns-div' : 'hidden-div'} >
        <AddRemoveBtn 
          productAmount = {productAmount}
          updateAmount = {updateAmount}
          setProductAmount = {setProductAmount}
          updateTotalCost = {updateTotalCost}
          price = {price}
          updateProdAmount={updateProdAmount}
          indexp={indexp}
        />
      </div>
      
    </div>
  )
}

export default PurchaseCard