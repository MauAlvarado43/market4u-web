import React from "react";
import "./HistoryStyle.css"
import { useQuery } from "seed/gql";


function HistoryView() {

  // const userId = sessionStorage.getItem("id");
  const userId = 1;

  const qCarts = useQuery(`
  {
    carts {
      shippings {
        address
        createdAt
        purchases {
          createdAt
          amount
          product
        }
        folio
      }
      payment {
        cardNumber
        id
        createdAt
      }
    }
  }
  `, "buyer.id=" + userId);
  const {carts = [] } = qCarts.data;

  const qUser = useQuery(`
  {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
      address
      active
      type
      photo {
        id
      }
      company {
        id
      }
    }
  }
  `, "user.id=" + userId);
  const {user = [] } = qUser.data;
  console.log(user)

  function toJSON(str) {
    return JSON.parse(str)
  }

  let totals = []
  let total_purchase = 0
  if (carts[0]) {
   carts[0].shippings.forEach(shipment => {
    shipment.purchases.forEach(purchase => {
      total_purchase += ((toJSON(purchase.product).price) * purchase.amount)
    });
    totals.push(total_purchase)
    total_purchase = 0
   });
  }


  return (
    <div className="history-container">

      <div className="history-title">
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
          </svg>
        </h1>
        <h1>
          Mis compras
        </h1>
      </div>

      <div className="history-search">
        Buscar
      </div>

      <div className="history-filter">
        Filtrar
      </div>

      <div className="history-cart">
        
        {carts.map((cart) => (
          <div>   {/* {cart.payment.cardNumber} */}
            {cart.shippings.map((shipping, index) => (
              <div className="history-shipping">
                <div className="history-shipping-purchases">
                  {shipping.purchases.map((purchase) => (
                    <div className="purchase-products">
                      <div className="purchase-products-img-div">
                        <img
                          src={toJSON(purchase.product).url_img}
                          className="purchase-products-img"
                        />
                      </div>
                      <div className="purchase-products-info">
                        <h5>{toJSON(purchase.product).name}</h5>
                        $ {toJSON(purchase.product).price}
                        <br/>
                        Cantidad: {purchase.amount}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="history-shipping-order">
                  <h3>Datos de la compra</h3>
                  <table class="default">
                    <tr>
                      <td>Fecha</td>
                      <td>
                        {
                          (() => {
                            let date = new Date((shipping.createdAt).slice(0, 10));
                            let formattedDate = date.toLocaleDateString();
                            return <span>{formattedDate}</span>;
                          })()
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Folio</td>
                      <td>{shipping.folio}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$ {parseFloat(totals[index]).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Tarjeta</td>
                      <td>{cart.payment.cardNumber}</td>
                    </tr>
                  </table>
                </div>

                <div className="history-shipping-shipment">
                  <h3>Datos del envío</h3>

                </div>

                <div className="history-shipping-buttons">
                  <button className="buttonShopping" style={{"--bg-color-shop": '#519EA4', "--bg-color-hover": '#6ad2d9', "--bg-color-active": '#366a6e'}}>Cancelar pedido</button>
                  <button className="buttonShopping" style={{"--bg-color-shop": '#fa6400', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Escribir una opinión</button>
                </div>
              </div>

            ))}
          </div>
        ))}</div>

        {/* // <div className="history-shipping">

        //   <div className="history-shipping-products">
            
        //   </div>

        //   <div className="history-shipping-order">Orden</div>
        //   <div className="history-shipping-shipment">Envío</div>

        //   <div className="history-shipping-buttons">
            
        //   </div>

        // </div> */}
        

    </div>
  );
}

HistoryView.propTypes = {};

export default HistoryView;