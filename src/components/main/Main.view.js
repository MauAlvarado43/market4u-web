import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import Banners from "components/main/Banners";
import ProductList from "components/main/List";

const MainView = () =>
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

          <ProductList />

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