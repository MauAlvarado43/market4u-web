import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ModalRoute from "components/helpers/ModalRoute";
///
import List from "components/superadmin/products/ListSA";
import FormSet from "components/superadmin/products/DetailsSA";
import Delete from "components/superadmin/products/DeleteSA";
///

const ProductsView = ({ listRef, refetchQuery }) =>
    <BrowserRouter basename="/superadmin/products">
        <div class="content container-fluid mt-3">

            {/* Header */}

            <List ref={listRef} />

            <ModalRoute
                path="/:productId(\d+)/details"
                component={FormSet}
                refetchQuery={refetchQuery}
                width="920"
                height="700"
            />

            <ModalRoute
                path="/:productId(\d+)/delete"
                component={Delete}
                refetchQuery={refetchQuery}
                width="400"
                height="400"
            />

        </div>
    </BrowserRouter>;

ProductsView.propTypes = {
    listRef: PropTypes.object,
    refetchQuery: PropTypes.func
};

export default ProductsView;