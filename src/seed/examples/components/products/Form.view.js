/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const ProductFormView = ({ product= {}, users= [], sales= [], categories= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Product</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={product}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Name */}
            <div class="form-group">
            <label class="input-label">Name</label>
            <Field type="text" name="name"
              class="form-control" />
            </div>
            {/* Short description */}
            <div class="form-group">
            <label class="input-label">Short description</label>
            <Field type="text" name="shortDescription"
              class="form-control" />
            </div>
            {/* Description */}
            <div class="form-group">
            <label class="input-label">Description</label>
            <Field type="text" name="description"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* User */}
            <div class="form-group">
            <div>
            <label class="input-label">User</label>
            <Field as="select" name="user.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {users.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Sale */}
            <div class="form-group">
            <div>
            <label class="input-label">Sale</label>
            <Field as="select" name="sale.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {sales.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Category */}
            <div class="form-group">
            <div>
            <label class="input-label">Category</label>
            <Field as="select" name="category.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {categories.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            </div>
            {error ? <div class="alert alert-soft-danger">{error}</div> : null}
            <button type="submit" class="btn btn-block btn-primary">Send</button>
          </Form> }
          </Formik>
        </div>
      </div>
    </div>

  </div>;

ProductFormView.propTypes = {
  product: PropTypes.object,
  users: PropTypes.array,
  sales: PropTypes.array,
  categories: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default ProductFormView;