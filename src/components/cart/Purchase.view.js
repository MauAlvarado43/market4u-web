import React from "react";
import PropTypes from "prop-types";
import { getStateName } from "components/utils/constants";

const PurchaseView = ({ data, products, setActiveStep }) => (
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
            <td style={{ width: "50%" }}><b>{data?.delivery?.street}</b></td>
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
                      {data.payment.bank == "BBVA" || data.payment.bank == "BBVA Bancomer" ? (
                        <img
                          className="img-fluid rounded-circle d-flex"
                          src="https://i.pinimg.com/736x/17/cc/2b/17cc2bfef684a477c172130b0731b943.jpg"
                          alt="BBVA"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ) : data.payment.bank == "Banamex" || data.payment.bank == "Citibanamex" ? (
                        <img
                          className="img-fluid rounded-circle d-flex"
                          src="https://banamex.com/assets/img/home/citibanamexLogo.jpg"
                          alt="Banamex"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ) : data.payment.bank == "HSBC" ? (
                        <img
                          className="img-fluid rounded-circle"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/HSBC_logo.svg/1200px-HSBC_logo.svg.png"
                          alt="HSBC"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ) : data.payment.bank == "Santander" ? (
                        <img
                          className="img-fluid rounded-circle"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Santander_logo.svg/1200px-Santander_logo.svg.png"
                          alt="Santander"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ) : null}
                    </div>
                    <div className="col-md-7 d-flex flex-column">
                      <div>Terminada en {data.payment?.cardNumber.slice(-4)}</div>
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

    </div>

    <div className="col-md-1"></div>

    <div className="col-md-5 text-left p-4" style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>

      <div>
        <h1>Resumen de {data?.products.length} productos</h1>
        <hr style={{ border: "1px solid black" }} />
      </div>


    </div>

  </div>
)

PurchaseView.propTypes = {};

export default PurchaseView;