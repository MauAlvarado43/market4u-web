import React from "react";
import "./HistoryStyle.css"
import { useQuery } from "seed/gql";


function HistoryView() {

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
  `, "id=" + userId);
  let info = qInfo.data

  let carts
  if (info.users) {
    carts = info
    console.log((carts.users[0].address))
  }
 
  let totals = []
  let total_purchase = 0
  if (carts) {
    carts.users[0].buyerCarts[0].shippings.forEach(shipment => {
    shipment.purchases.forEach(purchase => {
      total_purchase += (((JSON.parse(purchase.product)).price) * purchase.amount)
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
        {carts && (carts.users[0].buyerCarts[0].shippings).map((shipping, index) => (
          <div>
            <div className="history-shipping">
              <div className="history-shipping-purchases">
                {shipping.purchases.map((purchase) => (
                  <div className="purchase-products">
                    <div className="purchase-products-img-div">
                      <img
                        src={(JSON.parse(purchase.product)).url_img}
                        className="purchase-products-img"
                      />
                    </div>
                    <div className="purchase-products-info">
                      <h5>{(JSON.parse(purchase.product)).name}</h5>
                      $ {(JSON.parse(purchase.product)).price}
                      <br/>
                      Cantidad: {purchase.amount}
                    </div>
                  </div>
                ))}
              </div>

              <div className="history-shipping-order">
                <h3>Datos de la compra</h3>
                <table>
                  <tr>
                    <td style={{fontWeight:"bold"}}>Fecha: </td>
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
                    <td style={{fontWeight:"bold"}}>Folio: </td>
                    <td>{shipping.folio}</td>
                  </tr>
                  <tr>
                    <td style={{fontWeight:"bold"}}>Total: </td>
                    <td>$ {parseFloat(totals[index]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td style={{fontWeight:"bold"}}>Tarjeta: </td>
                    <td>**** **** **** {(carts.users[0].buyerCarts[0].payment.cardNumber).slice(12, 16)}</td>
                  </tr>
                </table>
              </div>

            

              <div className="history-shipping-shipment">
                <h3>Datos del envío</h3>
                <table>
                  <tr>
                    <td style={{fontWeight:"bold"}}>Dirección: </td>
                    <td>{carts && carts.users[0].address}</td>
                  </tr>
                  <tr>
                    <td style={{fontWeight:"bold"}}>Teléfono: </td>
                    <td>No existe el campo</td>
                  </tr>
                  <tr>
                    <td style={{fontWeight:"bold"}}>Correo: </td>
                    <td>{carts && carts.users[0].email}</td>
                  </tr>
                  <tr>
                    <td style={{fontWeight:"bold"}}>Detalles: </td>
                    <td>{shipping.info}</td>
                  </tr>
                </table>
              </div>

              <div className="history-shipping-buttons">
                
                <button style={{"--bg-color-shop": '#519EA4', "--bg-color-hover": '#6ad2d9', "--bg-color-active": '#366a6e'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                  Cancelar pedido
                </button>

                <button style={{"--bg-color-shop": '#fa6400', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                  </svg>
                  Escribir una opinión
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

HistoryView.propTypes = {};

export default HistoryView;