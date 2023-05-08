import React from "react";
import PropTypes from "prop-types";

const RelatedProductCardView = ({ product }) => 
  <div 
    className="card card-body border-dark d-flex justify-content-center align-items-center mx-2" 
    style={{
      maxHeight: "190px",
      maxWidth: "190px",
      height: "190px",
      width: "190px",
    }}
  >

    <div 
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "70px",
        width: "70px",
      }}
    >
      {
        product.variants.length > 0 && product.variants[0].photos && product.variants[0].photos.length > 0 &&
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "80px",
            width: "80px",
          }}
        >
            <img
            src={product.variants[0].photos[0].url}
            alt={product.name}
            className="img-fluid"
            style={{
              maxHeight: "80px",
              maxWidth: "80px",
            }}
          />
        </div>
      }
    </div>

    <div className="mt-2 w-100">
      <div className="text-center">
        <div className="h-1 mt-0 mb-0">
          <span className="h3">{product.name}</span>
        </div>
        <div className="">{product.shortDescription}</div>

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

        <div className="">
            ${product.variants.length > 0 && product.variants[0].price}
        </div>
      </div>
    </div>

  </div>;


RelatedProductCardView.propTypes = {
  product: PropTypes.object.isRequired,
}

export default RelatedProductCardView;