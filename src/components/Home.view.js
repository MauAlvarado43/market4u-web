import React from "react";
import PropTypes from "prop-types";
import { Switch, Redirect } from "react-router-dom";
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
import Chatbot from "components/chatbot/Chatbot";
import Users from "components/users/Users";
import Shippings from "components/shipping/Shipping"

const HomeView = ({
  user_type
}) =>
  <div>
    <Nav />
    {user_type == "NORMAL" && <Chatbot />}
    <div id="content">

      <Switch>

        <Route path="/superadmin/categorySA" component={CategorySA} />
        <Route path="/superadmin/opinions" component={OpinionSA} />
        <Route path="/superadmin/sales" component={SalesSA} />
        <Route path="/superadmin/products" component={productsSA} />
        <Route path="/superadmin/users" component={UsersSA} />
        <Route path="/superadmin/companies" component={CompaniesSA} />

        <Route path="/profile/info" component={Profile} />

        <Route path="/home" component={Main} />
        <Route path="/product/:productId(\d+)" component={ProductDetail} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/history" component={History} />
        <Route path="/cart" component={Cart} />

        <Route path="/sales" component={Sales} />
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
        <Route path="/orders" component={Shippings} />

        {/* {user_type == "SUPERADMIN" ?
            <>
              <Route path="/superadmin/categorySA" component={CategorySA} />
              <Route path="/superadmin/opinions" component={OpinionSA} />
              <Route path="/superadmin/sales" component={SalesSA} />
              <Route path="/superadmin/products" component={productsSA} />
              <Route path="/superadmin/users" component={UsersSA} />
              <Route path="/superadmin/companies" component={CompaniesSA} />
              <Route path="/profile/info" component={Profile} />
              <Redirect to="/profile/info" />
            </>
            : null}
          {user_type == "NORMAL" ?
            <>
              <Route path="/home" component={Main} />
              <Route path="/profile/info" component={Profile} />
              <Route path="/product/:productId(\d+)" component={ProductDetail} />
              <Route path="/wishlist" component={WishList} />
              <Route path="/history" component={History} />
              <Route path="/cart" component={Cart} />
              <Redirect to="/home" />
            </>
            : null}
          {(user_type == "ADMIN" || user_type == "SELLER") &&
            <>
              <Route to="/profile/info" component={Profile} />
              <Route path="/sales" component={Sales} />
              <Route path="/products" component={Products} />
              <Route path="/profile/info" component={Profile} />
              <Route path="/users" component={Users} />
              <Route path="/orders" component={Shippings} />
              <Redirect to="/profile/info" />
            </>} */}

      </Switch>

    </div>
  </div>;

HomeView.propTypes = {
  filterValuesRef: PropTypes.object,
  user_type: PropTypes.string
};

export default HomeView;