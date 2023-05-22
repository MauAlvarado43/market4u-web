import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"
import ProductFormSave from "components/products/FormSave";
import ProductFormSet from "components/products/FormSet";
import { ModalRoute } from "seed/helpers";

const View = ({
    categories,
    pageNum = 1,
    totalPages = 0,
    onClickPage = () => { },
    onClickDelete = () => { },
}) =>
    <div className="border border-primary rounded-lg">
        <div className="list-title">
            <h2>Categorías</h2>
        </div>
        <table className="table table-borderless">
            <thead className="">
                <tr className="font-weight-bold" style={{ color: "#000" }}>
                    <th className="text-center" style={{ width: "60%" }}>Nombre</th>
                    <th className="text-center" style={{ width: "20%" }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((cateogory, idx) =>
                        <tr key={cateogory.id}>
                            <td className="align-middle text-center">
                                {cateogory.name}
                            </td>
                            <td className="align-middle text-center">
                                <Link
                                    to={`/${cateogory.id}/delete`}
                                    className="btn btn-secondary btn-sm rounded-pill px-3"
                                    onClick={() => onClickDelete(cateogory.id)}
                                >
                                    <i className="fas fa-times mr-3 fa-lg"></i>
                                    Eliminar
                                </Link>
                                <Link
                                    to={`/${cateogory.id}/edit`}
                                    className="btn btn-primary btn-sm rounded-pill px-4 ml-3"
                                >
                                    <i className="fas fa-pen mr-3 fa-lg"></i>
                                    Editar
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
    categories: PropTypes.array.isRequired,
    pageNum: PropTypes.number,
    totalPages: PropTypes.number,
    onClickPage: PropTypes.func,
    onClickDelete: PropTypes.func,
};

export default View;