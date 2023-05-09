import React, { useEffect, useState } from 'react'
import './CartStyle.css'

const Steps = (props) => {
  const {state} = props

  const [activeDiv, setActiveDiv] = useState(state);
  
  return (
    <div className='steps-bar'>
      <div className='first-step-bar'>
        <div className={activeDiv === 1 ? 'div-transition active' : 'div-transition'} onClick={() => setActiveDiv(1)}>1</div>
        <div className={activeDiv === 1 ? 'div-transition active' : 'div-transition-text'} onClick={() => setActiveDiv(1)}>Carrito de compra</div>
      </div>

      <div className='second-step-bar'>
        <div className={activeDiv === 2 ? 'div-transition active' : 'div-transition'} onClick={() => setActiveDiv(2)}>2</div>
        <div className={activeDiv === 2 ? 'div-transition active' : 'div-transition-text'} onClick={() => setActiveDiv(2)}>Detalles de entrega</div>
      </div>

      <div className='third-step-bar'>
        <div className={activeDiv === 3 ? 'div-transition active' : 'div-transition'} onClick={() => setActiveDiv(3)}>3</div>
        <div className={activeDiv === 3 ? 'div-transition active' : 'div-transition-text'} onClick={() => setActiveDiv(3)}>Método de pago</div>
      </div>
      
      <div className='fourth-step-bar'>
        <div className={activeDiv === 4 ? 'div-transition active' : 'div-transition'} onClick={() => setActiveDiv(4)}>4</div>
        <div className={activeDiv === 4 ? 'div-transition active' : 'div-transition-text'} onClick={() => setActiveDiv(4)}>Resumen del pedido</div>
      </div>
    </div>
    
  )
}

export default Steps