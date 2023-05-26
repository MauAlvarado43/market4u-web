import React from "react";
import PropTypes from "prop-types";
import Steps from "components/cart/StepsBar";
import Cart from "components/cart/Cart"
import Delivery from "components/cart/Delivery";
import Payment from "components/cart/Payment";
import Purchase from "components/cart/Purchase";
import "./CartStyle.css"


const MainView = ({
  user,
  data,
  setData,
  products,
  setProducts,
  activeStep,
  setActiveStep,
  cartStep,
  deliveryStep,
  paymentStep,
  purchaseStep,
  setCartStep,
  setDeliveryStep,
  setPaymentStep,
  setPurchaseStep,
}) => (

  <div className="p-5">
    <div>
      <Steps
        cartStep={cartStep}
        deliveryStep={deliveryStep}
        paymentStep={paymentStep}
        purchaseStep={purchaseStep}
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
          setDeliveryStep={setDeliveryStep}
        />
      </div>

      <div className={activeStep === 2 ? 'step-div active' : 'step-div'}>
        <Delivery
          user={user}
          setData={setData}
          products={products}
          setActiveStep={setActiveStep}
          setPaymentStep={setPaymentStep}
        />
      </div>

      <div className={activeStep === 3 ? 'step-div active' : 'step-div'}>
        <Payment
          user={user}
          setData={setData}
          products={products}
          setActiveStep={setActiveStep}
          setPurchaseStep={setPurchaseStep}
        />
      </div>

      <div className={activeStep === 4 ? 'step-div active' : 'step-div'}>
        <Purchase
          user={user}
          data={data}
          setData={setData}
          products={products}
          setActiveStep={setActiveStep}
        />
      </div>

    </div>

  </div>

)

MainView.propTypes = {};

export default MainView;