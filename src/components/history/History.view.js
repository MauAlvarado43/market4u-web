import React from "react";
import "./HistoryStyle.css"

import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

function HistoryView() {
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

      <div className="history-shipping">
        <div className="history-shipping-products">Productos</div>
        <div className="history-shipping-order">Orden</div>
        <div className="history-shipping-shipment">Envío</div>

        <div className="history-shipping-buttons">
          <button className="buttonShopping" style={{"--bg-color-shop": '#519EA4', "--bg-color-hover": '#6ad2d9', "--bg-color-active": '#366a6e'}}>Cancelar pedido</button>
          <button className="buttonShopping" style={{"--bg-color-shop": '#fa6400', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Escribir una opinión</button>
        </div>

      </div>
    </div>
  );
}

HistoryView.propTypes = {};

export default HistoryView;