import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";
import ProductList from "components/products/List";
import ProductFormSave from "components/products/FormSave";
import ProductFormSet from "components/products/FormSet";
import ModalRoute from "components/helpers/ModalRoute";
import Delete from "components/products/Delete";
import Nav from "components/nav/Nav";

const ProductsView = ({ listRef, refetchQuery }) =>
  <BrowserRouter basename="/products">
    <div class="content container-fluid mt-3">

    {/* Header */}
    <div class="row align-items-end mb-3">
      <div class="col-sm"></div>
      <div class="col-sm-auto">
        <div class="btn-group" role="group">
          <Link to="/create" className="btn btn-primary rounded-pill px-5">
          <i class="text-white font-weight-bold tio-add mr-1"></i> Nuevo producto
          </Link>
        </div>
      </div>

    </div>

    <ProductList ref={listRef}/>

    <ModalRoute
      path="/create"
      component={ProductFormSave} 
      refetchQuery={refetchQuery}
      width="920"
      height="700"
    />

    <ModalRoute
      path="/:productId(\d+)/edit"
      component={ProductFormSet} 
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