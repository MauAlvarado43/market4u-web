import React, { useState  } from "react";
import Steps from "./steps";
import CarritoCompras from "./CarritoCompras";
import DetallesEntrega from "./DetallesEntrega";
import MetodoPago from "./MetodoPago";
import ResumenPedido from "./ResumenPedido";
import "./CartStyle.css"
import PropTypes from "prop-types";

const CartView = () =>{
  
  let [activeDiv, setActiveDiv] = useState(3);

  
  return (
    <div className="cart-content">
      <div id="step-bar">
        <Steps
          state={activeDiv}
        />
      </div>

      <div className="steps-content">

        <div className={activeDiv === 1 ? 'step-div active' : 'step-div'}>
          <CarritoCompras></CarritoCompras>
        </div>

        <div className={activeDiv === 2 ? 'step-div active' : 'step-div'}>
          <DetallesEntrega></DetallesEntrega>
        </div>

        <div className={activeDiv === 3 ? 'step-div active' : 'step-div'}>
          <MetodoPago></MetodoPago>
        </div>

        <div className={activeDiv === 4 ? 'step-div active' : 'step-div'}>
          <ResumenPedido></ResumenPedido>
        </div>

      </div>    

    </div>
  
  );}

CartView.propTypes = {};

export default CartView;