import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ModalRoute from "components/helpers/ModalRoute";
import Nav from "components/nav/Nav";
import PropTypes from "prop-types";
import List from "components/superadmin/category/ListSA";
import FormSave from "components/superadmin/category/FormSaveSA";
import FormEdit from "components/superadmin/category/FormSetSA";
import Delete from "components/superadmin/category/DeleteSA";

const View = ({ listRef, refetchQuery }) =>
    <BrowserRouter basename="/categorySA">
        <div class="content container-fluid mt-2">
            <div class="row align-items-end mb-3">
                <div class="col-sm"></div>
                <div class="col-sm-auto">
                    <div class="btn-group" role="group">
                        <Link to="/create" className="btn btn-primary rounded-pill px-5">
                            <i class="text-white font-weight-bold tio-add mr-1"></i>
                            Nueva categoría
                        </Link>
                    </div>
                </div>
            </div>
            <List ref={listRef} />
            <ModalRoute
                path="/create"
                component={FormSave}
                refetchQuery={refetchQuery}
                width="920"
                height="300"
            />
            <ModalRoute
                path="/:categoryId(\d+)/edit"
                component={FormEdit}
                refetchQuery={refetchQuery}
                width="920"
                height="300"
            />
            <ModalRoute
                path="/:categoryId(\d+)/delete"
                component={Delete}
                refetchQuery={refetchQuery}
                width="400"
                height="400"
            />
        </div>
    </BrowserRouter>;

View.propTypes = {};

export default View;