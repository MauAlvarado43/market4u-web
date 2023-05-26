import React from 'react';
import './CartStyle.css';

const Steps = ({ cartStep, deliveryStep, paymentStep, purchaseStep, activeStep, setActiveStep }) => (

  <div className='steps-bar'>
    <div className='first-step-bar' onClick={() => {
      if (cartStep) setActiveStep(1)
    }}>
      <div className={activeStep === 1 ? 'div-transition active' : 'div-transition'} >1</div>
      <div className={activeStep === 1 ? 'div-transition active' : 'div-transition-text'} >Carrito de compra</div>
    </div>

    <div className="line"></div>

    <div className='second-step-bar' onClick={() => {
      if (deliveryStep) setActiveStep(2)
    }}>
      <div className={activeStep === 2 ? 'div-transition active' : 'div-transition'} >2</div>
      <div className={activeStep === 2 ? 'div-transition active' : 'div-transition-text'} >Detalles de entrega</div>
    </div>

    <div className="line"></div>

    <div className='third-step-bar' onClick={() => {
      if (paymentStep) setActiveStep(3)
    }}>
      <div className={activeStep === 3 ? 'div-transition active' : 'div-transition'} >3</div>
      <div className={activeStep === 3 ? 'div-transition active' : 'div-transition-text'} >Método de pago</div>
    </div>

    <div className="line"></div>

    <div className='fourth-step-bar' onClick={() => {
      if (purchaseStep) setActiveStep(4)
    }}>
      <div className={activeStep === 4 ? 'div-transition active' : 'div-transition'} >4</div>
      <div className={activeStep === 4 ? 'div-transition active' : 'div-transition-text'} >Resumen del pedido</div>
    </div>
  </div>

);

export default Steps