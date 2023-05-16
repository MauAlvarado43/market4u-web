import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"
import ProductFormSave from "components/products/FormSave";
import ProductFormSet from "components/products/FormSet";
import { ModalRoute } from "seed/helpers";

const View = ({
    sales,
    pageNum = 1,
    totalPages = 0,
    onClickPage = () => { },
    onClickDelete = () => { },
}) =>
    <div className="border border-primary rounded-lg">
        <div className="list-title">
            <h2>Ofertas</h2>
        </div>
        <table className="table table-borderless">
            <thead className="">
                <tr className="font-weight-bold" style={{ color: "#000" }}>
                    <th className="text-center" style={{ width: "20%" }}>Nombre</th>
                    <th className="text-center" style={{ width: "15%" }}>Descuento</th>
                    <th className="text-center" style={{ width: "15%" }}>Fecha inicial</th>
                    <th className="text-center" style={{ width: "15%" }}>Fecha final</th>
                    <th className="text-center" style={{ width: "25%" }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    sales.map((sale, idx) =>
                        <tr key={sale.id}>
                            <td className="align-middle text-center">
                                {sale.name}
                            </td>
                            <td className="align-middle text-center">
                                {sale.disscount + " %"}
                            </td>
                            <td className="align-middle text-center">
                                {new Date(sale.startDate).getDate() + "/" + (new Date(sale.startDate).getMonth() + 1) + "/" + new Date(sale.startDate).getFullYear()}
                            </td>
                            <td className="align-middle text-center">
                                {new Date(sale.endDate).getDate() + "/" + (new Date(sale.endDate).getMonth() + 1) + "/" + new Date(sale.endDate).getFullYear()}
                            </td>
                            <td className="align-middle text-center">
                                <Link
                                    to={`/${sale.id}/delete`}
                                    className="btn btn-secondary btn-sm rounded-pill px-3"
                                    onClick={() => onClickDelete(sale.id)}
                                >
                                    <i className="fas fa-times mr-3 fa-lg"></i>
                                    Eliminar
                                </Link>
                                <Link
                                    to={`/${sale.id}/details`}
                                    className="btn btn-primary btn-sm rounded-pill px-4 ml-3"
                                >
                                    <i className="fas fa-eye mr-3 fa-lg"></i>
                                    Detalles
                                </Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

        <PaginationFooter
            pageNum={pageNum}
            totalPages={totalPages}
            onClickPage={onClickPage}
        />
    </div>;

View.propTypes = {
    sales: PropTypes.array.isRequired,
    pageNum: PropTypes.number,
    totalPages: PropTypes.number,
    onClickPage: PropTypes.func,
    onClickDelete: PropTypes.func,
};

export default View;