import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ModalRoute from "components/helpers/ModalRoute";
import Nav from "components/nav/Nav";
import PropTypes from "prop-types";
import List from "components/superadmin/opinion/ListSA";
import Details from "components/superadmin/opinion/DetailsSA";
import Censor from "components/superadmin/opinion/CensorSA";

const View = ({ listRef, refetchQuery }) =>
    <BrowserRouter>
        <div class="content container-fluid mt-3">

            <List ref={listRef} />

            <ModalRoute
                path="/:opinionId(\d+)/details"
                component={Details}
                refetchQuery={refetchQuery}
                width="920"
                height="600"
            />
            <ModalRoute
                path="/:opinionId(\d+)/censor"
                component={Censor}
                refetchQuery={refetchQuery}
                width="400"
                height="400"
            />
        </div>
    </BrowserRouter>;

View.propTypes = {};

export default View;