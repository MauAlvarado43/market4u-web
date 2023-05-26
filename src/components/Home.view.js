import React from "react";
import PropTypes from "prop-types";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Route } from "seed/helpers"
import Nav from "components/nav/Nav";
import Main from "components/main/Main";
import Profile from "components/profile/Profile";
import Sales from "components/sales/Sales";
import Products from "components/products/Products";
import History from "components/history/History";
import ProductDetail from "components/products/Detail";
import WishList from "components/wishlist/WishList";
import Cart from "components/cart/Main";
import CategorySA from "components/superadmin/category/CategorySA";
import OpinionSA from "components/superadmin/opinion/OpinionSA";
import SalesSA from "components/superadmin/sales/SalesSA";
import productsSA from "components/superadmin/products/productsSA";
import UsersSA from "components/superadmin/users/UsersSA";
import CompaniesSA from "components/superadmin/companies/CompaniesSA";

const HomeView = ({
  user_type
}) =>
  <BrowserRouter>
    <Switch>
      <div>
        <Nav/>
        <div id="content">
          <Switch>
            <Route path="/superadmin/categorySA" component={CategorySA} />
            <Route path="/superadmin/opinions" component={OpinionSA} />
            <Route path="/superadmin/sales" component={SalesSA} />
            <Route path="/superadmin/products" component={productsSA} />
            <Route path="/superadmin/users" component={UsersSA} />
            <Route path="/superadmin/companies" component={CompaniesSA} />
            <Route path="/wishlist" component={WishList} />
            <Route path="/home" component={Main}/>
            <Route path="/profile" component={Profile} />
            <Route path="/sales" component={Sales} />
            <Route path="/products" component={Products} />
            <Route path="/history" component={History} />
            <Route path="/product/:productId(\d+)" component={ProductDetail} />
            <Route path="/cart" component={Cart} />
            {user_type == "SUPERADMIN" && <Redirect to="/profile/info"/>}
            {user_type == "NORMAL" && <Redirect to="/home"/>}
          </Switch>
        </div>
      </div>
    </Switch>
  </BrowserRouter>;

HomeView.propTypes = {
  filterValuesRef: PropTypes.object
};

export default HomeView;