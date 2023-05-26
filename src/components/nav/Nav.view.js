import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import Filters from "components/nav/Filter";
import { Typeahead } from "react-bootstrap-typeahead";

const NavView = ({
  user,
  values,
  search,
  products,
  showModal,
  searchRef,
  handleChange,
  showFilterIcon,
  handleModalToggle,
  handleChangeSearch,
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
        {(user?.type == "NORMAL") & showFilterIcon ? (
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
        {user.type === "NORMAL" ? (
          <div className="d-flex flex-grow-1 justify-content-center text-center mb-3 mt-3">
            <div className="w-100 text-center col-md-8 mt-2">
              <Typeahead
                ref={searchRef}
                placeholder="Buscar productos"
                onInputChange={handleChangeSearch}
                labelKey={(option) => `${option.name}`}
                onChange={(selected) =>
                  selected.length > 0
                    ? (window.location.href = `/product/${selected[0].id}`)
                    : null
                }
                options={products}
                maxResults={5}
                className="row align-items-center"
              >
                {search.length === 0 && (
                  <i
                    className="fas fa-search"
                    style={{ marginLeft: "-2vw", zIndex: 1 }}
                  />
                )}
                {search.length > 0 && (
                  <i
                    className="fas fa-times rbt-close text-danger"
                    role="button"
                    onClick={() => {
                      handleChangeSearch("");
                      searchRef.current.clear();
                    }}
                    style={{ marginLeft: "-2vw", zIndex: 1 }}
                  />
                )}
              </Typeahead>
            </div>
          </div>
        ) : null}

        {user?.type === "NORMAL" ? (
          <>
            <Link to={`/wishlist`}>
              <span
                className="mr-3 mt-1"
                style={{ fontSize: "25px", cursor: "pointer", color: "red" }}
              >
                <i className="fas fa-heart"></i>
              </span>
            </Link>
            <span
              class="mr-3 mt-1"
              style={{ fontSize: "25px", cursor: "pointer" }}
            >
              <Link to="/cart">
                <i class="fas fa-shopping-cart"></i>
              </Link>
            </span>
          </>
        ) : user.type == "SUPERADMIN" ? (
          <div className="d-flex flex-grow-1 justify-content-end align-items-center mb-3 mt-3">
            <div className="w-100 text-right col-md-8">
              <div className="d-flex flex-wrap justify-content-end">
                <NavLink
                  to="/profile/info"
                  activeClassName="active-link"
                  className="btn btn-primary mx-2"
                >
                  Mi cuenta
                </NavLink>
                <NavLink
                  to="/superadmin/categorySA"
                  activeClassName="active-link"
                  className="btn btn-primary mx-2"
                >
                  Categorías
                </NavLink>
                <NavLink
                  to="/superadmin/companies"
                  activeClassName="active-link"
                  className="btn btn-primary mx-2"
                >
                  Compañías
                </NavLink>
                <NavLink
                  to="/superadmin/opinions"
                  activeClassName="active-link"
                  className="btn btn-primary mx-2"
                >
                  Opiniones
                </NavLink>
                <NavLink
                  to="/superadmin/products"
                  activeClassName="active-link"
                  className="btn btn-primary mx-2"
                >
                  Productos
                </NavLink>
                <NavLink
                  to="/superadmin/sales"
                  activeClassName="active-link"
                  className="btn btn-primary mx-2"
                >
                  Ofertas
                </NavLink>
                <NavLink
                  to="/superadmin/users"
                  activeClassName="active-link"
                  className="btn btn-primary mx-2"
                >
                  Usuarios
                </NavLink>
              </div>
            </div>
          </div>
        ) : null}
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
        handleModalToggle={handleModalToggle}
      />
    )}
  </>
);

NavView.propTypes = {
  user: PropTypes.array,
  showFilterIcon: PropTypes.bool,
  showModal: PropTypes.bool,
  handleModalToggle: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.array,
};

export default NavView;
