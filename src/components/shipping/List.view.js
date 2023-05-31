import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"
import { ModalRoute } from "seed/helpers";

const View = ({
    shippings,
    pageNum = 1,
    totalPages = 0,
    onClickPage = () => { },
    onClickDelete = () => { },
}) =>
    <div className="border border-primary rounded-lg">
        <div className="list-title">
            <h2>Pedidos</h2>
        </div>
        <table className="table table-borderless">
            <thead className="">
                <tr className="font-weight-bold" style={{ color: "#000" }}>
                    <th className="text-center" style={{ width: "20%" }}>Folio</th>
                    <th className="text-center" style={{ width: "30%" }}>Dirección</th>
                    <th className="text-center" style={{ width: "20%" }}>Estatus</th>
                    <th className="text-center" style={{ width: "20%" }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    shippings.map((shipping, idx) =>
                        <tr key={shipping.id}>
                            <td className="align-middle text-center">
                                {shipping.folio}
                            </td>
                            <td className="align-middle text-center">
                                {shipping.newAddress.firstName + " " + shipping.newAddress.lastName + ", " + shipping.newAddress.street}
                            </td>
                            <td className="align-middle text-center">
                                {shipping.status}
                            </td>
                            <td>
                                {shipping.twoButtons ? <div className="align-middle text-center">
                                    <Link
                                        to={`/${shipping.id}/canceled`}
                                        className="btn btn-secondary btn-sm rounded-pill px-3"
                                        onClick={() => onClickDelete(shipping.id)}
                                    >
                                        <i className="fas fa-times mr-3 fa-lg"></i>
                                        Cancelar
                                    </Link>
                                    <Link
                                    //to={`/product/${product.id}`}
                                    //to={`/product/${product.id}`}
                                    to={`/${shipping.id}/edit`}
                                        className="btn btn-primary btn-sm rounded-pill px-4 ml-3      mr-3"
                                    >
                                        <i className="fas fa-pen mr-3 fa-lg"></i>
                                        Actualizar
                                    </Link>
                                </div> : <div className="align-middle text-right">
                                    <Link
                                        to={`/${shipping.id}/details`}
                                        className="btn btn-primary btn-sm rounded-pill px-4 ml-3      mr-3"
                                    >
                                        <i className="fas fa-eye mr-3 fa-lg"></i>
                                        Visualizar
                                    </Link>
                                </div>}
                                
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
    shippings: PropTypes.array.isRequired,
    pageNum: PropTypes.number,
    totalPages: PropTypes.number,
    onClickPage: PropTypes.func,
    onClickDelete: PropTypes.func,
};

export default View;