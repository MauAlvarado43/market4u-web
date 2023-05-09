import React, { useState  } from "react";
import Steps from "./steps";
import CarritoCompras from "./CarritoCompras";
import DetallesEntrega from "./DetallesEntrega";
import MetodoPago from "./MetodoPago";
import ResumenPedido from "./ResumenPedido";
import "./CartStyle.css"
import { useQuery } from "seed/gql";
import PropTypes from "prop-types";

const CartView = () =>{
  
  let [activeDiv, setActiveDiv] = useState(1);

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
    console.log((cart.users[0].address))
  } else {
    return "Loading"
  }

  
  return (
    <div className="cart-content">
      <div id="step-bar">
        <Steps
          state={activeDiv}
        />
      </div>

      <div className="steps-content">

        <div className={activeDiv === 1 ? 'step-div active' : 'step-div'}>
          <CarritoCompras
            cart = {cart.users[0].buyerCarts[0]}
            state= {activeDiv}
          />
          {}
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