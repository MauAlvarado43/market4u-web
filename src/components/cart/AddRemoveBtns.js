import React, { useEffect, useState } from 'react'
import './CartStyle.css'

const AddRemoveBtn = (props) => {
  const {amount, updateAmount} = props

  const [numPieces, setNumPieces] = useState(amount);

  const addProduct = () => {
    setNumPieces(numPieces + 1)
    updateAmount(1)
  }
  
  const removeProduct = () => {
    if (numPieces > 0) {
      setNumPieces(numPieces - 1)
      updateAmount(-1)
    } else {
      setNumPieces(0)
    }
  }

  return (
    <div className='purchase-btns-div'>
      <button className='add-remove-btn' onClick={removeProduct}>-</button>
      <p>{numPieces}</p>
      <button className='add-remove-btn' onClick={addProduct}>+</button>
    </div>
  );
}

export default AddRemoveBtn