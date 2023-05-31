import React from 'react';
import PropTypes from "prop-types";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannersView = ({ 
  sales, 
  activeIndex, 
  settings,
  setSaleId
}) => (
<div className="banner-carousel-container" style = {{overflowX:"hidden", overflowY:"hidden"}}>
  <Slider {...settings}>
    {sales.map((sale, index) => (
      <div
        key={sale.id}
        className={`banner-image ${index === activeIndex ? 'active' : ''}`}
      >
        <img
          onClick={() => setSaleId(sale.id)} 
          style={{ width: '100%', height:"45vh", cursor: "pointer"}} 
          src={sale?.banner?.url} alt={sale?.banner?.name} />
        <div className="banner-name">{sale.banner.name}</div>
      </div>
    ))}
  </Slider>

  <div className="banner-carousel-controls">
    <button className="border-0"/>
  </div>
</div>
);

BannersView.propTypes = {};

export default BannersView;