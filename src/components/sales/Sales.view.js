/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import SaleList from "components/sales/List";
import SaleFormSave from "components/sales/FormSave";
import SaleFormEdit from  "components/sales/FormSet";
import SaleDelete from "components/sales/Delete";
import { ModalRoute } from "seed/helpers";
 
const SalesView = (props) =>
    <BrowserRouter basename="/sales">
        <div class="content container-fluid css-sales">

            {/* Header */}
            <h1 class="page-header-title">Market4U</h1>

           
            {/* Contenido prinicpal */}
            <div class="p-5 overflow-auto"> {/* padding medidas-desbordamiento tamño-vertical */}
                <div class="p-5"> {/* padding */}
                    <div class="row align-items-center justify-content-center"> {/* formato-fila centrados-verticalmente centrados-horizontalmente */}
                        <div class="col-auto mr-auto"> {/* ancho-columna-minimo margen-derecho-maximo */}
                            <h1 class="page-title">{props.pageTitle}</h1>
                        </div>
                        <div class="col-auto ml-auto">  {/* ancho-columna-minimo margen-derecho-maximo */}
                            <Link to={"/create"}>
                                <button type="button" class="btn btn-primary light-blue-button"> {/* boton color-boton */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                    {props.pageNewElement}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="card text-center border table-panel p-5 overflow-auto"> {/* formato-tarjeta texto-centrado con-borde borde-color-primario padding medidas-desbordamiento tamño-vertical */}
                    <div class=""> {/* desplazamiento horizontal */}
                        

                            {/* List */}
                            <SaleList tableTitles={props.tableTitles}/>

                            {/*
                            <tbody class="data-table-list">
                                {props.tableData}
                            </tbody>
                            </table>
                            */}
                        
                    </div>
                </div>
            </div>

            {/* Modals */}
            <ModalRoute
                path="/create"
                component={SaleFormSave} 
                windowTitle="Crear oferta"
            />
            <ModalRoute
                path="/:saleId(\d+)/edit"
                component={SaleFormEdit} />
            <ModalRoute
                path="/:saleId(\d+)/delete"
                component={SaleDelete} />

        </div>
    </BrowserRouter>;

SalesView.propTypes = {};

export default SalesView;