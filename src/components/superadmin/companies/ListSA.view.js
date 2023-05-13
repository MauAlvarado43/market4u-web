import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"
import ProductFormSave from "components/products/FormSave";
import ProductFormSet from "components/products/FormSet";
import { ModalRoute } from "seed/helpers";

const View = ({
    items = [],
    pageNum = 1,
    totalPages = 0,
    onClickPage = () => { },
    onClickDelete = () => { },
}) => (
    <div className="border border-primary rounded-lg">
        <div className="list-title">
            
            {/**/}
            <h2>Empresas</h2>
            {/**/}

        </div>
        <table className="table table-borderless">
            <thead className="">
                <tr className="font-weight-bold" style={{ color: "#000" }}>

                    {/**/}
                    <th className="text-center" style={{ width: "15%" }}>Nombre comercial</th>
                    <th className="text-center" style={{ width: "15%" }}>RFC</th>
                    <th className="text-center" style={{ width: "15%" }}>Teléfono</th>
                    <th className="text-center" style={{ width: "15%" }}>Correo</th>
                    <th className="text-center" style={{ width: "20%" }}>Acciones</th>
                    {/**/}

                </tr>
            </thead>
            <tbody>
                {
                    items.map(
                        (item, idx) => (
                            <tr key={item.id}>
                                
                                {/**/}
                                <td className="align-middle text-center">
                                    {item.commonName}
                                </td>
                                <td className="align-middle text-center">
                                    {item.rfc}
                                </td>
                                <td className="align-middle text-center">
                                    {item.phone}
                                </td>
                                <td className="align-middle text-center">
                                    {item.email}
                                </td>
                                {/**/}
                            
                                <td className="align-middle text-center">
                                    <Link
                                        to={`/${item.id}/delete`}
                                        onClick={() => onClickDelete(item.id)}
                                        className="btn btn-secondary btn-sm rounded-pill px-3"
                                    >
                                        <i className="fas fa-times mr-3 fa-lg"></i>
                                        Eliminar
                                    </Link>
                                    <Link
                                        to={`/${item.id}/edit`}
                                        className="btn btn-primary btn-sm rounded-pill px-4 ml-3"
                                    >
                                        <i className="fas fa-pen mr-3 fa-lg"></i>
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
        <PaginationFooter
            pageNum={pageNum}
            totalPages={totalPages}
            onClickPage={onClickPage}
        />
    </div>
);

View.propTypes = {
    items: PropTypes.array.isRequired,
    pageNum: PropTypes.number,
    totalPages: PropTypes.number,
    onClickPage: PropTypes.func,
    onClickDelete: PropTypes.func,
};

export default View;