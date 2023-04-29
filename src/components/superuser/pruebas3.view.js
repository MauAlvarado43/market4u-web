/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import SaleList from "components/superuser/pruebas2";
import SaleFormSet from "components/superuser/pruebasSet";
import { ModalRoute } from "seed/helpers";


import Create from "components/superuser/Pruebas";

const SalesView = () =>
    <BrowserRouter basename="pruebas3">
        <div class="content container-fluid">

            {/* Header */}
            <div class="page-header">
                <div class="row align-items-end">

                    <div class="col-sm">
                        <h1 class="page-header-title">Sales</h1>
                    </div>

                </div>
            </div>

            {/* List */}
            <SaleList />

            {/* Modals */}
            <ModalRoute
                path="/:saleId(\d+)/edit"
                component={SaleFormSet} />
            <ModalRoute
                path="/create"
                component={Create} />
            <ModalRoute
                path="/:saleId(\d+)/delete"
                component={SaleFormSet} />

        </div>
    </BrowserRouter>;

SalesView.propTypes = {};

export default SalesView;