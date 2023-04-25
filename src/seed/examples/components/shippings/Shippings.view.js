/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import ShippingDetails from "seed/examples/components/shippings/Details";
import ShippingList from "seed/examples/components/shippings/List";
import ShippingFormSave from "seed/examples/components/shippings/FormSave";
import ShippingFormSet from "seed/examples/components/shippings/FormSet";
import { ModalRoute } from "seed/helpers";

const ShippingsView = () =>
  <BrowserRouter basename="/examples/shippings">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Shippings</h1>
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
    <ShippingList />

    {/* Modals */}
    <ModalRoute
        path="/:shippingId(\d+)"
        component={ShippingDetails} />
    <ModalRoute
      path="/create"
      component={ShippingFormSave} />
    <ModalRoute
      path="/:shippingId(\d+)/edit"
      component={ShippingFormSet} />

    </div>
  </BrowserRouter>;

ShippingsView.propTypes = {};

export default ShippingsView;