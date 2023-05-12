import React, { useEffect, useState } from 'react'
import AddRemoveBtn from './S1-AddRemoveBtns'
import './CartStyle.css'

const PurchaseCard = (props) => {

  const { indexs, indexp, purchase, updateAmount, updateTotalCost } = props

  const [productAmount, setProductAmount] = useState(purchase.amount)

  const price = (JSON.parse(purchase.product)).price

  // const [productTotal, setProductTotal] = useState(purchase.amount)
  

  return (
    <div className="purchase" id={indexs+indexp}>
      <div className="purchase-img-div">
        <img
          src={(JSON.parse(purchase.product)).url_img}
        />
        <div className='prod-amount'><p>{productAmount}</p></div>
      </div>

      <div className="purchase-info">
        <h4>{(JSON.parse(purchase.product)).name}</h4>
        <p>$ {(price * productAmount).toFixed(2)}</p>
        Talla: {(JSON.parse(purchase.product)).size}
      </div>

      <AddRemoveBtn
        productAmount = {productAmount}
        updateAmount = {updateAmount}
        setProductAmount = {setProductAmount}
        updateTotalCost = {updateTotalCost}
        price = {price}
      />
      
    </div>
  )
}

export default PurchaseCard