/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"


const SaleListView
    = ({ sales, pageNum = 1, totalPages = 0, onClickPage = () => { }, productsName = [] }) =>
        <div>
            <Link to={"/create"} className="btn btn-sm btn-white">
                <span class="d-none d-sm-inline-block mr-1">Crear</span>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descuento</th>
                        <th>Fecha inicio</th>
                        <th>Fecha fin</th>
                        <th>Productos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sales.map((sale, idx) =>
                            <tr key={sale.id}>
                                <td>{sale.name}</td>
                                <td>{sale.disscount * 100 + " %"}</td>
                                <td>{new Date(sale.startDate).getDate() + "/" + new Date(sale.startDate).getMonth() + "/" + new Date(sale.startDate).getFullYear()}</td>
                                <td>{new Date(sale.endDate).getDate() + "/" + new Date(sale.endDate).getMonth() + "/" + new Date(sale.endDate).getFullYear()}</td>
                                <td>
                                    <select>
                                        <option>Listado</option>
                                        {
                                            productsName[idx].map((product) =>
                                                <option>{product}</option>

                                            )
                                        }
                                    </select>
                                </td>
                                <td>
                                    <Link to={`/${sale.id}/edit`} className="btn btn-sm btn-white">
                                        <span class="d-none d-sm-inline-block mr-1">Editar</span>
                                    </Link>
                                    <Link to={`/${sale.id}`} className="btn btn-sm btn-white">
                                        <span class="d-none d-sm-inline-block mr-1">Eliminar</span>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ul class="list-group">
                {
                    sales.map((sale) =>
                        <li key={sale.id} class="list-group-item">
                            <div class="row align-items-center gx-2">
                                <div class="col-auto">
                                    <img class="avatar avatar-xs avatar-4by3"
                                        src="/theme/svg/components/placeholder-img-format.svg" alt="Icon" />
                                </div>

                                <div class="col">
                                    <h5 class="mb-0">
                                        <Link to={`/${sale.id}`}>SALE {sale.id}</Link>
                                    </h5>
                                    <ul class="list-inline list-separator small">
                                        <li class="list-inline-item">{JSON.stringify(sale).substring(0, 70) + "…"}</li>
                                        <li class="list-inline-item">
                                            {new Date(sale.createdAt).getDate() + "." +
                                                (new Date(sale.createdAt).getMonth() + 1) + "." +
                                                new Date(sale.createdAt).getFullYear()}
                                        </li>

                                    </ul>
                                </div>

                                <div class="col-auto">
                                    {/* Options */}
                                    <Link to={`/${sale.id}`} className="btn btn-sm btn-white">
                                        <span class="d-none d-sm-inline-block mr-1">Details</span>
                                    </Link>
                                </div>
                                
                            </div>
                        </li>
                    )
                }
            </ul>

            <PaginationFooter pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} />

        </div>;

SaleListView.propTypes = {
    sales: PropTypes.array.isRequired,
    pageNum: PropTypes.number,
    totalPages: PropTypes.number,
    onClickPage: PropTypes.func
};

export default SaleListView;