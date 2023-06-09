import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductListView = ({ 
  wishlist,
  RatingStars
 }) => (
  <div style={{ overflowY: "auto", overflowX: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
    {wishlist.length === 0 ? (
      <div className="col-md-12 d-flex mt-2 justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
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
        className="row"
        style={{
          minHeight: "20vh",
          borderBottom: "2px solid #9C9C9C",
          borderTop: "2px solid #9C9C9C",
          display: "flex",
          alignItems: "center",
          width: "100%"
        }}
      >
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <img
            style={{ maxHeight: "130px", maxWidth: "130px" }}
            src={product?.variants[0]?.photos[0]?.url}
            alt="Imagen del producto"
          />
        </div>

        <div style={{ cursor: "pointer", flex: 1 }}>
          <div className="col-md-8" 
            onClick={() => window.location.replace(`/product/${product.id}`)}>
            <div>
              <span className="h3">{product?.name}</span>
            </div>
            <div>
              {product.opinions.length > 0 ? (
                <RatingStars rating={product.rating} />
              ) : (
                <RatingStars rating={0} showEmptyStars={true} />
              )}
            </div>
            <span className="h3">${product?.variants[0]?.price}</span>
          </div>
        </div>

        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <div className="w-50">
            <Link to={`/wishlist/${product.id}/delete`}>
              <button className="btn btn-secondary btn-xs btn-block p-auto" type="button">
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