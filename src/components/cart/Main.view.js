import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import Steps from "components/cart/StepsBar";
import Cart from "components/cart/Cart"
import Delivery from "components/cart/Delivery";
import Payment from "components/cart/Payment";

// import CarritoCompras from "./Step1-CarritoCompras";
// import DetallesEntrega from "./Step2-DetallesEntrega";
// import MetodoPago from "./Step3-MetodoPago";
// import ResumenPedido from "./Step4-ResumenPedido";
import "./CartStyle.css"


const MainView = ({ user, setData, products, setProducts, activeStep, setActiveStep }) => (

  <div className="cart-content">
    <div className="step-bar-try">
      <Steps
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>

    <div className="steps-content">

      <div className={activeStep === 1 ? 'step-div active' : 'step-div'}>
        <Cart
          setData={setData}
          products={products}
          setProducts={setProducts}
          setActiveStep={setActiveStep}
        />
      </div>

      <div className={activeStep === 2 ? 'step-div active' : 'step-div'}>
        <Delivery
          user={user}
          setData={setData}
          products={products}
          setActiveStep={setActiveStep}
        />
      </div>

      <div className={activeStep === 3 ? 'step-div active' : 'step-div'}>
        <Payment
          user={user}
          setData={setData}
          products={products}
          setActiveStep={setActiveStep}
        />
      </div>

      {/* <div className={activeDiv === 1 ? 'step-div active' : 'step-div'}>
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
        </div> */}

    </div>

  </div>

)

MainView.propTypes = {};

export default MainView;