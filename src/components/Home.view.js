import React from "react";
import PropTypes from "prop-types";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Route } from "seed/helpers"
import { ScriptTag } from "seed/helpers";
import Nav from "components/nav/Nav";
import Main from "components/main/Main";
import Profile from "components/profile/Profile";
import Sales from "components/sales/Sales";
import Products from "components/products/Products";
import History from "components/history/History";
import ProductDetail from "components/products/Detail";
import WishList from "components/wishlist/WishList";
import orders from "./companyOrders/Manage Orders/Manage orders.view";
import detailsorder from "./companyOrders/Orders Detalis/details.view";

const HomeView = () =>
  <BrowserRouter>
    <Switch>
      <div>

        <Nav/>

        <div id="content">
          <Switch>
            <Route path="/wishlist" component={WishList} />
            <Route path="/home" component={Main}/>
            <Route path="/profile" component={Profile} />
            <Route path="/sales" component={Sales} />
            <Route path="/products" component={Products} />
            <Route path="/history" component={History} />
            <Route path="/orders" component={orders} />
            <Route path="/detorders" component={detailsorder} />
            <Route path="/product/:productId(\d+)" component={ProductDetail} />
            <Redirect to="/home" />
          </Switch>

        </div>

      </div>
    </Switch>
  </BrowserRouter>;

HomeView.propTypes = {
  filterValuesRef: PropTypes.object
};

export default HomeView;