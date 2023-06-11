import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import Shipping from "components/history/Shipping";
import { ModalRoute } from "seed/helpers";
import Opinion from "components/history/Opinion";
import Cancel from "components/history/Cancel";
import { PaginationFooter } from "seed/helpers";

const HistoryView = ({
  shippings,
  pageNum,
  totalPages,
  onClickPage,
  selectedPriceFilter,
  handlePriceFilter,
  refetchQuery
}) => (

  <BrowserRouter baseName="/history">

    <div className="container" style={{ width: "100%" }}>
      <div class="d-flex justify-content-end" style={{ margin: "15px" }}>
        <div className="col-md-6">
          <h2>Historial de compras</h2>
        </div>
        <div class="d-flex justify-content-end col-md-5" style={{ margin: "15px" }}></div>
          <div class="dropdown">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ordenar por
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div class="dropdown-item" onClick={() => handlePriceFilter("all")}>
                Sin ordenar
              </div>
              <div class="dropdown-item" onClick={() => handlePriceFilter("highest")}>
                Mayor precio
              </div>
              <div class="dropdown-item" onClick={() => handlePriceFilter("lowest")}>
                Menor precio
              </div>
            </div>
          </div>
        </div>

      <div>
        {!shippings.id && (
          <div className="col-md-12 d-flex mt-2 justify-content-center align-items-center" 
            style={{ flexDirection: 'column' }}>
            <span className="h3">No hay registro de compras</span>
            <img
              style={{ height: "400px", width: "400px" }}
              src="https://img.freepik.com/vector-premium/producto-no-encontrado-ilustracion-plana_418302-105.jpg?w=2000"
              alt="No se encontraron productos"
            />
          </div>  
        )}
        {
          shippings.map((shipping) => (
            <Shipping shipping={shipping} />
          ))
        }

      </div>

      <PaginationFooter pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} />

    </div>

    <ModalRoute
      path="/history/:shippingId(\d+)/opinion"
      component={Opinion}
      width="800"
      height="700"
      style={{ position: "fixed", marginTop: "0", marginLeft: "0" }}
    />

    <ModalRoute
      path="/history/:shippingId(\d+)/cancel"
      component={Cancel}
      refetchQuery={refetchQuery}
      style={{ position: "fixed", marginTop: "0", marginLeft: "0" }}
    />

  </BrowserRouter>);

HistoryView.propTypes = {};

export default HistoryView;