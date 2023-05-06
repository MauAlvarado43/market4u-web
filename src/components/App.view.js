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

import History from "components/history/History";

const AppView = () =>
  <div class="module">
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={Signup} />
        <Route path="/verify_email/:token" component={VerifyEmail} />
        <Route path="/recover_password" component={RecoverPassword} />
        <Route path="/restore_password/:token" component={RestorePassword} />
        <Route path="/history" component={History} />
        <Route path="/" component={Home} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  </div>;

AppView.propTypes = {};

export default AppView;