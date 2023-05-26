import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Range } from "react-range";
import Filters from "components/nav/Filter";

const NavView = ({
  user,
  showFilterIcon,
  showModal,
  handleModalToggle,
  handleChange,
  values
}) => (
  <>
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light bg-white"
      style={{
        height: "15vh",
        marginLeft: "0vw",
        marginBottom: "1vh",
      }}
    >
      <div class="container-fluid">
        {user?.type == "NORMAL" & showFilterIcon ? (
            <span
              className="mr-3 mt-1"
              style={{ fontSize: "45px" }}
              onClick={handleModalToggle}
            >
              <i
                className="fas fa-bars"
                style={{ cursor: "pointer", color: "black" }}
              ></i>
            </span>
        ) : null}
        <Link to={`/home`}>
          <a class="navbar-brand ml-2">
            <img src="/theme/img/market4u.png" alt="Logo" height="80" />
          </a>
        </Link>
        {user.type == "NORMAL" ? (
          <div className="d-flex flex-grow-1 justify-content-center text-center mb-3 mt-3">
            <form className="w-100 text-center col-md-8">
              <div className="input-group">
                <span
                  className="input-group-prepend"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <button className="btn border-0" type="button">
                    <i className="fas fa-microphone-alt fa-lg"></i>
                  </button>
                </span>
                <input
                  type="text"
                  style={{
                    backgroundColor: "#D9D9D9",
                    fontColor: "black",
                    fontSize: "1.3rem",
                  }}
                  className="form-control rounded-0 border-0 text-center"
                  placeholder="Buscar productos"
                />
                <span
                  class="input-group-prepend ml-auto"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <button className="btn border-0" type="button">
                    <i className="fas fa-search fa-lg"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
        ) : 
        (
          <div className="d-flex flex-grow-1 justify-content-center text-center mb-3 mt-3">
            <div className="w-100 text-center col-md-8">
              Hola
            </div>
          </div>
        )
        }

        <Link to={`/wishlist`}>
          <span
            className="mr-3 mt-1"
            style={{ fontSize: "25px", cursor: "pointer", color: "red" }}
          >
            <i className="fas fa-heart"></i>
          </span>
        </Link>
        <span class="mr-3 mt-1" style={{ fontSize: "25px", cursor: "pointer" }}>
          <Link to="/cart">
            <i class="fas fa-shopping-cart"></i>
          </Link>
        </span>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              <Link to="/profile/info">
                <img
                  src={user?.photo?.url}
                  alt="Foto de Perfil"
                  class="rounded-circle"
                  height="60"
                />
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {showModal && (
      <Filters
        user={user}
        values={values}
        handleChange={handleChange}
        handleModalToggle={handleModalToggle} />
    )}
  </>
);

NavView.propTypes = {
  user: PropTypes.array,
  showFilterIcon: PropTypes.bool,
  showModal: PropTypes.bool,
  handleModalToggle: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.array
};

export default NavView;
