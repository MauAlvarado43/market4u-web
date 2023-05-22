import React, { useState, useEffect, createContext } from "react";
import Steps from "./StepsBar";
import CarritoCompras from "./Step1-CarritoCompras";
import DetallesEntrega from "./Step2-DetallesEntrega";
import MetodoPago from "./Step3-MetodoPago";
import ResumenPedido from "./Step4-ResumenPedido";
import "./CartStyle.css"
import PropTypes from "prop-types";


const CartView = (props) =>{

  const { cart } = props
  
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  let shipments = cart.users[0].buyerCarts[0].shippings.filter(shipment => shipment.status === "CREATED");

  const [finalAmount, setFinalAmount] = useState(((shipments[0].purchases).reduce((acc, curr) => acc + (curr.amount), 0)))

  const [totalCost, setTotalCost] = useState(((shipments[0].purchases).reduce((acc, curr) => acc + ((JSON.parse(curr.product)).price * curr.amount), 0)))

  const [prodAmounts, setProdAmounts] = useState(shipments[0].purchases.map((purchase) => purchase.amount));
  
  
  return (
      
    <div className="cart-content">
      <div className="step-bar-try">
        <Steps
          activeDiv= {activeDiv}
          setActiveDiv={setActiveDiv}
        />
      </div>

      <div className="steps-content">

        <div className={activeDiv === 1 ? 'step-div active' : 'step-div'}>
          {<CarritoCompras
            cart = {cart}
            shipments = {shipments}
            activeDiv= {activeDiv}
            setActiveDiv={setActiveDiv}
            finalAmount={finalAmount}
            setFinalAmount={setFinalAmount}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            prodAmounts={prodAmounts}
            setProdAmounts={setProdAmounts}
          />}
        </div>

        <div className={activeDiv === 2 ? 'step-div active' : 'step-div'}>
          <DetallesEntrega
            cart = {cart}
            shipments = {shipments}
            activeDiv= {activeDiv}
            setActiveDiv={setActiveDiv}
            finalAmount={finalAmount}
            setFinalAmount={setFinalAmount}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
          />
        </div>

        <div className={activeDiv === 3 ? 'step-div active' : 'step-div'}>
          <MetodoPago
            cart = {cart}
            shipments = {shipments}
            activeDiv= {activeDiv}
            setActiveDiv={setActiveDiv}
            finalAmount={finalAmount}
            setFinalAmount={setFinalAmount}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            prodAmounts={prodAmounts}
          />
        </div>

        <div className={activeDiv === 4 ? 'step-div active' : 'step-div'}>
          <ResumenPedido
            cart = {cart}
            shipments = {shipments}
            activeDiv= {activeDiv}
            setActiveDiv={setActiveDiv}
            finalAmount={finalAmount}
            setFinalAmount={setFinalAmount}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            prodAmounts={prodAmounts}
          />
        </div>

      </div>    

    </div>
  
  );}

CartView.propTypes = {};

export default CartView;