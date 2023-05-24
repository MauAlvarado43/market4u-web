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
            <td style={{ width: "50%" }}><b>{getStateName(data?.delivery?.state??"")}</b></td>
          </tr>
          <tr>
            <td style={{ width: "50%" }}>Ciudad: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.city??""}</b></td>
          </tr>
          <tr>
            <td style={{ width: "50%" }}>Colonia: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.cologn??""}</b></td>
          </tr>
          <tr>
            <td style={{ width: "50%" }}>Código postal: </td>
            <td style={{ width: "50%" }}><b>{data?.delivery?.cp??""}</b></td>
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

      </div>

    </div>

    <div className="col-md-1"></div>

    <div className="col-md-5">

    </div>

  </div>
)

PurchaseView.propTypes = {};

export default PurchaseView;