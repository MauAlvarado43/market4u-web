import React from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import RelatedProducts from "./RelatedProducts";
import ProductOpinionList from "./ProductOpinionList";

const DetailView = ({
  product = {},
  variantOptions = {},
  photos = [],
  photoIndex,
  setPhotoIndex,
  price,
  setSelectedOptions,
  selectedOptions,
  stock,
  rate,
  exist,
  onAddCart,
  onChangeAmount
}) =>
  <div class="px-6" style={{ overflowY: "auto", overflowX: "hidden" }}>

    <div className="row">
      <div className="col-md-1">
        <div className="d-flex flex-column">
          {
            photos.map((photo, index) =>
              <div
                key={index}
                className="p-1 mb-4 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#F0F0F0",
                  maxHeight: "6em",
                  height: "6em",
                  maxWidth: "6em",
                  width: "6em"
                }}
                onMouseOver={() => setPhotoIndex(index)}
              >
                <img
                  src={photo.url}
                  className="img-fluid"
                  alt=""
                  style={{ maxWidth: "5em", maxHeight: "5em" }}
                />
              </div>
            )
          }
        </div>
      </div>
      <div className="col-md-5 d-flex justify-content-center">
        <div
          style={{
            backgroundColor: "#F0F0F0",
            maxHeight: "40em",
            height: "40em",
            maxWidth: "40em",
            width: "40em"
          }}
          className="d-flex justify-content-center align-items-center p-6"
        >
          {
            photos.length > 0
              ? <img
                src={photos[photoIndex].url}
                className="img-fluid"
                alt=""
                style={{ maxWidth: "35em", maxHeight: "35em" }}
              />
              : <div style={{ maxWidth: "35em", maxHeight: "35em" }} >
                <i className="fas fa-image fa-10x text-muted"></i>
              </div>
          }
        </div>
      </div>
      <div className="col-md-4 px-6">

        <h1 className="display-5"> {product.name} </h1>
        <h3 className="text-muted h4"> {product.shortDescription} </h3>

        {
          function () {

            let stars = [];

            for (let i = 0; i < 5; i++)
              if (i < rate)
                stars.push(<i key={i} className="fa fa-star text-warning"></i>);
              else
                stars.push(<i key={i} className="far fa-star"></i>);

            return <div>
              <span>{stars}</span>
              <span className="ml-2">
                {product.opinions.length} {product.opinions.length === 1 ? "opinión" : "opiniones"}
              </span>
            </div>

          }()
        }

        <div className="d-flex align-items-center mt-3">
          <span className="h3 text-dark">Precio:</span>
          <span className=" ml-2 h3 text-dark">
            {function () {

              if (product.sale) {

                let disccount = product.sale.disscount;
                let startDate = DateTime.fromISO(product.sale.startDate);
                let endDate = DateTime.fromISO(product.sale.endDate);

                if (DateTime.now() >= startDate && DateTime.now() <= endDate) {
                  let newPrice = price - (price * disccount / 100);
                  return <>
                    <span className="text-danger">-{disccount}%  ${newPrice}</span>
                    <span className="ml-2 text-muted">
                      <small style={{ textDecoration: "line-through" }}>${price}</small>
                    </span>
                  </>
                }

              }

              return <>$ {price}</>

            }()}
          </span>
        </div>

        <div className="mb-3">
          <span className="h5 text-dark">Disponibles: {stock}</span>
        </div>

        {
          Object.keys(variantOptions).map((key, index) =>
            <div key={index} className="form-group">
              <label className="text-dark font-weight-bold">{key}</label>
              <select
                required
                className="form-control"
                onChange={e => setSelectedOptions({ ...selectedOptions, [key]: e.target.value })}
              >
                <option value="">Seleccione una opción</option>
                {
                  variantOptions[key].map((option, index) =>
                    <option key={index} value={option}>{option}</option>
                  )
                }
              </select>
            </div>
          )
        }

        <p className="text-justify"> {product.description} </p>

      </div>
      <div className="col-md-2 px-3">
        <div className="d-flex flex-column align-items-center justify-content-center">

          <div class="form-group w-100 mt-5">
            <label for="amountProduct">Cantidad</label>
            <select class="custom-select mb-5" id="amountProduct" onChange={onChangeAmount} disabled={
              (!exist && Object.keys(selectedOptions).length > 0) || stock == 0 || (Object.keys(selectedOptions).length != Object.keys(variantOptions).length)
            }>
              {
                Array(stock).fill().map((_, idx) => (
                  <option key={idx} value={idx+1} selected={idx == 0}>{idx+1} unidad{idx == 0 ? "" : "es"}</option>
                ))
              }
            </select>
          </div>

          <button
            className="btn btn-primary btn-sm rounded-pill p-2 w-100 px-3"
            disabled={
              (!exist && Object.keys(selectedOptions).length > 0) || stock == 0 || (Object.keys(selectedOptions).length != Object.keys(variantOptions).length)
            }
            onClick={onAddCart}
          >
            <i className="fas fa-shopping-cart mr-3 fa-lg"></i> Agregar al carrito
          </button>

          <button
            className="btn btn-secondary btn-sm rounded-pill p-2 w-100 px-3 mt-3"
            disabled={
              (!exist && Object.keys(selectedOptions).length > 0) || stock == 0 || (Object.keys(selectedOptions).length != Object.keys(variantOptions).length)
            }
          >
            <i className="fas fa-check mr-3 fa-lg"></i> Comprar ahora
          </button>

          {
            ((Object.keys(selectedOptions).length == Object.keys(variantOptions).length && !exist) || stock == 0) && <div className="">
              <div className="alert alert-danger mt-3 p-2 w-100" role="alert">
                {(exist && Object.keys(selectedOptions).length > 0) && stock == 0 ? "No hay stock disponible" : ""}
                {(!exist && Object.keys(selectedOptions).length > 0) ? "Este producto no existe" : ""}
              </div>
            </div>
          }

        </div>
      </div>
    </div>

    <div className="row mt-6 mb-3">
      <div className="col-md-12">
        <h1 className="display-5 text-dark">Productos relacionados con este artículo</h1>
      </div>
    </div>

    <div className="row my-3">
      <div className="col-md-12 d-flex justify-content-center">
        <RelatedProducts product={product} />
      </div>
    </div>

    <div className="row mt-6 mb-3">
      <div className="col-md-12">
        <h1 className="display-5 text-dark">Opiniones del producto</h1>
      </div>
    </div>

    <div className="my-3">
      <ProductOpinionList product={product} rate={rate} />
    </div>

  </div>;

DetailView.propTypes = {
  product: PropTypes.object,
  variantOptions: PropTypes.object,
  photos: PropTypes.array,
  photoIndex: PropTypes.number,
  setPhotoIndex: PropTypes.func,
  price: PropTypes.number,
  setSelectedOptions: PropTypes.func,
  selectedOptions: PropTypes.object,
  stock: PropTypes.number,
  rate: PropTypes.number
};

export default DetailView;