import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import { Route, FileField } from "seed/helpers"
import ProfileButton from "components/nav/ProfileButton";
import InfoUser from "components/profile/InfoUser";
import InfoCards from "components/profile/InfoCards";
import ModalRoute from "components/helpers/ModalRoute";
import DeleteCard from "components/profile/DeleteCard";

const ProfileView = ({
  users
}) => (
  <BrowserRouter basename="/profile">
    {users && users.map((user) => (
      <div key={user.id} style = {{overflowX:"hidden"}}>
        <div className="row justify-content-center">
          <div className="col-md-2">
            <h3 className="ml-3 display-4">
              <strong>MI CUENTA</strong>
            </h3>
            {user?.type === "SELLER" ? (
              <>
                <div className="position-relative">
                  <label htmlFor="profileImg">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="rounded-circle shadow-4-strong img-fluid mt-5 ml-3"
                      src={user?.photo?.url}
                      alt="Foto de Perfil"
                    />
                  </label>
                  <img
                    className="rounded-circle shadow-4-strong img-fluid position-absolute"
                    src={user?.company?.photo?.url}
                    alt={"Foto de la empresa"}
                    style={{
                      width: "3.5vw",
                      height: "3.5vw",
                      objectFit: "cover",
                      objectPosition: "center",
                      bottom: "1.8vh",
                      right: "0",
                      transform: "translate(-40%, 50%)",
                      zIndex: 10,
                      border: "2px solid white",
                    }}
                  />
                </div>
              </> 
            ) :
              <img
                style={{
                  width: "300px", height: "300px",
                  objectFit: "cover", objectPosition: "center"
                }}
                className="rounded-circle shadow-4-strong img-fluid mt-5 ml-3"
                src={user?.photo?.url}
                alt={"Foto de Perfil"}
              />
            }
            <div className="mt-5 w-100">
              <div>
                {user?.type === "NORMAL" ?
                  <>
                    <Link to="/info">
                      <ProfileButton
                        text={"Mis datos personales"}
                        icon_left={"fas fa-user-alt col-md-2 col-sm-1"}
                      />
                    </Link>
                    <Link to="/payments">
                      <ProfileButton
                        text={"Mis tarjetas"}
                        icon_left={"fas fa-credit-card col-md-2 col-sm-1"}
                      />
                    </Link>
                    <ProfileButton
                      text={"Mis compras"}
                      icon_left={"fas fa-shopping-bag col-md-2 col-sm-1"}
                    />
                    <div
                      style={{cursor:"pointer"}} 
                      onClick={() => { window.location.replace("/wishlist")}}>
                      <ProfileButton
                        text={"Wishlist"}
                        icon_left={"fas fa-star col-md-2 col-sm-1"}
                      />
                    </div>
                  </>
                  :
                  null}
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/info" component={InfoUser} />
            <Route path="/payments" component={InfoCards} />
          </Switch>
        </div>
      </div>
    ))}


    <ModalRoute
      path="/payments/:cardId(\d+)/delete"
      component={DeleteCard} 
      width="400"
      height="400" 
      style = {{position:"fixed", marginTop:"0", marginLeft:"0"}}
    />

  </BrowserRouter>
);

ProfileView.propTypes = {
  users: PropTypes.object,
  onSubmit: PropTypes.func,
  profileImg: PropTypes.string,
  handleProfileImgChange: PropTypes.func,
};

export default ProfileView;
