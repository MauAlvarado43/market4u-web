/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"
import { ScriptTag } from "seed/helpers";
import Carts from "seed/examples/components/carts/Carts";
import Categories from "seed/examples/components/categories/Categories";
import Companies from "seed/examples/components/companies/Companies";
import Messages from "seed/examples/components/messages/Messages";
import Opinions from "seed/examples/components/opinions/Opinions";
import Payments from "seed/examples/components/payments/Payments";
import Products from "seed/examples/components/products/Products";
import Purchases from "seed/examples/components/purchases/Purchases";
import Sales from "seed/examples/components/sales/Sales";
import Users from "seed/examples/components/users/Users";
import Sidenav from "seed/examples/components/nav/Sidenav";
import Topnav from "seed/examples/components/nav/Topnav";

const HomeView = () =>
  <div>
    <Topnav />
    <Sidenav />

    <main id="content" role="main" class="main">
    <Switch>
      <Route path="/carts" component={Carts } />
      <Route path="/categories" component={Categories } />
      <Route path="/companies" component={Companies } />
      <Route path="/messages" component={Messages } />
      <Route path="/opinions" component={Opinions } />
      <Route path="/payments" component={Payments } />
      <Route path="/products" component={Products } />
      <Route path="/purchases" component={Purchases } />
      <Route path="/sales" component={Sales } />
      <Route path="/users" component={Users } />
    </Switch>
      <div class="footer">
        <div class="row justify-content-between align-items-center">
          <div class="col">
            <p class="font-size-sm mb-0">
                &copy; SeedProject. <span class="d-none d-sm-inline-block">2021.</span>
             </p>
          </div>
        </div>
      </div>

    </main>

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
  </div>;

HomeView.propTypes = {};

export default HomeView;