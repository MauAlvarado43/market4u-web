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
import { FilterProvider } from "components/helpers/FilterContext";

import Sales from "components/sales/Sales";

import CategorySA from "components/superadmin/category/CategorySA";
import OpinionSA from "components/superadmin/opinion/OpinionSA"
import SalesSA from "components/superadmin/sales/SalesSA"
import productsSA from "components/superadmin/products/productsSA"



import UsersSA from "components/superadmin/users/UsersSA"
import CompaniesSA from "components/superadmin/companies/CompaniesSA"

import Users from "components/users/Users"


const AppView = () =>
<FilterProvider>
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
        <Route path="/sales" component={Sales} />
        <Route path="/superadmin/category" component={CategorySA} />
        <Route path="/superadmin/opinion" component={OpinionSA} />
        <Route path="/superadmin/sales" component={SalesSA} />
        <Route path="/superadmin/products" component={productsSA} />
        {/**/}
        <Route path="/superadmin/users" component={UsersSA} />
        <Route path="/superadmin/companies" component={CompaniesSA} />

        <Route path="/users" component={Users} />
        {/**/}
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </div>
</FilterProvider>;

AppView.propTypes = {};

export default AppView;