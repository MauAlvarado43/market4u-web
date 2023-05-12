
import React, { useEffect, useState } from 'react'
import './CartStyle.css'
// import CartView4 from './cart4/Cart4'

const ResumenPedido = (props) => {
  const {cart, activeDiv, setActiveDiv} = props

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  let shipments = cart.shippings.filter(shipment => shipment.status === "CREATED");

  
  return (
    <div>
      {/* <CartView4/> */}
    </div>
  )
}

export default ResumenPedido