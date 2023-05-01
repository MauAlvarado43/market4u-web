import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route, FileField } from "seed/helpers"
import ProfileButton from "components/nav/ProfileButton";
import InfoUser from "components/profile/InfoUser";

const ProfileView = ({
  users,
  profileImg,
  handleImgChange,

}) => (
  <BrowserRouter>
    <div className="w-100" style={{ minHeight: "18vh" }}></div>
    {users.map((user) => (
    <div key={user.id}>
      <div className="row justify-content-center">
        <div className="col-md-2">
          <h3 className="ml-3 display-4">
            <strong>MI CUENTA</strong>
          </h3>
          {user.type === "SELLER" ? (
           <FileField>
            <div className="position-relative">
              <label htmlFor="profileImg">
                <img
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="rounded-circle shadow-4-strong img-fluid mt-5 ml-3"
                  src={profileImg || user.photo.url}
                  alt="Foto de Perfil"
                />
              </label>
              <input
                type="file"
                id="profileImg"
                accept="image/*"
                onChange={handleImgChange}
                style={{ display: "none" }}
              />
            </div>
            <img
              className="rounded-circle shadow-4-strong img-fluid position-absolute"
              src={user.company.photo.url}
              alt={"Foto de la empresa"}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                objectPosition: "center",
                top: "55%",
                left: "78%",
                transform: "translate(-50%, -100%)",
                zIndex: 10,
                border: "2px solid white",
              }}
            />
           </FileField> 
          ) :
          <img
            style={{ width: "300px", height: "300px",
              objectFit: "cover", objectPosition: "center"}}
            className="rounded-circle shadow-4-strong img-fluid mt-5 ml-3"
            src={user.photo.url}
            alt={"Foto de Perfil"}
          />
          }
          <div className="mt-5 w-100">
            <div>
              {user.type === "NORMAL" ? 
              <>
                <ProfileButton
                  text={"Mis datos personales"}
                  icon_left={"fas fa-user-alt col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Mis tarjetas"}
                  icon_left={"fas fa-credit-card col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Mis compras"}
                  icon_left={"fas fa-shopping-bag col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Wishlist"}
                  icon_left={"fas fa-star col-md-2 col-sm-1"}
                />
              </>
              :
              null}
              {user.type === "ADMIN" ? 
              <>
                <ProfileButton
                  text={"Datos generales"}
                  icon_left={"fas fa-user-alt col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Ofertas"}
                  icon_left={"fas fa-percent col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Productos"}
                  icon_left={"fas fa-stream col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Ventas"}
                  icon_left={"fas fa-clipboard col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Usuarios"}
                  icon_left={"fas fa-user-friends col-md-2 col-sm-1"}
                />
              </>  
              : null}
              {user.type === "SELLER"?
              <>
                <ProfileButton
                  text={"Mis datos personales"}
                  icon_left={"fas fa-user-alt col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Ofertas"}
                  icon_left={"fas fa-percent col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Productos"}
                  icon_left={"fas fa-stream col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Ventas"}
                  icon_left={"fas fa-clipboard col-md-2 col-sm-1"}
                />
              </>  
              : null}
              {user.type === "SUPERADMIN"? 
              <>
                <ProfileButton
                  text={"Mis datos personales"}
                  icon_left={"fas fa-user-alt col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Empresas"}
                  icon_left={"fas fa-building col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Productos"}
                  icon_left={"fas fa-stream col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Usuarios"}
                  icon_left={"fas fa-user-friends col-md-2 col-sm-1"}
                />
                <ProfileButton
                  text={"Ofertas"}
                  icon_left={"fas fa-percent col-md-2 col-sm-1"}
                />
              </>
              : null}
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/profile/info" component={InfoUser}/>
        </Switch>
      </div>
    </div>
    ))}
  </BrowserRouter>
);

ProfileView.propTypes = {
  users: PropTypes.object,
  onSubmit: PropTypes.func,
  profileImg: PropTypes.string,
  handleProfileImgChange: PropTypes.func,
};

export default ProfileView;
