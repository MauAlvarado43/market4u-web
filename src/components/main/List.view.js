import React from "react";
import PropTypes from "prop-types";
import { PaginationFooter } from "seed/helpers";
import ProductCard from "components/main/ProductCard";

const ListView = ({ products, onClickPage, pageNum, totalPages }) =>
  <div>
    <div className="row">
      {
        products.map((product) =>
          <div key={product.id} className="col-md-3 my-2">
            <ProductCard product={product} />
          </div>
        )
      }
    </div>
    <PaginationFooter totalPages={totalPages} pageNum={pageNum} onClickPage={onClickPage} />
  </div>;

ListView.propTypes = {};

export default ListView;