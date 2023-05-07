import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "styles/css/main.css";
import "styles/css/carrusel.css";
import { gql, useQuery } from "@apollo/client";
import Banner from "components/main/Banner.view";


const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      shortDescription
      variants {
        price
        photos {
          id
          url
        }
      }
    }
  }
`;

const MainView = () => {
  const { loading: productsLoading, error: productsError, data: productsData } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(80);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.products);
    }
  }, [productsData]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container" style={{ width:"100%", height: "100vh", overflow: "scroll" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="container-main-visual">
        <div className="container-main">
          <div className="banner">
            <div clasName = "banner-container">
              <Banner />
            </div>
          </div>

          <div className="container-products">
            <div>
              <h4 className="title">PRODUCTOS DESTACADOS</h4>
            </div>

            <div className="row justify-content-centery flex-wrap">
  {currentProducts.map((product) => (
    <div key={product.id} className="col-md-3 mb-4">
      <div className="single-card-product col-margin">
      <button className="favorite-btn">
        <span class="material-symbols-outlined">
          favorite
        </span>
      </button>
      <div id={`carousel-${product.id}`} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {product.variants[0].photos.map((photo, index) => (
            <li key={photo.id} data-target={`#carousel-${product.id}`} data-slide-to={index} className={index === 0 ? "active" : ""}></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {product.variants[0].photos.map((photo, index) => (
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
            ${product.variants[0].price}
          </small>
        </p>
      </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

MainView.propTypes = {};

export default MainView;
