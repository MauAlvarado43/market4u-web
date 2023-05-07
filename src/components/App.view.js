import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"
import Home from "components/Home";
import Login from "components/auth/Login";
import Logout from "components/auth/Logout";
import Signup from "components/auth/Signup";
import VerifyEmail from "components/auth/VerifyEmail";
import RecoverPassword from "components/auth/RecoverPassword";
import RestorePassword from "components/auth/RestorePassword";

import Main from "components/main/Main"
import Products from "components/products/Products";

const AppView = () =>
  <div class="module">
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Logout} />
        <Route path="/verify_email/:token" component={VerifyEmail} />
        <Route path="/recover_password" component={RecoverPassword} />
        <Route path="/restore_password/:token" component={RestorePassword} />
        <Route path="/main" component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </div>;

AppView.propTypes = {};

export default AppView;