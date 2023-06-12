import React from 'react';
import './CartStyle.css';

const Steps = ({ cartStep, deliveryStep, paymentStep, purchaseStep, activeStep, setActiveStep }) => (

  <div className="p-3" style={{ width: "90%" }}>
    <ul className="js-step-progress step step-sm step-icon-sm step step-inline step-item-between mb-3 mb-md-5">

      <li class={`step-item ${activeStep == 1 ? "active" : ""}`} style={{ transition: "all 0.5s ease" }}>
        <a class="step-content-wrapper" onClick={() => { if (cartStep) setActiveStep(1) }}>
          <span class="step-icon step-icon-soft-dark h3" style={{ cursor: "pointer" }}>1</span>
          <div class="step-content">
            <span class="step-title h3 mt-1" style={{ cursor: "pointer" }}>Carrito de compra</span>
          </div>
        </a>
      </li>

      <li class={`step-item ${activeStep == 2 ? "active" : ""}`} style={{ transition: "all 0.5s ease" }}>
        <a class="step-content-wrapper" onClick={() => { if (deliveryStep) setActiveStep(2) }}>
          <span class="step-icon step-icon-soft-dark h3" style={{ cursor: "pointer" }}>2</span>
          <div class="step-content">
            <span class="step-title h3 mt-1" style={{ cursor: "pointer" }}>Detalles de entrega</span>
          </div>
        </a>
      </li>

      <li class={`step-item ${activeStep == 3 ? "active" : ""}`} style={{ transition: "all 0.5s ease" }}>
        <a class="step-content-wrapper" onClick={() => { if (paymentStep) setActiveStep(3) }}>
          <span class="step-icon step-icon-soft-dark h3" style={{ cursor: "pointer" }}>3</span>
          <div class="step-content">
            <span class="step-title h3 mt-1" style={{ cursor: "pointer" }}>Método de pago</span>
          </div>
        </a>
      </li>

      <li class={`step-item ${activeStep == 4 ? "active" : ""}`} style={{ transition: "all 0.5s ease" }}>
        <a class="step-content-wrapper" onClick={() => { if (purchaseStep) setActiveStep(4) }}>
          <span class="step-icon step-icon-soft-dark h3" style={{ cursor: "pointer" }}>4</span>
          <div class="step-content">
            <span class="step-title h3 mt-1" style={{ cursor: "pointer" }}>Resumen del pedido</span>
          </div>
        </a>
      </li>

    </ul>
  </div>

  // <div className='steps-bar'>
  //   <div className='first-step-bar' onClick={() => {
  //     if (cartStep) setActiveStep(1)
  //   }}>
  //     <div className={activeStep === 1 ? 'div-transition active' : 'div-transition'} >1</div>
  //     <div className={activeStep === 1 ? 'div-transition active' : 'div-transition-text'} >Carrito de compra</div>
  //   </div>

  //   <div className="line"></div>

  //   <div className='second-step-bar' onClick={() => {
  //     if (deliveryStep) setActiveStep(2)
  //   }}>
  //     <div className={activeStep === 2 ? 'div-transition active' : 'div-transition'} >2</div>
  //     <div className={activeStep === 2 ? 'div-transition active' : 'div-transition-text'} >Detalles de entrega</div>
  //   </div>

  //   <div className="line"></div>

  //   <div className='third-step-bar' onClick={() => {
  //     if (paymentStep) setActiveStep(3)
  //   }}>
  //     <div className={activeStep === 3 ? 'div-transition active' : 'div-transition'} >3</div>
  //     <div className={activeStep === 3 ? 'div-transition active' : 'div-transition-text'} >Método de pago</div>
  //   </div>

  //   <div className="line"></div>

  //   <div className='fourth-step-bar' onClick={() => {
  //     if (purchaseStep) setActiveStep(4)
  //   }}>
  //     <div className={activeStep === 4 ? 'div-transition active' : 'div-transition'} >4</div>
  //     <div className={activeStep === 4 ? 'div-transition active' : 'div-transition-text'} >Resumen del pedido</div>
  //   </div>
  // </div>

);

export default Steps