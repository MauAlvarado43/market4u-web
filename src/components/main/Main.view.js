import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import Banners from "components/main/Banners";
import { PaginationFooter } from "seed/helpers";
import ProductCard from "components/main/ProductCard";


const MainView = ({ products, onClickPage, pageNum, totalPages }) =>
  <div className="container" style={{ width: "100vw", height:"auto", overflow: "auto", paddingBottom: "200px" }}>
    <div className="container-main-visual">
      <div className="container-main">
        <div className="banner">
          <div clasName="banner-container">
            <Banners />
          </div>
        </div>

        <div>
          <div className="my-3">
            <h2 className="title">PRODUCTOS DESTACADOS</h2>
          </div>

          <div className="row">
            {
              products.map((product) =>
                <div key={product.id} className="col-md-3 my-2">
                  <ProductCard product={product} />
                </div>
              )
            }
          </div>

          <PaginationFooter totalPages={totalPages} pageNum={pageNum} onClickPage={onClickPage}/>

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