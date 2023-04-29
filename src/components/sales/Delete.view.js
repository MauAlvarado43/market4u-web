import React from "react";

import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const SaleDeleteView = ({onClickDelete}) => (
    // Ventana de confirmacion del superusuario para eliminar
    <div className="css-sales">
        <div class="modal fade show window-always-visible" id="deleteWindow" tabindex="-1" aria-labelledby="deleteWindowLabel" aria-hidden="true"> {/* ventana-emergente transicion visible */}
            <div class="modal-dialog modal-dialog-centered modal-sm"> {/* ventana-emergente centrado tamaño */}
                <div class="modal-content"> {/* contenido de la ventana */}
                    <div class="modal-body text-center"> {/* contenido-ventana alineacion-centro */}
                        <h2>¿Desea eliminar la oferta?</h2>
                        <p>Si elige eliminar, los datos se borrarán de forma permanente</p>
                    </div>
                    <div class="modal-footer align-self-center p-4 window-buttons"> {/* pie-ventana-emergente alineacion-central */}
                        <Link to={""}>
                            <button type="button" class="btn btn-warning orange-button mr-4"> {/* boton estilo-boton */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                Cancelar
                            </button>
                        </Link>
                        <button type="button" class="btn btn-primary light-blue-button ml-4" onClick={onClickDelete}> {/* boton estilo-boton */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

SaleDeleteView.propTypes = { // Establece el tipo de dato de las propiedades
};

export default SaleDeleteView;