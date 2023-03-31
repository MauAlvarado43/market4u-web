/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import SaleDetails from "seed/examples/components/sales/Details";
import SaleList from "seed/examples/components/sales/List";
import SaleFormSave from "seed/examples/components/sales/FormSave";
import SaleFormSet from "seed/examples/components/sales/FormSet";
import { ModalRoute } from "seed/helpers";

const SalesView = () =>
  <BrowserRouter basename="/examples/sales">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Sales</h1>
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
    <SaleList />

    {/* Modals */}
    <ModalRoute
        path="/:saleId(\d+)"
        component={SaleDetails} />
    <ModalRoute
      path="/create"
      component={SaleFormSave} />
    <ModalRoute
      path="/:saleId(\d+)/edit"
      component={SaleFormSet} />

    </div>
  </BrowserRouter>;

SalesView.propTypes = {};

export default SalesView;