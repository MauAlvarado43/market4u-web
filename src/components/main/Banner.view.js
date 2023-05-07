import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import "styles/css/carrusel.css";

const GET_BANNERS = gql`
  {
    sales {
      id
      name
      banner {
        name
        url
      }
    }
  }
`;
function BannerCarousel() {
  const { loading, error, data } = useQuery(GET_BANNERS);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (data) {
      const timeout = setTimeout(() => {
        setActiveIndex((activeIndex + 1) % data.sales.length);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, data]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + data.sales.length) % data.sales.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % data.sales.length);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return null; // add a check for data

  return (
    
    <div className="banner-carousel-container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="banner-carousel">
        {data.sales.map((sale, index) => (
          <div
            key={sale.id}
            className={`banner-image ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={sale.banner.url} alt={sale.banner.name} />
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
}

export default BannerCarousel;



  
  