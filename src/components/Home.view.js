import React from "react";
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
import Filter from "components/nav/Filter";

const HomeView = () =>
  <BrowserRouter>
    <Switch>
      <div>

        <Nav />

        <div id="content">
          <Switch>
            <Route path="/home" component={Main} />
            <Route path="/profile" component={Profile} />
            <Route path="/sales" component={Sales} />
            <Route path="/products" component={Products} />
            <Route path="/history" component={History} />
            <Route path="/product/:productId(\d+)" component={ProductDetail} />
            <Redirect to="/home" />
          </Switch>

        </div>

        <ScriptTag content={`
          // Builder toggle invoker
          $('.js-navbar-vertical-aside-toggle-invoker').click(function () {
            $('.js-navbar-vertical-aside-toggle-invoker i').tooltip('hide');
          });

          // Initialization of navbar vertical navigation
          var sidebar = $('.js-navbar-vertical-aside').hsSideNav();

          // Initialization of tooltip in navbar vertical menu
          $('.js-nav-tooltip-link').tooltip({ boundary: 'window' })

          $(".js-nav-tooltip-link").on("show.bs.tooltip", function(e) {
            if (!$("body").hasClass("navbar-vertical-aside-mini-mode")) {
              return false;
            }
          });

          // Initialization of unfold
          $('.js-hs-unfold-invoker').each(function () {
            var unfold = new HSUnfold($(this)).init();
          });

          // Initialization of form search
          $('.js-form-search').each(function () {
            new HSFormSearch($(this)).init()
          });
      `} />
      </div>
    </Switch>
  </BrowserRouter>;

HomeView.propTypes = {};

export default HomeView;