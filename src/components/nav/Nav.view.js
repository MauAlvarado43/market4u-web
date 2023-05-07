import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Link } from "react-router-dom";

const NavView = ({ user }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white"
    style={{ height: "22vh", marginLeft: "0vw", marginTop: "-4vh", marginBottom: "1vh" }}>
    <div class="container-fluid">
      <Link to={`/home`}>
        <a class="navbar-brand ml-4">
          <img src="/theme/svg/logos/m4u.svg" alt="Logo" height="65" />
        </a>
      </Link>
      <div className="d-flex flex-grow-1 justify-content-center text-center mb-3 mt-3">
        <form className="w-100 text-center col-md-8">
          <div className="input-group">
            <span className="input-group-prepend"
              style={{ backgroundColor: "#D9D9D9" }}>
              <button className="btn border-0" type="button">
                <i className="fas fa-microphone-alt fa-lg"></i>
              </button>
            </span>
            <input type="text"
              style={{ backgroundColor: "#D9D9D9", fontColor: "black", fontSize: "1.3rem" }}
              className="form-control rounded-0 border-0 text-center"
              placeholder="Buscar productos" />
            <span class="input-group-prepend ml-auto"
              style={{ backgroundColor: "#D9D9D9" }}>
              <button className="btn border-0" type="button">
                <i className="fas fa-search fa-lg"></i>
              </button>
            </span>
          </div>
        </form>
      </div>
      <span className="mr-3 mt-1" style={{ fontSize: "25px", onCursor: "pointer" }}>
        <i className="fas fa-heart"></i>
      </span>
      <span class="mr-3 mt-1" style={{ fontSize: "25px", onCursor: "pointer" }}>
        <i class="fas fa-shopping-cart"></i>
      </span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link">
            <Link to="/profile/info">
              <img
                src={user?.photo?.url}
                alt="Foto de Perfil" class="rounded-circle"
                height="50" />
            </Link>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

NavView.propTypes = {
  users: PropTypes.array
};

export default NavView;
