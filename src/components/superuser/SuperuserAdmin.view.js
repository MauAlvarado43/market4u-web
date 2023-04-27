import React from "react";

import "./superuserStyles.css";

import { ModalRoute } from "seed/helpers"; // Para las ventanas emergentes
import PropTypes from "prop-types";
import { Link } from "react-router-dom";   // Para los botones de las ventanas emergentes

const SuperuserAdminView = (props) => (
    <div>

        {/* Contenido prinicpal */}
        <div class="p-5 overflow-auto vh-100"> {/* padding medidas-desbordamiento tamño-vertical */}
            <div class="p-5"> {/* padding */}
                <div class="row align-items-center justify-content-center"> {/* formato-fila centrados-verticalmente centrados-horizontalmente */}
                    <div class="col-auto mr-auto"> {/* ancho-columna-minimo margen-derecho-maximo */}
                        <h1 class="page-title">{props.pageTitle}</h1>
                    </div>
                    <div class="col-auto ml-auto">  {/* ancho-columna-minimo margen-derecho-maximo */}
                        <Link to={"/"+props.pageName+"/add"}>
                            <button type="button" class="btn btn-primary light-blue-button"> {/* boton color-boton */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                {props.pageNewElement}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="card text-center border table-panel p-5 overflow-auto"> {/* formato-tarjeta texto-centrado con-borde borde-color-primario padding medidas-desbordamiento tamño-vertical */}
                <div class="table-responsive"> {/* desplazamiento horizontal */}
                    <table class="table table-hover table-nowrap table-align-middle"> {/* tabla formato-sobre-fila celdas-un-renglon alineacion-vertical-celdas */}
                        <thead class="table-head-always-visible">
                            <tr class="table-titles">
                                { // Inicia codigo javascript
                                    props.tableTitles.map( // Mapea los valores del arreglo
                                        (tableTitle, i) => ( // Cada cadena y su posicion
                                            <th key={String(i)}>{tableTitle}</th> // A un elemento de titulo de la tabla
                                        )
                                    )
                                }
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="data-table-list">
                            {props.tableData}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <ModalRoute 
            path={"/" + props.pageName + "/delete"} // La ruta en la pagina de la ventana emergente de eliminar
            component={props.deleteWindow} // La ventana emergente de eliminar
        />
        <ModalRoute 
            path={"/" + props.pageName + "/edit"} // La ruta en la pagina de la ventana emergente de editar
            component={props.editWindow} // La ventana emergente de editar
        />
        <ModalRoute 
            path={"/" + props.pageName + "/add"} // La ruta en la pagina de la ventana emergente de agregar
            component={props.addWindow} // La ventana emergente de agregar
        />

    </div>
);

SuperuserAdminView.propTypes = {
    pageTitle: PropTypes.string,
    pageNewElementIcon: PropTypes.element,
    pageNewElement: PropTypes.string,
    tableTitles: PropTypes.array,
    tableData: PropTypes.array,
    pageName: PropTypes.string,
    deleteWindow: PropTypes.element,
    editWindow: PropTypes.element,
    addWindow: PropTypes.element
};

export default SuperuserAdminView;