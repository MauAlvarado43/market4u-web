import React from "react";
import PropTypes from "prop-types";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Route } from "seed/helpers";
import Nav from "components/nav/Nav";
import ProfileInfo from "components/profile/Profile";
import CategorySA from "components/superadmin/category/CategorySA";
import OpinionSA from "components/superadmin/opinion/OpinionSA";
import SalesSA from "components/superadmin/sales/SalesSA";
import productsSA from "components/superadmin/products/productsSA";
import UsersSA from "components/superadmin/users/UsersSA";
import CompaniesSA from "components/superadmin/companies/CompaniesSA";

const HomeView = ({
  user_type
}) => (
  <BrowserRouter>
    <Switch>
      <div>
        <Nav />
        <div id="content">
          <Switch>
            <Route path="/superadmin/category" component={CategorySA} />
            <Route path="/superadmin/opinion" component={OpinionSA} />
            <Route path="/superadmin/sales" component={SalesSA} />
            <Route path="/superadmin/products" component={productsSA} />
            <Route path="/superadmin/users" component={UsersSA} />
            <Route path="/superadmin/companies" component={CompaniesSA} />
            <Route path="/profile/info" component={ProfileInfo} />
            {user_type == "SUPERADMIN" && <Redirect to="/profile/info" component={ProfileInfo} />}
            {user_type == "NORMAL" && <Redirect to="/home" component={ProfileInfo} />}
          </Switch>
        </div>
      </div>
    </Switch>
  </BrowserRouter>
);

HomeView.propTypes = {};

export default HomeView;