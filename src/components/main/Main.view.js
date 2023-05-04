import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import "styles/css/main.css";
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

const MainView = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="container" style={{ height: "100vh", overflow: "scroll" }}>
      <div className="NavBar">
        <h1>Aqui esta el navbar</h1>
      </div>
      <div className="container-main-visual">
        <div className="container-main">
          <div className="banner-offers">
            <div className="box">
              <img
                src="https://img.freepik.com/free-psd/horizontal-banner-template-online-fashion-sale_23-2148585405.jpg?w=900&t=st=1682395828~exp=1682396428~hmac=95e44b82bde9a20be85f9cf433d02928ee93149959f3e4e679d5e9b811928321"
                alt="Cargando imagen..."
              />
            </div>
          </div>

          <div className="container-products">
            <div>
              <h4 className="title">PRODUCTOS DESTACADOS</h4>
            </div>

            <div
              className="d-flex flex-wrap card-container justify-content-between"
              style={{ gap: "30px" }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card single-card-product col-md-2"
                >
                  <div
                    id={`carousel-${product.id}`}
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      {product.variants[0].photos.map((photo, index) => (
                        <li
                          key={photo.id}
                          data-target={`#carousel-${product.id}`}
                          data-slide-to={index}
                          className={index === 0 ? "active" : ""}
                        ></li>
                      ))}
                    </ol>
                    <div className="carousel-inner">
                      {product.variants[0].photos.map((photo, index) => (
                        <div
                          key={photo.id}
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          <img
                            src={photo.url}
                            className="d-block w-100"
                            alt={product.name}
                          />
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
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.shortDescription}</p>
                <p className="card-text">
                  <small className="text-muted">
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

