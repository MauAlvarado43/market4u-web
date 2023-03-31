/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import PaymentDetails from "seed/examples/components/payments/Details";
import PaymentList from "seed/examples/components/payments/List";
import PaymentFormSave from "seed/examples/components/payments/FormSave";
import PaymentFormSet from "seed/examples/components/payments/FormSet";
import { ModalRoute } from "seed/helpers";

const PaymentsView = () =>
  <BrowserRouter basename="/examples/payments">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Payments</h1>
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
    <PaymentList />

    {/* Modals */}
    <ModalRoute
        path="/:paymentId(\d+)"
        component={PaymentDetails} />
    <ModalRoute
      path="/create"
      component={PaymentFormSave} />
    <ModalRoute
      path="/:paymentId(\d+)/edit"
      component={PaymentFormSet} />

    </div>
  </BrowserRouter>;

PaymentsView.propTypes = {};

export default PaymentsView;