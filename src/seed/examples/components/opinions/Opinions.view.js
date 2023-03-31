/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import OpinionDetails from "seed/examples/components/opinions/Details";
import OpinionList from "seed/examples/components/opinions/List";
import OpinionFormSave from "seed/examples/components/opinions/FormSave";
import OpinionFormSet from "seed/examples/components/opinions/FormSet";
import { ModalRoute } from "seed/helpers";

const OpinionsView = () =>
  <BrowserRouter basename="/examples/opinions">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Opinions</h1>
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
    <OpinionList />

    {/* Modals */}
    <ModalRoute
        path="/:opinionId(\d+)"
        component={OpinionDetails} />
    <ModalRoute
      path="/create"
      component={OpinionFormSave} />
    <ModalRoute
      path="/:opinionId(\d+)/edit"
      component={OpinionFormSet} />

    </div>
  </BrowserRouter>;

OpinionsView.propTypes = {};

export default OpinionsView;