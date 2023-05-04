import React from "react";

const CreateElementCard = ({ image, count, make, product, gender, color, price }) => {
  return (
    <div className="flex">
      <div className="content-image">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="count">{count}</div>
      </div>

      <div className="card-description">
        <h3>{make}</h3>
        <span>{product} - </span>
        <span>{gender}</span>
        <div className="background-span">
          <span>{color}</span>
          <span><b className="prince-bold">{price}</b></span>
        </div>
      </div>
    </div>
  );
}

export default CreateElementCard;