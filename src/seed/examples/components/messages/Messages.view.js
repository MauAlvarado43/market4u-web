/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import MessageDetails from "seed/examples/components/messages/Details";
import MessageList from "seed/examples/components/messages/List";
import MessageFormSave from "seed/examples/components/messages/FormSave";
import MessageFormSet from "seed/examples/components/messages/FormSet";
import { ModalRoute } from "seed/helpers";

const MessagesView = () =>
  <BrowserRouter basename="/examples/messages">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Messages</h1>
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
    <MessageList />

    {/* Modals */}
    <ModalRoute
        path="/:messageId(\d+)"
        component={MessageDetails} />
    <ModalRoute
      path="/create"
      component={MessageFormSave} />
    <ModalRoute
      path="/:messageId(\d+)/edit"
      component={MessageFormSet} />

    </div>
  </BrowserRouter>;

MessagesView.propTypes = {};

export default MessagesView;