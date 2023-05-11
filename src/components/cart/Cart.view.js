import React, { useState, useEffect} from "react";
import Steps from "./steps";
import CarritoCompras from "./step1CarritoCompras";
import DetallesEntrega from "./step2DetallesEntrega";
import MetodoPago from "./step3MetodoPago";
import ResumenPedido from "./step4ResumenPedido";
import "./CartStyle.css"
import { useQuery } from "seed/gql";
import PropTypes from "prop-types";

const CartView = () =>{
  
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  const userId = sessionStorage.getItem("id");

  const qInfo = useQuery(`
  {
    users {
      id
      firstName
      lastName
      username
      email
      payments {
        cardNumber
      }
      address
      buyerCarts {
        id
        createdAt
        payment {
          id
          cardNumber
          type
        }
        shippings {
          createdAt
          info
          folio
          address
          status
          purchases {
            id
            createdAt
            amount
            sale
            product
          }
        }
      }
    }
  }
  `, `id=${userId} AND buyerCarts.shippings.status=CREATED`);
  let info = qInfo.data
  let cart

  if (info.users) {
    cart = info
    // console.log((cart.users[0].address))
  } else {
    return "Loading"
  }

  
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
            cart = {cart.users[0].buyerCarts[0]}
            activeDiv= {activeDiv}
            setActiveDiv={setActiveDiv}
          />}
        </div>

        <div className={activeDiv === 2 ? 'step-div active' : 'step-div'}>
          <DetallesEntrega
            cart = {cart.users[0].buyerCarts[0]}
            activeDiv= {activeDiv}
            setActiveDiv={setActiveDiv}
          />
        </div>

        <div className={activeDiv === 3 ? 'step-div active' : 'step-div'}>
          <MetodoPago
            cart = {cart.users[0].buyerCarts[0]}
            activeDiv= {activeDiv}
            setActiveDiv={setActiveDiv}
          />
        </div>

        <div className={activeDiv === 4 ? 'step-div active' : 'step-div'}>
          <ResumenPedido
            cart = {cart.users[0].buyerCarts[0]}
            activeDiv= {activeDiv}
            setActiveDiv={setActiveDiv}
          />
        </div>

      </div>    

    </div>
  
  );}

CartView.propTypes = {};

export default CartView;