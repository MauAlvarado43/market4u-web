import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

const ProfileView = () => (
  <BrowserRouter>
    <div className="w-100" style={{ minHeight: "18vh" }}></div>
    <div className="d-inline">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <h3 className="ml-3 display-4">
            <strong>MI CUENTA</strong>
          </h3>
          <img
            style={{ width: "300px", height: "300px" }}
            className="rounded-circle shadow-4-strong img-fluid mt-5 ml-8"
            src="https://seedb.s3.amazonaws.com/dummy.jpg"
            alt={"Foto de Perfil"}
          />
          <div className="mt-7">
            <div className="col-md-10 col-sm-12">
              <div
                className="row ml-1 d-flex align-items-center"
                style={{
                  backgroundColor: "#EBEBEB",
                  minWidth: "26vh",
                  minHeight: "63px",
                  maxHeight: "63px",
                  color: "#4D4D4D",
                }}
              >
                <i
                  className="col-md-2 col-sm-1 fas fa-user-alt"
                  style={{ fontSize: "22px" }}
                ></i>
                <h4
                  className="col-md-8 col-sm-1 mt-2"
                  style={{ fontSize: "17px" }}
                >
                  Mis datos personales
                </h4>
                <i
                  className="col-md-1 col-sm-1 fas fa-chevron-right"
                  style={{ fontSize: "22px" }}
                ></i>
              </div>
              <div
                className="row ml-1 d-flex align-items-center mt-2"
                style={{
                  backgroundColor: "#EBEBEB",
                  minWidth: "26vh",
                  minHeight: "63px",
                  maxHeight: "63px",
                  color: "#4D4D4D",
                }}
              >
                <i
                  className="col-md-2 col-sm-1 fas fa-credit-card"
                  style={{ fontSize: "21px" }}
                ></i>
                <h4
                  className="col-md-8 col-sm-1 mt-2"
                  style={{ fontSize: "16px" }}
                >
                  Mis tarjetas
                </h4>
                <i
                  className="col-md-1 col-sm-1 fas fa-chevron-right"
                  style={{ fontSize: "21px" }}
                ></i>
              </div>
              <div
                className="row ml-1 d-flex align-items-center mt-2"
                style={{
                  backgroundColor: "#EBEBEB",
                  minWidth: "26vh",
                  minHeight: "63px",
                  maxHeight: "63px",
                  color: "#4D4D4D",
                }}
              >
                <i
                  class="fas fa-shopping-bag col-md-2 col-sm-1"
                  style={{ fontSize: "23px" }}
                ></i>
                <h4
                  className="col-md-8 col-sm-1 mt-2"
                  style={{ fontSize: "16px" }}
                >
                  Mis compras
                </h4>
                <i
                  className="col-md-1 col-sm-1 fas fa-chevron-right"
                  style={{ fontSize: "21px" }}
                ></i>
              </div>
              <div
                className="row ml-1 d-flex align-items-center mt-2"
                style={{
                  backgroundColor: "#EBEBEB",
                  minWidth: "26vh",
                  minHeight: "63px",
                  maxHeight: "63px",
                  color: "#4D4D4D",
                }}
              >
                <i
                  className="col-md-2 col-sm-1 fas fa-star"
                  style={{ fontSize: "21px" }}
                ></i>
                <h4
                  className="col-md-8 col-sm-1 mt-2"
                  style={{ fontSize: "16px" }}
                >
                  Wishlist
                </h4>
                <i
                  className="col-md-1 col-sm-1 fas fa-chevron-right"
                  style={{ fontSize: "21px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  </BrowserRouter>
);

ProfileView.propTypes = {};

export default ProfileView;
