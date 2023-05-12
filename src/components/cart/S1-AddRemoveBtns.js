import React, { useEffect, useState } from 'react'
import './CartStyle.css'

const AddRemoveBtn = (props) => {
  const {productAmount, updateAmount, setProductAmount, updateTotalCost, price} = props

  // const [numPieces, setNumPieces] = useState(productAmount);

  useEffect(() => {
    setProductAmount(productAmount);
  }, [productAmount]);

  const addProduct = () => {
    setProductAmount(productAmount + 1)
    updateAmount(1)
    updateTotalCost(price)
  }
  
  const removeProduct = () => {
    if (productAmount > 0) {
      setProductAmount(productAmount - 1)
      updateAmount(-1)
      updateTotalCost(-price)
    } else {
      setProductAmount(0)
    }
  }

  return (
    <div className='purchase-btns-div'>
      <button className='add-remove-btn' onClick={removeProduct}>-</button>
      <p>{productAmount}</p>
      <button className='add-remove-btn' onClick={addProduct}>+</button>
    </div>
  );
}

export default AddRemoveBtn