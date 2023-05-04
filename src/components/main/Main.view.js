import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "styles/css/main.css";
import { gql, useQuery } from "@apollo/client";

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

const GET_BANNERS = gql`
  query {
    sales {
      banner {
        id
        name
        url
      }
    }
  }
`;


const MainView = () => {
  const { loading: productsLoading, error: productsError, data: productsData } = useQuery(GET_PRODUCTS);
  const { loading: bannersLoading, error: bannersError, data: bannersData } = useQuery(GET_BANNERS);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(80);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.products);
    }
  }, [productsData]);

  if (productsLoading || bannersLoading) return <p>Loading...</p>;
  if (productsError || bannersError) return <p>Error :(</p>;

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
      <div className="NavBar">
        <h1>Aqui esta el navbar</h1>
      </div>
      <div className="container-main-visual">
        <div className="container-main">
          <div className="banner-offers">
            <div className="carousel slide" data-ride="carousel" id="bannerCarousel">
              <div className="carousel-inner">
                {bannersData.sales.banner && bannersData.sales.banner.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`carousel-item${index === 0 ? " active" : ""}`}
                  >
                    <img
                      src={banner.url}
                      alt={banner.name}
                      className="d-block w-100"
                      style={{ height: "100vh", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#bannerCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#bannerCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="container-products">
            <div>
              <h4 className="title">PRODUCTOS DESTACADOS</h4>
            </div>

            <div className="row justify-content flex-wrap">
  {currentProducts.map((product) => (
    <div key={product.id} className="col-md-3 mb-4 single-card-product">
      <button className="favorite-btn">
        <i className="fas fa-heart"></i>
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
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                    id = "prev-icon"
                    style={{ color: "black" }}
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href={`#carousel-${product.id}`}
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                    id = "next-icon"
                    style={{ color: "black" }}
                  ></span>
                  <span className="sr-only">Next</span>
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
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
);
};

MainView.propTypes = {};

export default MainView;