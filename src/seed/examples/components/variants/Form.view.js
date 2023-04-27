/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const VariantFormView = ({ variant= {}, products= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Variant</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={variant}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Product */}
            <div class="form-group">
            <div>
            <label class="input-label">Product</label>
            <Field as="select" name="product.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {products.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Price */}
            <div class="form-group">
            <label class="input-label">Price</label>
            <Field type="number" name="price"
              class="form-control" />
            </div>
            {/* Stock */}
            <div class="form-group">
            <label class="input-label">Stock</label>
            <Field type="number" name="stock"
              class="form-control" />
            </div>
            {/* Shipment */}
            <div class="form-group">
            <label class="input-label">Shipment</label>
            <Field type="number" name="shipment"
              class="form-control" />
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

VariantFormView.propTypes = {
  variant: PropTypes.object,
  products: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default VariantFormView;