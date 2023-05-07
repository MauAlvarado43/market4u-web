import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ModalRoute from "components/helpers/ModalRoute";
import Nav from "components/nav/Nav";
import PropTypes from "prop-types";

///
import List from "components/superadmin/sales/ListSA";
import Details from "components/superadmin/sales/DetailsSA";
import Delete from "components/superadmin/sales/DeleteSA";
///

const View = ({ 
        listRef, 
        refetchQuery 
    }) =>
        ///
        <BrowserRouter basename="/superadmin/sales">
        {/*///*/}
            
            <div class="content container-fluid mt-3">

                {/* Header */}

                <List ref={listRef} />


                <ModalRoute

                    ///
                    path="/:saleId(\d+)/details"
                    ///

                    component={Details}
                    refetchQuery={refetchQuery}
                    width="920"
                    height="700"
                />

                <ModalRoute

                    ///
                    path="/:saleId(\d+)/delete"
                    ///

                    component={Delete}
                    refetchQuery={refetchQuery}
                    width="400"
                    height="400"
                />

            </div>
        </BrowserRouter>;

View.propTypes = {};

export default View;