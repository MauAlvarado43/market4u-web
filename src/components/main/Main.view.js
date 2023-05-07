import React from "react";
import PropTypes from "prop-types";
// import "styles/css/main.css";
// import "styles/css/carrusel.css";
import Banners from "components/main/Banners";


const MainView = ({ products, onClickPage, pageNum, totalPages }) => {

  <div className="container" style={{ width: "100%", height: "100vh", overflow: "scroll" }}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div className="container-main-visual">
      <div className="container-main">
        <div className="banner">
          <div clasName="banner-container">
            <Banners />
          </div>
        </div>

        <div className="container-products">
          <div>
            <h4 className="title">PRODUCTOS DESTACADOS</h4>
          </div>

          <div className="row justify-content-centery flex-wrap">
            {products.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <div className="single-card-product col-margin">
                  <button className="favorite-btn">
                    <span class="material-symbols-outlined">
                      favorite
                    </span>
                  </button>

                  <div id={`carousel-${product.id}`} className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      {product.variants.length > 0 && product.variants[0].photos.map((photo, index) => (
                        <li key={photo.id} data-target={`#carousel-${product.id}`} data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                      ))}
                    </ol>
                    <div className="carousel-inner">
                      {product.variants.length > 0 && product.variants[0].photos.map((photo, index) => (
                        <div key={photo.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                          <img src={photo.url} className="d-block w-100 card-img-top" alt={product.name} />
                        </div>
                      ))}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href={`#carousel-${product.id}`}
                      role="button"
                      data-slide="prev"
                    >
                      <span class="material-symbols-outlined" id="prev-icon">
                        arrow_back_ios
                      </span>


                    </a>
                    <a
                      className="carousel-control-next"
                      href={`#carousel-${product.id}`}
                      role="button"
                      data-slide="next"
                    >
                      <span class="material-symbols-outlined next" id="prev-icon">
                        arrow_forward_ios
                      </span>
                    </a>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.shortDescription}</p>
                    <p className="card-text">
                      <small className="text" style={{ fontSize: '20px' }}>
                        ${product.variants.length > 0 && product.variants[0].price}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

}

MainView.propTypes = {};

export default MainView;
