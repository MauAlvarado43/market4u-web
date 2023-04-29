/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"


const SaleListView = ({ sales, pageNum = 1, totalPages = 0, onClickPage = () => { }, productsName = [], tableTitles = [] }) =>
    
    <>
        <table class="table table-hover table-nowrap table-align-middle"> {/* tabla formato-sobre-fila celdas-un-renglon alineacion-vertical-celdas */}
            <thead class="table-head-always-visible">
                <tr class="table-titles">
                    { // Inicia codigo javascript
                        tableTitles.map( // Mapea los valores del arreglo
                            (tableTitle, i) => ( // Cada cadena y su posicion
                                <th key={String(i)}>{tableTitle}</th> // A un elemento de titulo de la tabla
                            )
                        )
                    }
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody class="data-table-list">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                {
                    sales.map((sale, idx) =>
                        <tr key={sale.id}>
                            <td>{sale.name}</td>
                            <td>{sale.disscount * 100 + " %"}</td>
                            <td>{new Date(sale.startDate).getDate() + "/" + new Date(sale.startDate).getMonth() + "/" + new Date(sale.startDate).getFullYear()}</td>
                            <td>{new Date(sale.endDate).getDate() + "/" + new Date(sale.endDate).getMonth() + "/" + new Date(sale.endDate).getFullYear()}</td>
                            <td>
                                <select className="products-sales-names">
                                    <option>Listado</option>
                                    {
                                        productsName[idx].map((product) =>
                                            <option>{product}</option>
                                        )
                                    }
                                </select>
                            </td>
                            <td class="row align-items-center justify-content-center"> {/* estilo-fila alineado-vertical alineado-horizontal */}
                                <div class="col-auto">  {/* ancho-columna-minimo */}
                                    <Link to={`/${sale.id}/edit`}>
                                        <button type="button" class="btn btn-info light-blue-button"> {/* boton color-boton */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                                            Editar
                                        </button>
                                    </Link>
                                </div>
                                <div class="col-auto">  {/* ancho-columna-minimo */}
                                    <Link to={`/${sale.id}/delete`}>
                                        <button type="button" class="btn btn-warning orange-button"> {/* boton color-boton */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                            Eliminar
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <PaginationFooter pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} />
    </>;

SaleListView.propTypes = {
    sales: PropTypes.array.isRequired,
    productsName: PropTypes.array.isRequired,
    pageNum: PropTypes.number,
    totalPages: PropTypes.number,
    onClickPage: PropTypes.func
};

export default SaleListView;