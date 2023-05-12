import React from "react";

const ProductListView = ({ wishlist }) => (
  <div style={{ overflowY: "auto", overflowX:"hidden"}}>
    {wishlist.map((product) => (
      <div
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
            src={product.variants[0].photos[0].url}
          ></img>
        </div>

        <div className="col-md-6 justify-content-center">
          <div>
            <span className="h3">{product.name}</span>
          </div>
          <div className="d-flex justify-content-between">
            {product.category.name}
            <div>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
              <i class="far fa-star" style={{ color: "#000000" }}></i>
            </div>
          </div>
          <div>${product.variants[0].price}</div>
        </div>

        <div class="col-md-3 d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-secondary px-auto btn-sm" type="button">
              <i className="fas fa-trash mr-2" style={{ color: "#ffffff" }}></i>
              Eliminar
            </button>
          </div>
          <div>
            <button class="btn btn-primary px-auto btn-sm" type="button">
              <i
                className="fas fa-shopping-cart mr-2"
                style={{ color: "#ffffff" }}
              ></i>
              Agregar a carrito
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

ProductListView.propTypes = {};

export default ProductListView;
