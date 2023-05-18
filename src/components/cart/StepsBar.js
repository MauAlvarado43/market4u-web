import React, { useEffect, useState } from 'react'
import './CartStyle.css'

const Steps = (props) => {
  const {activeDiv, setActiveDiv} = props

  useEffect(() => {
    setActiveDiv(props.activeDiv);
  }, [props.activeDiv]);
  
  return (
    <div className='steps-bar'>
      <div className='first-step-bar'>
        <div className={activeDiv === 1 ? 'div-transition active' : 'div-transition'} >1</div>
        <div className={activeDiv === 1 ? 'div-transition active' : 'div-transition-text'} >Carrito de compra</div>
      </div>

      <div className="line"></div>

      <div className='second-step-bar'>
        <div className={activeDiv === 2 ? 'div-transition active' : 'div-transition'} >2</div>
        <div className={activeDiv === 2 ? 'div-transition active' : 'div-transition-text'} >Detalles de entrega</div>
      </div>

      <div className="line"></div>

      <div className='third-step-bar'>
        <div className={activeDiv === 3 ? 'div-transition active' : 'div-transition'} >3</div>
        <div className={activeDiv === 3 ? 'div-transition active' : 'div-transition-text'} >Método de pago</div>
      </div>

      <div className="line"></div>
      
      <div className='fourth-step-bar'>
        <div className={activeDiv === 4 ? 'div-transition active' : 'div-transition'} >4</div>
        <div className={activeDiv === 4 ? 'div-transition active' : 'div-transition-text'} >Resumen del pedido</div>
      </div>
    </div>
    
  )
}

export default Steps