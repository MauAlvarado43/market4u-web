import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ModalRoute from "components/helpers/ModalRoute";
import Nav from "components/nav/Nav";
import PropTypes from "prop-types";
import List from "components/users/List";
import FormSave from "components/users/FormSave";
import FormEdit from "components/users/FormSet";
import Delete from "components/users/Delete";

const View = ({ 
    listRef, 
    refetchQuery 
}) => (
    <BrowserRouter basename="/users">
        <div class="content container-fluid mt-3">
            <div class="row align-items-end mb-3">
                <div class="col-sm"></div>
                <div class="col-sm-auto">
                    <div class="btn-group" role="group">
                        <Link to="/create" className="btn btn-primary rounded-pill px-5">
                            <i class="text-white font-weight-bold tio-add mr-1"></i> 
                            Nuevo usuario
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
                height="700"
            />
            <ModalRoute
                path="/:itemId(\d+)/edit"
                component={FormEdit}
                refetchQuery={refetchQuery}
                width="920"
                height="700"
            />
            <ModalRoute
                path="/:itemId(\d+)/delete"
                component={Delete}
                refetchQuery={refetchQuery}
                width="400"
                height="400"
            />
        </div>
    </BrowserRouter>
);

View.propTypes = {
    listRef: PropTypes.element,
    refetchQuery: PropTypes.func
};

export default View;