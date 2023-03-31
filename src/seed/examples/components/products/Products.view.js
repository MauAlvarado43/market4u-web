/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import ProductDetails from "seed/examples/components/products/Details";
import ProductList from "seed/examples/components/products/List";
import ProductFormSave from "seed/examples/components/products/FormSave";
import ProductFormSet from "seed/examples/components/products/FormSet";
import { ModalRoute } from "seed/helpers";

const ProductsView = () =>
  <BrowserRouter basename="/examples/products">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Products</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <ProductList />

    {/* Modals */}
    <ModalRoute
        path="/:productId(\d+)"
        component={ProductDetails} />
    <ModalRoute
      path="/create"
      component={ProductFormSave} />
    <ModalRoute
      path="/:productId(\d+)/edit"
      component={ProductFormSet} />

    </div>
  </BrowserRouter>;

ProductsView.propTypes = {};

export default ProductsView;