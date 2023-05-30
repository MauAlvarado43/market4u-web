import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";

function Logout({ history }) {
  const [callLogout] = usePost("/auth/logout", {
    onCompleted: () => {
      sessionStorage.clear();
      localStorage.clear();
      history.replace("/login");
      window.reload();
    },
    onError: () => {
      sessionStorage.clear();
      localStorage.clear();
      history.replace("/login");
    },
  });

  useEffect(() => callLogout(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div />;
}

Logout.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Logout;
