import React from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

const DetailView = ({ 
  product = {}, 
  variantOptions = {}, 
  photos = [],
  photoIndex,
  setPhotoIndex,
  price,
  setSelectedOptions,
  selectedOptions,
  stock
}) =>
  <div class="px-6" style={{overflowY: "auto", overflowX: "hidden", maxHeight: "80vh"}}>

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
                  maxHeight: "80px", 
                  height: "80px", 
                  maxWidth: "80px", 
                  width: "80px"
                }}
                onMouseOver={() => setPhotoIndex(index)}
              >
                <img 
                  src={photo.url} 
                  className="img-fluid" 
                  alt="" 
                  style={{ maxWidth: "65px", maxHeight: "65px" }} 
                />
              </div>
            )
          }
        </div>
      </div>
      <div 
        className="col-md-5 d-flex justify-content-center align-items-center" 
      >
        <div 
          style={{
            backgroundColor: "#F0F0F0", 
            maxHeight: "500px", 
            height: "500px", 
            maxWidth: "500px", 
            width: "500px"
          }}
          className="d-flex justify-content-center align-items-center p-6"
        >
          {
            photos.length > 1 && 
              <img 
                src={photos[photoIndex].url} 
                className="img-fluid" 
                alt="" 
                style={{ maxWidth: "400px", maxHeight: "400px" }} 
              />
          }
        </div>
      </div>
      <div className="col-md-4 px-6">

        <h1 className="display-4"> {product.name} </h1>
        <h3 className="text-muted"> {product.shortDescription} </h3>

        {
          function(){

            let rate = product.opinions.reduce((acc, opinion) => acc + opinion.rate, 0);
            if(product.opinions.length > 0) rate = rate / product.opinions.length;

            let stars = [];

            for(let i = 0; i < 5; i++)
              if(i < rate)
                stars.push(<i key={i} className="fa fa-star text-warning"></i>);
              else
                stars.push(<i key={i} className="far fa-star"></i>);

            return <div>
              <span>{ stars }</span>
              <span className="ml-2">
                {product.opinions.length} {product.opinions.length === 1 ? "opinión" : "opiniones"}
              </span>
            </div>

          }()
        }

        <div className="d-flex align-items-center mt-3">
          <span className="h3 text-dark">Precio:</span>
          <span className=" ml-2 h3 text-dark">
            {function(){
              
              if(product.sale) {

                let disccount = product.sale.disscount;
                let startDate = DateTime.fromISO(product.sale.startDate);
                let endDate = DateTime.fromISO(product.sale.endDate);

                if(DateTime.now() >= startDate && DateTime.now() <= endDate) {
                  let newPrice = price - (price * disccount / 100);
                  return <>
                    <span className="text-danger">-{ disccount }%  ${newPrice}</span>
                    <span className="ml-2 text-muted">
                      <small style={{textDecoration: "line-through"}}>${price}</small>
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
                onChange={e => setSelectedOptions({...selectedOptions, [key]: e.target.value})}
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

        <p> { product.description } </p>

      </div>
      <div className="col-md-2 px-3">
        <div className="d-flex flex-column align-items-center justify-content-center">

          <button className="btn btn-primary btn-sm rounded-pill p-2 w-100 px-3">
            <i className="fas fa-shopping-cart mr-3 fa-lg"></i> Agregar al carrito
          </button>
          
          <button className="btn btn-secondary btn-sm rounded-pill p-2 w-100 px-3 mt-3">
            <i className="fas fa-check mr-3 fa-lg"></i> Comprar ahora
          </button>

        </div>
      </div>
    </div>

    <div className="row mt-3">
        <div className="col-md-12">
          <h1 className="display-5 text-dark">Productos relacionados con este artículo</h1>
        </div>
    </div>

  </div>;

DetailView.propTypes = {
  product: PropTypes.object
};

export default DetailView;