import React from "react";
import "./finalizarcompra.css"


function FinalizarCompra() {
  return (

    <div id="checkoutStep" className="icheckoutStep__wrapper">
      <div className="checkoutStep__container">
        <img
          className="checkoutStep__img-chekout"
          src="https://htmlstream.com/front-dashboard/assets/svg/illustrations/oc-hi-five.svg"
          alt="Image Description"
          data-hs-theme-appearance="default"
          style={{ maxWidth: '15rem' }}
        />

        <div className="checkoutStep__content">
          <h2>Su pago fue exitoso!</h2>
          <p>Orden #72712</p>
          <p>Recibirás un correo de confirmación.</p>
        </div>

        <a className="checkoutStep__btn" href="./ecommerce.html">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ fontSize: '1.35rem' }}
          > </i>
             Continua comprando
        </a>
      </div>
    </div>


  );
}

FinalizarCompra.propTypes = {};
export default FinalizarCompra;



