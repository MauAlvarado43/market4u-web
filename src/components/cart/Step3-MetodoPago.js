import React, { useEffect, useState } from 'react'
import './CartStyle.css'
// import CartView3 from './cart3/Cart3'

const MetodoPago = (props) => {
  const {cart, activeDiv, setActiveDiv} = props

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  let shipments = cart.shippings.filter(shipment => shipment.status === "CREATED");

  
  return (
    <div>
      {/* <CartView3/> */}
    </div>
  )
}

export default MetodoPago