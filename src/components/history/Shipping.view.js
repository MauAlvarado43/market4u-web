import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getStateName } from "components/utils/constants";
import { getLongFotmatDate } from "components/utils/dates";


const ShippingView = ({ shipping, purchases }) => (
  <div className="row border border-dark mb-5 p-3" style={{ borderRadius: "10px" }}>

    <div className="col-md-4">
      {
        purchases.map((purchase, idx) => (
          <div key={idx} className="row my-5">

            <div className="col-md-4">
              {
                purchase.variant.photos.length > 0 ? (
                  <img className="img-fluid" style={{ maxHeight: "10rem" }} src={purchase.variant.photos[0].url} alt="Variant image" />
                ) : (
                  <i className="fas fa-image fa-10x text-muted"></i>
                )
              }
              <div class="d-flex justify-content-center align-items-center"
                style={{ backgroundColor: "#519EA4", borderRadius: "50%", width: "40px", height: "40px", color: "white", position: "absolute", bottom: "0", right: "0" }}>
                <p style={{ paddingTop: "15px" }}>{purchase?.amount}</p>
              </div>
            </div>

            <div className="col-md-8">
              <h3>{purchase?.product?.name}</h3>
              <h6>SKU: {purchase?.product?.sku}</h6>
              <h6>Categoría: {purchase?.category?.name}</h6>
              <div className="row mt-3">
                <div className="col-md-4">

                </div>
                <div className="col-md-8 text-right">
                  <h3><b>$ {purchase?.variant?.price.toFixed(2)}</b></h3>
                </div>
              </div>
            </div>

          </div>
        ))
      }
    </div>

    <div className="col-md-3">
      <div className="p-3" style={{ backgroundColor: "#DEDEDE", borderRadius: "10px" }}>
        <h2 className="text-center">Datos de la compra</h2>
        <table className="table">
          <tr>
            <td>Fecha</td>
            <td>{getLongFotmatDate(new Date(shipping.createdAt))}</td>
          </tr>
          <tr>
            <td>Folio</td>
            <td>{shipping.folio}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${shipping.total}</td>
          </tr>
          <tr>
            <td>Tarjeta</td>
            <td>{
              function () {
                const payment = JSON.parse(shipping.cart.payment);
                return `**** **** **** ${payment.cardNumber.slice(-4)}`
              }()
            }</td>
          </tr>
        </table>
      </div>
    </div>

    <div className="col-md-3">
      <div className="p-3" style={{ backgroundColor: "#DEDEDE", borderRadius: "10px" }}>
        <h2 className="text-center">Datos del envío</h2>
        <table className="table">
          <tr>
            <td>Dirección</td>
            <td className="text-break">{
              function () {
                try {
                  const address = JSON.parse(shipping.address);
                  return `${address.street} col. ${address.cologn} C.P. ${address.cp}, ${address.city}, ${getStateName(address.state)}`
                } catch (error) {
                  return "-";
                }
              }()
            }</td>
          </tr>
          <tr>
            <td>Telefóno</td>
            <td className="text-break">{
              function () {
                try {
                  const address = JSON.parse(shipping.address);
                  return `${address.telephone}`
                } catch (error) {
                  return "-";
                }
              }()
            }</td>
          </tr>
          <tr>
            <td>Correo</td>
            <td className="text-break">{
              function () {
                try {
                  const address = JSON.parse(shipping.address);
                  return `${address.email}`
                } catch (error) {
                  return "-";
                }
              }()
            }</td>
          </tr>
          <tr>
            <td>Detalles</td>
            <td className="text-break">{shipping?.info ?? "Sin información de rastreo"}</td>
          </tr>
        </table>
      </div>
    </div>

    <div className="col-md-2 mt-5">
      <button type="button" className="btn btn-secondary mb-3">
        <i className="fas fa-times mr-2"></i>Cancelar pedido
      </button>
      <Link to={`/${shipping.id}/opinion`} className="btn btn-primary">
        <i className="fas fa-pen mr-2"></i>Escribir opinión
      </Link>
    </div>

  </div>
);

ShippingView.propTypes = {};

export default ShippingView;