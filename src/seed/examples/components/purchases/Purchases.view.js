/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import PurchaseDetails from "seed/examples/components/purchases/Details";
import PurchaseList from "seed/examples/components/purchases/List";
import PurchaseFormSave from "seed/examples/components/purchases/FormSave";
import PurchaseFormSet from "seed/examples/components/purchases/FormSet";
import { ModalRoute } from "seed/helpers";

const PurchasesView = () =>
  <BrowserRouter basename="/examples/purchases">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Purchases</h1>
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
    <PurchaseList />

    {/* Modals */}
    <ModalRoute
        path="/:purchaseId(\d+)"
        component={PurchaseDetails} />
    <ModalRoute
      path="/create"
      component={PurchaseFormSave} />
    <ModalRoute
      path="/:purchaseId(\d+)/edit"
      component={PurchaseFormSet} />

    </div>
  </BrowserRouter>;

PurchasesView.propTypes = {};

export default PurchasesView;