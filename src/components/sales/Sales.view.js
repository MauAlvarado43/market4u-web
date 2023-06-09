import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import SaleList from "components/sales/List";
import SaleFormSave from "components/sales/FormSave";
import SaleFormEdit from "components/sales/FormSet";
import SaleDelete from "components/sales/Delete";
import ModalRoute from "components/helpers/ModalRoute";
import Nav from "components/nav/Nav";
import PropTypes from "prop-types";


const SalesView = ({ listRef, refetchQuery })  =>
    <BrowserRouter basename="/sales">
        <div class="content container-fluid mt-3">

            {/* Header */}
            <div class="row align-items-end mb-3">
                <div class="col-sm"></div>
                <div class="col-sm-auto">
                    <div class="btn-group" role="group">
                        <Link to="/create" className="btn btn-primary rounded-pill px-5">
                            <i class="text-white font-weight-bold tio-add mr-1"></i> Nueva oferta
                        </Link>
                    </div>
                </div>

            </div>

            <SaleList ref={listRef} />

            <ModalRoute
                path="/create"
                component={SaleFormSave}
                refetchQuery={refetchQuery}
                width="920"
                height="600"
            />

            <ModalRoute
                path="/:saleId(\d+)/edit"
                component={SaleFormEdit}
                refetchQuery={refetchQuery}
                width="920"
                height="600"
            />

            <ModalRoute
                path="/:saleId(\d+)/delete"
                component={SaleDelete}
                refetchQuery={refetchQuery}
                width="400"
                height="400"
            />

        </div>
    </BrowserRouter>;

SalesView.propTypes = {};

export default SalesView;