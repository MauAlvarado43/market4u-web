import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"
import ProductFormSave from "components/products/FormSave";
import ProductFormSet from "components/products/FormSet";
import { ModalRoute } from "seed/helpers";

const View = ({
    opinions,
    pageNum = 1,
    totalPages = 0,
    onClickPage = () => { },
    onClickDelete = () => { },
}) =>
    <div className="border border-primary rounded-lg">
        <div className="list-title">
            <h2>Opiniones</h2>
        </div>
        <table className="table table-borderless">
            <thead className="">
                <tr className="font-weight-bold" style={{ color: "#000" }}>
                    <th className="text-center" style={{ width: "20%" }}>Titulo</th>
                    <th className="text-center" style={{ width: "25%" }}>Producto</th>
                    <th className="text-center" style={{ width: "10" }}>Calificación</th>
                    <th className="text-center" style={{ width: "25%" }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    opinions.map((opinion, idx) =>
                        <tr key={opinion.id}>
                            <td className="align-middle text-center">
                                {opinion.title}
                            </td>
                            <td className="align-middle text-center">
                                {opinion.product.name + " - " + opinion.product.company.name}
                            </td>
                            <td className="align-middle text-center">
                                {opinion.rate + " / 5"}
                            </td>
                            <td className="align-middle text-center">
                                <Link
                                    to={`/${opinion.id}/censor`}
                                    className="btn btn-secondary btn-sm rounded-pill px-3"
                                    onClick={() => onClickDelete(opinion.id)}
                                >
                                    <i className="fas fa-eye-slash mr-3 fa-lg"></i>
                                    Censurar
                                </Link>
                                <Link
                                    to={`/${opinion.id}/details`}
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
    opinions: PropTypes.array.isRequired,
    pageNum: PropTypes.number,
    totalPages: PropTypes.number,
    onClickPage: PropTypes.func,
    onClickDelete: PropTypes.func,
};

export default View;