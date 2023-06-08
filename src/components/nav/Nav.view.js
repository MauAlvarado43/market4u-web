import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import Filters from "components/nav/Filter";
import { Typeahead } from "react-bootstrap-typeahead";
import { Dropdown } from "react-bootstrap";
import css from "styles/Navlink.scss";

const NavView = ({
  user,
  values,
  search,
  products,
  showModal,
  searchRef,
  handleChange,
  isSmallScreen,
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
        marginTop: "-1vh",
        marginBottom: "1vh",
      }}
    >
      <div className="container-fluid">
        {(user?.type === "NORMAL") && showFilterIcon ? (
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
        <Link
          to={
            user.type === "NORMAL"
              ? `/home`
              : user.type === "SUPERADMIN" || user.type === "ADMIN" || user.type === "SELLER"
                ? `/profile/info`
                : null
          }
          className="navbar-brand ml-2"
        >
          <img src="/theme/img/market4u.png" alt="Logo" height="80" />
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
                maxResults={10}
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
              className="mr-3 mt-1"
              style={{ fontSize: "25px", cursor: "pointer" }}
            >
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </span>
          </>
        ) : user.type === "SUPERADMIN" && !isSmallScreen ? (
          <div className="d-flex flex-grow-1 justify-content-end align-items-center mb-3 mt-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/superadmin/categorySA"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Categorías
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/superadmin/companies"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Compañías
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/superadmin/opinions"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Opiniones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/superadmin/products"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/superadmin/sales"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Ofertas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/superadmin/users"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Usuarios
                </NavLink>
              </li>
            </ul>
          </div>
        ) : user.type === "SUPERADMIN" && isSmallScreen ? (
          <div className="d-flex flex-grow-1 justify-content-end align-items-center mb-3 mt-3">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="admin-dropdown">
              <i className="fas fa-bars"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="custom-dropdown-menu">
              <Dropdown.Item as={Link} to="/superadmin/categorySA" activeClassName="active">
                Categorías
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/superadmin/companies" activeClassName="active">
                Compañías
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/superadmin/opinions" activeClassName="active">
                Opiniones
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/superadmin/products" activeClassName="active">
                Productos
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/superadmin/sales" activeClassName="active">
                Ofertas
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/superadmin/users" activeClassName="active">
                Usuarios
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        ) : user.type === "ADMIN" ? (
          <div className="d-flex flex-grow-1 justify-content-end align-items-center mb-3 mt-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/sales"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Ofertas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/users"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Usuarios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/orders"
                  activeClassName="active"
                  className="nav-link h3"
                >
                  Pedidos
                </NavLink>
              </li>
            </ul>
          </div>
        )
          : user.type === "SELLER" ? (
            <div className="d-flex flex-grow-1 justify-content-end align-items-center mb-3 mt-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/products"
                    activeClassName="active"
                    className="nav-link h3"
                  >
                    Productos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/sales"
                    activeClassName="active"
                    className="nav-link h3"
                  >
                    Ofertas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/orders"
                    activeClassName="active"
                    className="nav-link h3"
                  >
                    Pedidos
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : null}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-menu">
                <a className="navlink">
                  <img
                    src={user?.photo?.url}
                    alt="Foto de Perfil"
                    className="rounded-circle"
                    height="60"
                  />
                </a>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile/info">
                  Mi perfil
                </Dropdown.Item>
                {
                  user.type == "NORMAL" && (
                    <Dropdown.Item as={Link} to="/history">
                      Mis compras
                    </Dropdown.Item>
                  )
                }
                <Dropdown.Item as={Link} to="/logout">
                  Cerrar Sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
  showFilterIcon: PropTypes.bool,
  showModal: PropTypes.bool,
  handleModalToggle: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.array,
  searchRef: PropTypes.object,
  handleChangeSearch: PropTypes.func,
  search: PropTypes.string,
  products: PropTypes.array
};

export default NavView;