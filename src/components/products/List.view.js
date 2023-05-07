import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"

const ProductListView = ({ 
  products, 
  pageNum = 1, 
  totalPages = 0, 
  onClickPage = () => {},
  onClickDelete = () => {}
}) =>
  <div className="border border-primary rounded-lg">

    <div className="list-title">
      <h2> Productos </h2>
    </div>

    <table className="table table-borderless">
      <thead className="">
        <tr className="font-weight-bold" style={{color: "#000"}}>
          <th className="text-center" style={{width: "20%"}}>Nombre</th>
          <th className="text-center" style={{width: "15%"}}>Categoría</th>
          <th className="text-center" style={{width: "10%"}}>Cantidad</th>
          <th className="text-center" style={{width: "10%"}}>Precio</th>
          <th className="text-center" style={{width: "15%"}}>Ofertas</th>
          <th className="text-center" style={{width: "30%"}}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product) =>
            <tr key={product.id}>
              <td className="align-middle text-center">
                {product.name}
              </td>
              <td className="align-middle text-center">
                {product.category.name}
              </td>
              <td className="align-middle text-center">
                {product.variants.reduce((acc, variant) => acc + variant.stock, 0)}
              </td>
              <td className="align-middle text-center">
                $ {product.variants.reduce((acc, variant) => acc + variant.price, 0) / product.variants.length}
              </td>
              <td className="align-middle text-center">
                {product.sale ? product.sale.name : "-"}
              </td>
              <td className="align-middle text-center">

                  <Link 
                    to={`/${product.id}/delete`}
                    className="btn btn-secondary btn-sm rounded-pill px-3" 
                    onClick={() => onClickDelete(product.id)}
                  >
                    <i className="fas fa-times mr-3 fa-lg"></i> Eliminar
                  </Link>

                  <Link 
                    to={`/${product.id}/edit`}
                    className="btn btn-primary btn-sm rounded-pill px-4 ml-3" 
                  >
                    <i className="fas fa-pen mr-3 fa-lg"></i> Editar
                  </Link>

              </td>
            </tr>
          )
        }
      </tbody>
    </table>

    <PaginationFooter pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} />

  </div>;

ProductListView.propTypes = {
  products: PropTypes.array.isRequired,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default ProductListView;