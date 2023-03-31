/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import CategoryDetails from "seed/examples/components/categories/Details";
import CategoryList from "seed/examples/components/categories/List";
import CategoryFormSave from "seed/examples/components/categories/FormSave";
import CategoryFormSet from "seed/examples/components/categories/FormSet";
import { ModalRoute } from "seed/helpers";

const CategoriesView = () =>
  <BrowserRouter basename="/examples/categories">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Categories</h1>
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
    <CategoryList />

    {/* Modals */}
    <ModalRoute
        path="/:categoryId(\d+)"
        component={CategoryDetails} />
    <ModalRoute
      path="/create"
      component={CategoryFormSave} />
    <ModalRoute
      path="/:categoryId(\d+)/edit"
      component={CategoryFormSet} />

    </div>
  </BrowserRouter>;

CategoriesView.propTypes = {};

export default CategoriesView;