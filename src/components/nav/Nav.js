import React, { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import View from "components/nav/Nav.view";
import { useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { useLocation } from "react-router-dom";
import { useQuery } from "seed/gql";
import { FilterContext } from "components/helpers/FilterContext";

function Nav() {
  
  const location = useLocation();
  const searchRef = useRef(null);
  const showFilterIcon = location.pathname.includes("/home");
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState([0, 100000]);
  const [search, setSearch] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = window.innerWidth < 1100;
  
  const reqProducts = useQuery(`{
    products {
      name
    }
  }`);
      
  const reqUser = useDetail(`{
    user {
      firstName
      type
      photo{
        id
        url
      }
      company{
        id
        photo{
          url
        }
      }
    }
  }`, sessionStorage.getItem("id"));

  const handleChangeSearch = (value) => 
    setSearch(value);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  if (reqUser.loading) return <Loading />;
  if (reqUser.error) return "Error";

  const { user = {} } = reqUser.data;
  const { products = [] } = reqProducts.data;

  return <View
    user={user}
    search={search}
    values={values}
    products={products}
    showModal={showModal}
    searchRef={searchRef}
    handleChange={handleChange}
    isSmallScreen={isSmallScreen}
    showFilterIcon={showFilterIcon}
    handleModalToggle={handleModalToggle}
    handleChangeSearch={handleChangeSearch}
  />;
}

Nav.propTypes = {
  showFilterIcon: PropTypes.bool,
  user: PropTypes.object
};

export default Nav;
