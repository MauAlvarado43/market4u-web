import React from 'react';
import PropTypes from "prop-types";

const ProductCardView = ({ product }) => 
  <div 
    key={product.id} 
    className="mb-4 border border-dark card"
    style={{
      maxHeight: "190px", 
      height: "190px", 
      maxWidth: "190px", 
      width: "190px"
    }}
  >
    <div className="d-flex align-items-center justify-content-center pt-3">

      <a
        className="carousel-control-prev text-dark mb-7"
        href={`#carousel-${product.id}`}
        role="button"
        data-slide="prev"
      >
        <i className="fas fa-chevron-left fa-2x"></i>
      </a>

      <div className="d-flex flex-column justify-content-center align-items-center">

        <div id={`carousel-${product.id}`} className="carousel slide mb-2 mx-2" data-ride="carousel" >

          <div className="carousel-inner">
            {product.variants.length > 0 && product.variants[0].photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div 
                  className="d-flex justify-content-center align-items-center" 
                  style={{ height: "80px" }}
                >
                  <img 
                    src={photo.url} 
                    alt={product.name} 
                    className="d-block"
                    style={{
                      maxHeight: "70px",
                      maxWidth: "100px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

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
      
      <a
        className="carousel-control-next text-dark mb-7"
        href={`#carousel-${product.id}`}
        role="button"
        data-slide="next"
      >
        <i className="fas fa-chevron-right fa-2x"></i>
      </a>

    </div>

    <div className="mt-2 w-100">
      <div className="text-center">
        <div className="h-1 mt-0 mb-0">
          <span className="h3">{product.name}</span>
        </div>
        <div className="">{product.shortDescription}</div>
        <div className="">
            ${product.variants.length > 0 && product.variants[0].price}
        </div>
      </div>
    </div>

    <button 
      className="btn"
      style={{right: "-75px", top: "-185px", position: "", zIndex: "1"}}
    >
      <i className="far fa-heart"></i>
    </button>

  </div>;

ProductCardView.propTypes = {
  product: PropTypes.object
};

export default ProductCardView;




