/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import VariantoptionDetails from "seed/examples/components/variantoptions/Details";
import VariantoptionList from "seed/examples/components/variantoptions/List";
import VariantoptionFormSave from "seed/examples/components/variantoptions/FormSave";
import VariantoptionFormSet from "seed/examples/components/variantoptions/FormSet";
import { ModalRoute } from "seed/helpers";

const VariantoptionsView = () =>
  <BrowserRouter basename="/examples/variantoptions">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Variantoptions</h1>
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
    <VariantoptionList />

    {/* Modals */}
    <ModalRoute
        path="/:variantoptionId(\d+)"
        component={VariantoptionDetails} />
    <ModalRoute
      path="/create"
      component={VariantoptionFormSave} />
    <ModalRoute
      path="/:variantoptionId(\d+)/edit"
      component={VariantoptionFormSet} />

    </div>
  </BrowserRouter>;

VariantoptionsView.propTypes = {};

export default VariantoptionsView;