import React from 'react';
import PropTypes from "prop-types";
// import "styles/css/carrusel.css";

const BannersView = ({ sales, activeIndex, handlePrevClick, handleNextClick }) => (

  <div className="banner-carousel-container">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div className="banner-carousel">
      {sales.map((sale, index) => (
        <div
          key={sale.id}
          className={`banner-image ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={sale?.banner?.url} alt={sale?.banner?.name} />
          {/*<div className="banner-name">{sale.banner.name}</div>*/}
          {/*BOTON VER PRODUCTOS*/}

          <button className="view-products" onClick={() => console.log("Ver productos")}>
            Ver productos
          </button>

        </div>
      ))}

    </div>
    <button className="prev-button" onClick={handlePrevClick}>
      <span className="material-symbols-outlined">
        arrow_forward_ios
      </span>
    </button>
    <button className="next-button" onClick={handleNextClick}>
      <span className="material-symbols-outlined">
        arrow_back_ios_new
      </span>
    </button>
  </div>

);

BannersView.propTypes = {};

export default BannersView;




