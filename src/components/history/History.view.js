import React from "react";
import PropTypes from "prop-types";
import Shipping from "components/history/Shipping";
import { PaginationFooter } from "seed/helpers";

const HistoryView = ({ shippings, pageNum, totalPages, onClickPage }) => (
  <div>
    {
      shippings.map((shipping) => (
        <Shipping shipping={shipping} />
      ))
    }
    <PaginationFooter pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage}/>
  </div>
);

HistoryView.propTypes = {};

export default HistoryView;