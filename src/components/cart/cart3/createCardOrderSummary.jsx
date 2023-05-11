import React from "react";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />


const CreateCardOrderSumary = ({ card }) => {
  const { image, count, name, gender, size, price } = card;

  return (
    <div className="card">

      <div className="information">
        <div className="image">
          <img src={image} alt={name} />
          <div className="count">{count}</div>
        </div>

        <div className='information-description'>
          <h4>{name}</h4>
          <span className='gender'>{gender}</span>

          <div className="size">
            <span><b>Size</b></span>
            <span>{size}</span>
          </div>
        </div>
      </div>

      <div className="price">
        <p>{price}</p>
      </div>

    </div>
  );
}

export default CreateCardOrderSumary;