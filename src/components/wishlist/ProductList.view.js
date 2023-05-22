import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductListView = ({ wishlist }) => (
  <div style={{ overflowY: "auto", overflowX:"hidden"}}>
    {wishlist.length === 0 ? (
      <div className="col-md-12 d-flex mt-2 justify-content-center align-items-center" 
        style={{ flexDirection: 'column' }}>
        <span className="h2">No se encontraron productos</span>
        <img
          style={{ height: "400px", width: "400px" }}
          src="https://img.freepik.com/vector-premium/producto-no-encontrado-ilustracion-plana_418302-105.jpg?w=2000"
          alt="No se encontraron productos"
        />
      </div>
    ) : null}
    {wishlist.map((product) => (
      <div
        key={product.id}
        className="row justify-content-center align-items-center"
        style={{
          minHeight:"20vh",
          borderBottom: "2px solid #9C9C9C",
          borderTop: "2px solid #9C9C9C",
        }}
      >
        <div class="col-md-2 d-flex justify-content-center">
          <img
            style={{ maxHeight: "130px", maxWidth: "130px"}}
            src={product?.variants[0]?.photos[0]?.url}
          ></img>
        </div>

        <div className="col-md-6 justify-content-center">
          <div>
            <span className="h3">{product?.name}</span>
          </div>
          <div className="d-flex">
            <span className="h4">{product?.category?.name}</span>
            <div className="ml-5">
              <i class="far fa-star" style={{ color: "#000000" }}></i>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
            </div>
          </div>
          <span className="h3">${product?.variants[0]?.price}</span>
        </div>

        <div class="col-md-3 d-flex justify-content-center align-items-center">
          <div className="w-50">
            <Link to={`/wishlist/${product.id}/delete`}>
              <button class="btn btn-secondary btn-xs btn-block p-auto" type="button">
                <i className="fas fa-trash mr-1" style={{ color: "#ffffff" }}></i>
                <span>Eliminar</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

ProductListView.propTypes = {
  wishlist: PropTypes.array
};

export default ProductListView;
