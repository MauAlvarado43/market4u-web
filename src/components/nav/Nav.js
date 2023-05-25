import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/nav/Nav.view";
import { useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const showFilterIcon = location.pathname.includes("/home");
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState([1000, 15000]);
  
  const handleChange = (newValues) => {
    setValues(newValues);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

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

  if (reqUser.loading) return <Loading />;
  if (reqUser.error) return "Error";

  const { user = {} } = reqUser.data;

  return <View
    user={user}
    values={values}
    showModal={showModal}
    handleChange={handleChange}
    showFilterIcon={showFilterIcon}
    handleModalToggle={handleModalToggle}
  />;
}

Nav.propTypes = {
  showFilterIcon: PropTypes.bool,
  user: PropTypes.object
};

export default Nav;
