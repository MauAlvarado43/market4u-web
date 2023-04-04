/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { Link, NavLink } from "react-router-dom";

const SidenavView = () =>
  <aside class={`js-navbar-vertical-aside navbar navbar-vertical-aside
    navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered navbar-dark`}>
    <div class="navbar-vertical-container">
      <div class="navbar-vertical-footer-offset">
        <div class="navbar-brand-wrapper justify-content-between">
          {/* Logo */}
          <a class="navbar-brand" href="./index.html" aria-label="Front">
            <img class="navbar-brand-logo" src="/theme/svg/logos/logo-white.svg" alt="Logo" />
            <img class="navbar-brand-logo-mini" src="/theme/svg/logos/logo-short.svg" alt="Logo" />
          </a>

          {/* Vertical Toggle */}
          <button type="button" class={`js-navbar-vertical-aside-toggle-invoker
            navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark`}>
            <i class="tio-clear tio-lg"></i>
          </button>
        </div>

        {/* Content */}
        <div class="navbar-vertical-content">
          <ul class="navbar-nav navbar-nav-lg nav-tabs">
          
            {/* Menu */}
            
            {/* Carts */}
            <li class="navbar-item">
              <NavLink
                to="/carts"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Carts
                </span>
              </NavLink>
            </li>
            
            {/* Categories */}
            <li class="navbar-item">
              <NavLink
                to="/categories"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Categories
                </span>
              </NavLink>
            </li>
            
            {/* Companies */}
            <li class="navbar-item">
              <NavLink
                to="/companies"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Companies
                </span>
              </NavLink>
            </li>
            
            {/* Messages */}
            <li class="navbar-item">
              <NavLink
                to="/messages"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Messages
                </span>
              </NavLink>
            </li>
            
            {/* Opinions */}
            <li class="navbar-item">
              <NavLink
                to="/opinions"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Opinions
                </span>
              </NavLink>
            </li>
            
            {/* Payments */}
            <li class="navbar-item">
              <NavLink
                to="/payments"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Payments
                </span>
              </NavLink>
            </li>
            
            {/* Products */}
            <li class="navbar-item">
              <NavLink
                to="/products"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Products
                </span>
              </NavLink>
            </li>
            
            {/* Purchases */}
            <li class="navbar-item">
              <NavLink
                to="/purchases"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Purchases
                </span>
              </NavLink>
            </li>
            
            {/* Sales */}
            <li class="navbar-item">
              <NavLink
                to="/sales"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Sales
                </span>
              </NavLink>
            </li>
            
            {/* Shippings */}
            <li class="navbar-item">
              <NavLink
                to="/shippings"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Shippings
                </span>
              </NavLink>
            </li>
            
            {/* Users */}
            <li class="navbar-item">
              <NavLink
                to="/users"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Users
                </span>
              </NavLink>
            </li>
            
            <div class="dropdown-divider my-3" style={ {borderTopColor: "#ffffff20"} }></div>
            
            {/* Options */}
            <Link
              to="/logout"
              className="js-nav-tooltip-link nav-link">
              <i class="tio-sign-out nav-icon"></i>
              <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                Logout
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </div>

  </aside>;

SidenavView.propTypes = {};

export default SidenavView;