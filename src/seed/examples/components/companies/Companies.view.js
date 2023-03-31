/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import CompanyDetails from "seed/examples/components/companies/Details";
import CompanyList from "seed/examples/components/companies/List";
import CompanyFormSave from "seed/examples/components/companies/FormSave";
import CompanyFormSet from "seed/examples/components/companies/FormSet";
import { ModalRoute } from "seed/helpers";

const CompaniesView = () =>
  <BrowserRouter basename="/examples/companies">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Companies</h1>
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
    <CompanyList />

    {/* Modals */}
    <ModalRoute
        path="/:companyId(\d+)"
        component={CompanyDetails} />
    <ModalRoute
      path="/create"
      component={CompanyFormSave} />
    <ModalRoute
      path="/:companyId(\d+)/edit"
      component={CompanyFormSet} />

    </div>
  </BrowserRouter>;

CompaniesView.propTypes = {};

export default CompaniesView;