import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCardView = ({ product }) =>
  <div
    key={product.id}
    className="mb-4 border border-dark card mx-auto"
    style={{
      maxHeight: "20em",
      height: "20em",
      maxWidth: "20em",
      width: "20em"
    }}
  >

    <div className='row'>
      <div className='col-md-12 d-flex justify-content-end'>
        <button
          className="btn">
          <i className="far fa-heart"></i>
        </button>
      </div>
    </div>

    <div className='row'>
      <div className='col-md-12'>
        <div className="px-3">

          <a
            className="carousel-control-prev text-dark mb-0 ml-3"
            href={`#carousel-${product.id}`}
            role="button"
            data-slide="prev"
          >
            <i className="fas fa-chevron-left fa-2x"></i>
          </a>

          <div className="d-flex flex-column justify-content-center align-items-center" >

            <div 
              id={`carousel-${product.id}`} 
              className="carousel slide mb-2 mx-2" 
              data-ride="carousel" 
              style={{ 
                height: "6.2em",
            }}>
              <div className="carousel-inner">
                {product.variants.length > 0 && product.variants[0].photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={photo.url}
                        alt={product.name}
                        className="d-block"
                        style={{
                          maxHeight: "6em",
                          maxWidth: "6em",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ width: "8em" }}>
                <ol className="carousel-indicators">
                  {product.variants.length > 0 && product.variants[0].photos.map((photo, index) => (
                    <li
                      key={photo.id}
                      data-target={`#carousel-${product.id}`}
                      data-slide-to={index}
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "relative",
                        bottom: "-35px",
                        backgroundColor: "#000"
                      }}
                      className={index === 0 ? "active" : ""}
                    />
                  ))}
                </ol>
              </div>

            </div>

          </div>

          <a
            className="carousel-control-next text-dark mb-0 mr-3"
            href={`#carousel-${product.id}`}
            role="button"
            data-slide="next"
          >
            <i className="fas fa-chevron-right fa-2x"></i>
          </a>

          </div>
      </div>
    </div>

    <div className='row'>
      <div className='col-md-12'>
        <div className="mt-2 w-100">
          <div className="text-center px-2">
            <div className="d-flex align-items-center justify-content-center" style={{height: "4em"}}>
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <span className="h5">{product.name}</span>
              </Link>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "3em" }}>
              <span className="h6 text-muted text-truncate">
                {product.shortDescription}
              </span>
            </div>
            <div className="">
              ${product.variants.length > 0 && product.variants[0].price}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>;

ProductCardView.propTypes = {
  product: PropTypes.object
};

export default ProductCardView;