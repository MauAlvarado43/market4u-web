/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"

const OpinionListView
 = ({ opinions, pageNum = 1, totalPages = 0, onClickPage = () => {} }) =>
  <div>
  <ul class="list-group">
  {
    opinions.map((opinion) =>
      <li key={opinion.id} class="list-group-item">
        <div class="row align-items-center gx-2">
          <div class="col-auto">
            <img class="avatar avatar-xs avatar-4by3"
              src="/theme/svg/components/placeholder-img-format.svg" alt="Icon" />
          </div>

          <div class="col">
            <h5 class="mb-0">
              <Link to={`/${opinion.id}`}>OPINION {opinion.id}</Link>
            </h5>
            <ul class="list-inline list-separator small">
              <li class="list-inline-item">{ JSON.stringify(opinion).substring(0,70) + "…" }</li>
              <li class="list-inline-item">
                { new Date(opinion.createdAt).getDate() + "." +
                  (new Date(opinion.createdAt).getMonth() + 1) + "." +
                  new Date(opinion.createdAt).getFullYear() }
              </li>

            </ul>
          </div>

          <div class="col-auto">
            {/* Options */}
            <Link to={`/${opinion.id}`} className="btn btn-sm btn-white">
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

OpinionListView.propTypes = {
  opinions: PropTypes.array.isRequired,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func
};

export default OpinionListView;