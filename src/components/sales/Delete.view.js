import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const SaleDeleteView = ({ onClickDelete = () => null, onClose = () => null }) =>
    <div class="card card-body">
        <div className="row mt-2">
            <div className="col-md-12 text-center">
                <h2>¿Desea eliminar la oferta?</h2>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-md-12 text-center">
                <p className="h4">
                    Si elige eliminar, los datos se borrarán de forma permanente
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
                        <i className="fas fa-times mr-3 fa-lg"></i> 
                        Cancelar
                    </button>

                    <button
                        type="button"
                        onClick={onClickDelete}
                        className="btn btn-primary btn-sm rounded-pill px-4 ml-5"
                    >
                        <i className="fas fa-check mr-3 fa-lg"></i> 
                        Eliminar
                    </button>

                </div>

            </div>
        </div>
    </div>;


SaleDeleteView.propTypes = { // Establece el tipo de dato de las propiedades
};
export default SaleDeleteView;