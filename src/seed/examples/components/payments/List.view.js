/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"

const PaymentListView
 = ({ payments, pageNum = 1, totalPages = 0, onClickPage = () => {} }) =>
  <div>
  <ul class="list-group">
  {
    payments.map((payment) =>
      <li key={payment.id} class="list-group-item">
        <div class="row align-items-center gx-2">
          <div class="col-auto">
            <img class="avatar avatar-xs avatar-4by3"
              src="/theme/svg/components/placeholder-img-format.svg" alt="Icon" />
          </div>

          <div class="col">
            <h5 class="mb-0">
              <Link to={`/${payment.id}`}>PAYMENT {payment.id}</Link>
            </h5>
            <ul class="list-inline list-separator small">
              <li class="list-inline-item">{ JSON.stringify(payment).substring(0,70) + "…" }</li>
              <li class="list-inline-item">
                { new Date(payment.createdAt).getDate() + "." +
                  (new Date(payment.createdAt).getMonth() + 1) + "." +
                  new Date(payment.createdAt).getFullYear() }
              </li>

            </ul>
          </div>

          <div class="col-auto">
            {/* Options */}
            <Link to={`/${payment.id}`} className="btn btn-sm btn-white">
              <span class="d-none d-sm-inline-block mr-1">Details</span>
            </Link>
          </div>
        </div>
      </li>
    )
  }
  </ul>

  <PaginationFooter pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} />

  </div>;

PaymentListView.propTypes = {
  payments: PropTypes.array.isRequired,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func
};

export default PaymentListView;