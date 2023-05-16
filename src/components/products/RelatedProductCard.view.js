import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RelatedProductCardView = ({ product }) => 
  <div 
    className="card card-body border-dark d-flex justify-content-center mx-2" 
    style={{
      height: "20em",
      width: "20em",
    }}
  >

    <div className="d-flex justify-content-center align-items-center">
      {
        product.variants.length > 0 && product.variants[0].photos && product.variants[0].photos.length > 0 &&
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "6.2em",
          }}
        >
          <img
            src={product.variants[0].photos[0].url}
            alt={product.name}
            className="img-fluid"
            style={{
              maxHeight: "6em",
              maxWidth: "6em",
            }}
          />
        </div>
      }
    </div>

    <div className="mt-2 w-100">
      <div className="text-center">

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
                {product.opinions.length} <i className="fa fa-user"></i>
              </span>
            </div>

          }()
        }

        <div className="mt-1">
            ${product.variants.length > 0 && product.variants[0].price}
        </div>

      </div>
    </div>

  </div>;


RelatedProductCardView.propTypes = {
  product: PropTypes.object.isRequired,
}

export default RelatedProductCardView;