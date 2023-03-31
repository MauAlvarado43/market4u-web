/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import CartDetails from "seed/examples/components/carts/Details";
import CartList from "seed/examples/components/carts/List";
import CartFormSave from "seed/examples/components/carts/FormSave";
import CartFormSet from "seed/examples/components/carts/FormSet";
import { ModalRoute } from "seed/helpers";

const CartsView = () =>
  <BrowserRouter basename="/examples/carts">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Carts</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <CartList />

    {/* Modals */}
    <ModalRoute
        path="/:cartId(\d+)"
        component={CartDetails} />
    <ModalRoute
      path="/create"
      component={CartFormSave} />
    <ModalRoute
      path="/:cartId(\d+)/edit"
      component={CartFormSet} />

    </div>
  </BrowserRouter>;

CartsView.propTypes = {};

export default CartsView;