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
  <>
    <div className="p-5 mt-1">
      <div className="d-flex justify-content-center">
        <Steps
          cartStep={cartStep}
          deliveryStep={deliveryStep}
          paymentStep={paymentStep}
          purchaseStep={purchaseStep}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div style={{ width: "90%" }}>

            <div style={{ display: activeStep == 1 ? "block" : "none" }}>
              <Cart
                setData={setData}
                products={products}
                setProducts={setProducts}
                setActiveStep={setActiveStep}
                setDeliveryStep={setDeliveryStep}
              />
            </div>

            <div style={{ display: activeStep == 2 ? "block" : "none" }}>
              <Delivery
                user={user}
                setData={setData}
                products={products}
                setActiveStep={setActiveStep}
                setPaymentStep={setPaymentStep}
              />
            </div>
          
            <div style={{ display: activeStep == 3 ? "block" : "none" }}>
              <Payment
                user={user}
                setData={setData}
                products={products}
                setActiveStep={setActiveStep}
                setPurchaseStep={setPurchaseStep}
              />
            </div>

            <div style={{ display: activeStep == 4 ? "block" : "none" }}>
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

    </div>
  </>
)

MainView.propTypes = {};

export default MainView;