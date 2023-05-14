import React, { useEffect, useState } from 'react'
import './CartStyle.css'
// import CartView3 from './cart3/Cart3'

const MetodoPago = (props) => {
  const { shipments, activeDiv, setActiveDiv } = props

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  
  return (
    <div>
      {/* <CartView3/> */}
    </div>
  )
}

export default MetodoPago