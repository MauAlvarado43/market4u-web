/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import VariantDetails from "seed/examples/components/variants/Details";
import VariantList from "seed/examples/components/variants/List";
import VariantFormSave from "seed/examples/components/variants/FormSave";
import VariantFormSet from "seed/examples/components/variants/FormSet";
import { ModalRoute } from "seed/helpers";

const VariantsView = () =>
  <BrowserRouter basename="/examples/variants">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Variants</h1>
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
    <VariantList />

    {/* Modals */}
    <ModalRoute
        path="/:variantId(\d+)"
        component={VariantDetails} />
    <ModalRoute
      path="/create"
      component={VariantFormSave} />
    <ModalRoute
      path="/:variantId(\d+)/edit"
      component={VariantFormSet} />

    </div>
  </BrowserRouter>;

VariantsView.propTypes = {};

export default VariantsView;