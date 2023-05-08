import React from "react";
import PropTypes from "prop-types";
import View from "components/nav/Nav.view";
import { useDetail } from "seed/gql";
import { Loading } from "seed/helpers";

function Nav() {
  const reqUser = useDetail(`{
    user {
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

  console.log(reqUser);

  if (reqUser.loading) return <Loading />;
  if (reqUser.error) return "Error";

  const { user = {} } = reqUser.data;

  return <View user={user} />;
}

Nav.propTypes = {};

export default Nav;
