import React from "react";
import PropTypes from "prop-types";

const CancelView = ({ onClickCancel = () => null, onClose = () => null }) =>
  <div class="card card-body">
    <div className="row mt-2">
      <div className="col-md-12 text-center">
        <h2>¿Desea cancelar el pedido?</h2>
      </div>
    </div>
    <div className="row my-2">
      <div className="col-md-12 text-center">
        <p className="h4">
          Esta acción no se puede deshacer. Una vez hayamos confirmado la devolución del producto, te contactaremos para la devolución de tu dinero
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex justify-content-center align-items-center pt-2">

          <button
            type="button"
            className="btn btn-secondary btn-sm rounded-pill px-4 mr-5"
            onClick={onClose}
          >
            <i className="fas fa-times mr-3 fa-lg"></i> Regresar
          </button>

          <button
            type="button"
            onClick={onClickCancel}
            className="btn btn-primary btn-sm rounded-pill px-4 ml-5"
          >
            <i className="fas fa-check mr-3 fa-lg"></i> Cancelar
          </button>

        </div>

      </div>
    </div>
  </div>;

CancelView.propTypes = {};

export default CancelView;