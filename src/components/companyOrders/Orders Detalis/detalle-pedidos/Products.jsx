import React from "react";

const Products = ({ product }) => {
    const { image, make, gender, price } = product;
  
    return (
      <div className="w-div-product h-div-product border-color-839a99 border-radius-10 mb-4 pt-4 pb-4">
        <div className="d-flex justify-content-center align-items-center h-50 overflow-hidden">
          <img src={image} alt={make} className="custom-img"/>
        </div>
  
        <div className="w-75 m-auto pl-3">
          <div className="text-dark text-uppercase ">
            <h5>{make}</h5>
          </div>
  
          <div>
            <span className="text-dark text-uppercase d-block">{gender}</span>
            <span className="">{price}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Products;