import React from "react";
import PropTypes from "prop-types";
import Banners from "components/main/Banners";
import ProductCard from "./ProductCard";

const MainView = ({ 
  products, 
}) =>
  <div className="container" style={{ width: "100%", height: "100vh", overflowY: "scroll" }}>
    
    <div className="container-main-visual">
      <div className="container-main">
        {/* <div className="banner">
          <div clasName="banner-container">
            <Banners />
          </div>
        </div> */}

        <div className="container-products">

          <div className="my-3">
            <h2 className="title">PRODUCTOS DESTACADOS</h2>
          </div>

          <div className="row mx-3">
            {
              products.map((product) => 
                <div key={product.id} className="mx-3">
                  <ProductCard product={product} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  </div>;

MainView.propTypes = {
  products: PropTypes.array,
  onClickPage: PropTypes.func,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number
};

export default MainView;
