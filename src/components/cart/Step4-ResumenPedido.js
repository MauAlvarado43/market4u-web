
import React, { useEffect, useState } from 'react'
import './CartStyle.css'
// import CartView4 from './cart4/Cart4'

const ResumenPedido = (props) => {
  const { shipments, activeDiv, setActiveDiv } = props

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);
  
  return (
    <div>
      {/* <CartView4/> */}
    </div>
  )
}

export default ResumenPedido