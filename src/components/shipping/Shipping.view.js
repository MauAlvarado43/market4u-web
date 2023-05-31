import React from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import ModalRoute from "components/helpers/ModalRoute";
import Nav from "components/nav/Nav";
import PropTypes from "prop-types";
import List from "components/shipping/List";
import Canceled from "components/shipping/Canceled";
import { Route } from "seed/helpers"
import FormSetShipping from "components/shipping/FormSet"
import DetailShipping from "components/shipping/Details"

const View = ({ listRef, refetchQuery }) =>
    <BrowserRouter basename="/orders">
        <Switch>
            <Route path="/:shippingId(\d+)/edit" component={FormSetShipping} />
            <Route path="/:shippingId(\d+)/details" component={DetailShipping} />
            <Route path="/" component={() => <>
                <div class="content container-fluid mt-3">
            
                    <List ref={listRef} />
                    <ModalRoute
                        path="/:shippingId(\d+)/canceled"
                        component={Canceled}
                        refetchQuery={refetchQuery}
                        width="400"
                        height="400"
                    />
                    
                </div>
            </>} />
        </Switch>
    </BrowserRouter>;

View.propTypes = {};

export default View;