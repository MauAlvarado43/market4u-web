import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileButtonView = ({
  text,
  icon_left
}) => (
  <div
    className="row ml-1 d-flex align-items-center mt-2"
    style={{
      backgroundColor: "#EBEBEB",
      minWidth: "20vh",
      maxWidth: "auto",
      color: "#4D4D4D",
    }}
  >
    <i
      className={icon_left}
      style={{ fontSize: "21px" }}
    ></i>
    <h4 className="col-md-8 col-sm-1 mt-2" style={{ fontSize: "16px" }}>
      {text}
    </h4>
    <i
      className="col-md-1 col-sm-1 fas fa-chevron-right"
      style={{ fontSize: "21px" }}
    ></i>
  </div>
);

ProfileButtonView.propTypes = {
  text: PropTypes.string,
  icon_left: PropTypes.string
};

export default ProfileButtonView;
