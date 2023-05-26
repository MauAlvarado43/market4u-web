import React from "react";
import PropTypes from "prop-types";
import { getStateName } from "components/utils/constants";

const getTotal = (products) => {
  let total = 0;
  for (let product of products) {
    total += (product?.variant?.price * product?.amount)
  }
  return total;
}


const PurchaseView = ({ data, products, setActiveStep, onSubmit }) => (
  <div className="row">

    <div className="col-md-6 text-left p-4" style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>

      <div>
        <h1>Resumen del pedido</h1>
        <hr style={{ border: "1px solid black" }} />
      </div>

      <div>
        <div className="d-flex justify-content-between">
          <h3>Contacto</h3>
          <h3 style={{ color: "#519EA4", cursor: "pointer" }} onClick={() => setActiveStep(2)}>Editar</h3>
        </div>
        <table>
          <tr>
            <td style={{ width: "50%" }}>Correo electrónico: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.email}</b></td>
          </tr>
          <tr>
            <td style={{ width: "50%" }}>Teléfono: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.telephone}</b></td>
          </tr>
        </table>
        <hr style={{ border: "1px solid black" }} />
      </div>

      <div>
        <div className="d-flex justify-content-between">
          <h3>Dirección de entrega</h3>
          <h3 style={{ color: "#519EA4", cursor: "pointer" }} onClick={() => setActiveStep(2)}>Editar</h3>
        </div>
        <table>
          <tr>
            <td style={{ width: "50%" }}>Estado: </td>
            <td style={{ width: "50%" }}><b>{getStateName(data?.delivery?.state ?? "")}</b></td>
          </tr>
          <tr>
            <td style={{ width: "50%" }}>Ciudad: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.city ?? ""}</b></td>
          </tr>
          <tr>
            <td style={{ width: "50%" }}>Colonia: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.cologn ?? ""}</b></td>
          </tr>
          <tr>
            <td style={{ width: "50%" }}>Código postal: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.cp ?? ""}</b></td>
          </tr>
          <tr>
            <td style={{ width: "50%" }}>Calle y número: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.street ?? ""}</b></td>
          </tr>
        </table>
        <hr style={{ border: "1px solid black" }} />
      </div>

      <div>
        <div className="d-flex justify-content-between">
          <h3>Método de pago</h3>
          <h3 style={{ color: "#519EA4", cursor: "pointer" }} onClick={() => setActiveStep(3)}>Editar</h3>
        </div>

        <div className="row mt-3">
          <div className="col-md-12 mx-auto">
            <div className="card d-flex border-0 bg-transparent shadow-none">

              {
                data.payment ? (
                  <div className="row">
                    <div className="col-md-2 justify-content-center align-items-center">
                      {
                        function () {
                          const bank = data.payment?.bank ?? "";
                          if (bank == "BBVA" || bank == "BBVA Bancomer") {
                            return <img
                              className="img-fluid rounded-circle d-flex"
                              src="https://i.pinimg.com/736x/17/cc/2b/17cc2bfef684a477c172130b0731b943.jpg"
                              alt="BBVA"
                              style={{ width: "60px", height: "60px" }}
                            />
                          } else if (bank == "Banamex" || bank == "Citibanamex") {
                            <img
                              className="img-fluid rounded-circle d-flex"
                              src="https://banamex.com/assets/img/home/citibanamexLogo.jpg"
                              alt="Banamex"
                              style={{ width: "60px", height: "60px" }}
                            />
                          } else if (bank == "HSBC") {
                            <img
                              className="img-fluid rounded-circle"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/HSBC_logo.svg/1200px-HSBC_logo.svg.png"
                              alt="HSBC"
                              style={{ width: "60px", height: "60px" }}
                            />
                          } else if (bank == "Santander") {
                            <img
                              className="img-fluid rounded-circle"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Santander_logo.svg/1200px-Santander_logo.svg.png"
                              alt="Santander"
                              style={{ width: "60px", height: "60px" }}
                            />
                          } else {
                            return <></>
                          }
                        }()
                      }
                    </div>
                    <div className="col-md-7 d-flex flex-column">
                      <div>Terminada en {data.payment?.cardNumber ? data.payment.cardNumber.slice(-4) : "XXXX"}</div>
                      <div>Banco {data.payment?.bank}</div>
                      <div>Vencimiento {data.payment?.expireDate}</div>
                    </div>
                  </div>
                ) : (
                  <h5>No has agregado un método de pago</h5>
                )
              }
              <hr />
            </div>
          </div>
        </div>

      </div>

      <div className="mt-3 text-center">
        <button type="button" className="btn btn-sm rounded-pill" style={{ backgroundColor: "#519EA4", color: "white", fontSize: "20px" }}
          onClick={onSubmit}
        >
          <i class="fas fa-clipboard-list" style={{ marginRight: "10px" }}></i> Realizar pedido
        </button>
      </div>

    </div>

    <div className="col-md-1"></div>

    <div className="col-md-5 text-left p-4" style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>

      <div className="d-flex justify-content-between">
        <h1>Resumen de {data.products ? data.products.length : "0"} productos</h1>
        <h3 style={{ color: "#519EA4", cursor: "pointer" }} onClick={() => setActiveStep(1)}>Editar</h3>
      </div>

      <hr style={{ border: "1px solid black" }} />

      <div style={{ maxHeight: "500px", overflowY: "scroll", overflowX: "hidden" }}>
        {
          data.products ? data.products.map((product, idx) => (
            <div className="row my-5" key={idx}>

              <div className="col-md-3">
                {
                  function () {
                    const variant = product.variant;
                    if (variant.photos.length > 0) {
                      return (
                        <img className="img-fluid" style={{ maxHeight: "10rem" }} src={variant.photos[0].url} alt="Variant image" />
                      )
                    } else {
                      return (
                        <i className="fas fa-image fa-10x text-muted"></i>
                      )
                    }
                  }()
                }
                <div class="d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#519EA4", borderRadius: "50%", width: "40px", height: "40px", color: "white", position: "absolute", bottom: "0", right: "0" }}>
                  <p style={{ paddingTop: "15px" }}>{product?.amount}</p>
                </div>
              </div>

              <div className="col-md-6">
                <h3>{product?.name}</h3>
                <h6>SKU: {product?.sku}</h6>
                <h6>{product?.category?.name}</h6>
              </div>

              <div className="col-md-3">
                <h3><b>${product?.variant?.price.toFixed(2)}</b></h3>
              </div>

            </div>
          )) : (<h4>No tiene productos en su carrito</h4>)
        }
      </div>

      <hr style={{ border: "1px solid black" }} />

      <div className="text-left">

        <table style={{ width: "100%" }}>
          <tr >
            <td><h3>Subtotal:</h3></td>
            <td><h3>$ {getTotal(data.products || []).toFixed(2)}</h3></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <ul>
                {
                  data.products && data.products.map((product) => (
                    <li key={product.id}>
                      {product?.amount} x {product?.sku} = {(product?.amount * product?.variant?.price).toFixed(2)}
                    </li>
                  ))
                }
              </ul>
            </td>
          </tr>
          <tr>
            <td><h3>Envío:</h3></td>
            <td><h3>$ {
              function () {
                let total = 0;
                const products = data.products || [];
                for (let product of products) {
                  total += product?.variant?.shipment
                }
                return total.toFixed(2);
              }()
            }</h3></td>
          </tr>
          <tr>
            <td><h3>Total a pagar:</h3></td>
            <td><h3>$ {
              function () {
                let totalShipment = 0;
                let total = getTotal(data.products || []);
                const products = data.products || [];
                for (let product of products) {
                  totalShipment += product?.variant?.shipment
                }
                total += totalShipment;
                return total.toFixed(2);
              }()
            }</h3></td>
          </tr>
        </table>

      </div>

    </div>

  </div>
)

PurchaseView.propTypes = {};

export default PurchaseView;