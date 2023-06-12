import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getStateName } from "components/utils/constants";
import { getLongFotmatDate } from "components/utils/dates";

const getStatus = (status) => {

  if (status == "CREATED") {
    return <span class="badge badge-warning p-2">Pendiente de enviar</span>;
  }

  if (status == "SENT") {
    return <span class="badge badge-info p-2">Enviado</span>;
  }

  if (status == "COMPLETED") {
    return <span class="badge badge-success p-2">Entregado</span>;
  }

  if (status == "CANCELED") {
    return <span class="badge badge-danger p-2">Cancelado</span>;
  }

}

const getProductPrice = (product) => {
  const sale = product?.sale ?? null;
  const price = product?.variant?.price;
  if (sale) {
    const disscount = sale.disscount;
    const newPrice = price * (disscount / 100);
    return (
      <span className="ml-2 h4 text-dark">
        <span className="text-danger">-{disscount}%  ${newPrice}</span><br/>
        <span className="ml-2 text-muted">
          <small style={{ textDecoration: "line-through" }}>${price}</small>
        </span>
      </span>
    )

  }
  return (<span className="ml-2 h4 text-dark">${price.toFixed(2)}</span>)
}

const ShippingView = ({ shipping, purchases }) => (
  <div className="row border border-dark mb-5 p-3" style={{ borderRadius: "10px" }}>

    <div className="col-md-4" style={{ maxHeight: "90vh", overflowY: "auto", overflowX: "hidden" }}>
      {
        purchases.map((purchase, idx) => (
          <div key={idx} className="row my-5" style={{paddingRight: "5px" }}>

            <div className="col-md-4">
              {
                purchase.variant.photos.length > 0 ? (
                  <img className="img-fluid" style={{ maxHeight: "10rem" }} src={purchase.variant.photos[0].url} alt="Variant image" />
                ) : (
                  <i className="fas fa-image fa-10x text-muted"></i>
                )
              }
            </div>

            <div className="col-md-8" style={{padding: "2px"}}>
              <h3>{purchase?.product?.name}</h3>
              <h6>SKU: {purchase?.product?.sku}</h6>
              <h6>Categoría: {purchase?.category?.name}</h6>
              <h6>Cantidad: {purchase?.amount}</h6>
              <div className="row mt-3">
                <div className="col-md-7">
                  {
                    purchase?.variantOption.map((variantOption) => (
                      <>
                        <span><b>{variantOption.title}:</b> {variantOption["value"]}</span>
                        <br />
                      </>
                    ))
                  }
                </div>
                <div className="col-md-5 text-right" style={{ paddingRight: "10px" }}>
                  {getProductPrice(purchase)}
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
      <div className="mb-4">
        <Link to={`/history/${shipping.id}/cancel`} className="btn btn-secondary mb-3 w-100"
          style={{
            pointerEvents: shipping.status == "CREATED" ? '' : 'none',
            opacity: shipping.status == "CREATED" ? 1 : 0.5
          }}
        >
          <i className="fas fa-times mr-2"></i>Cancelar pedido
        </Link>
        <Link to={`/history/${shipping.id}/opinion`} className="btn btn-primary w-100"
          style={{
            pointerEvents: shipping.status == "CREATED" ? '' : 'none',
            opacity: shipping.status == "CREATED" ? 1 : 0.5
          }}
        >
          <i className="fas fa-pen mr-2"></i>Escribir opinión
        </Link>
      </div>
      <h2 className="text-center mt-4">{getStatus(shipping.status)}</h2>
    </div>

  </div>
);

ShippingView.propTypes = {};

export default ShippingView;