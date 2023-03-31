/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const PurchaseFormView = ({ purchase= {}, carts= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Purchase</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={purchase}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Amount */}
            <div class="form-group">
            <label class="input-label">Amount</label>
            <Field type="number" name="amount"
              class="form-control" />
            </div>
            {/* Product */}
            <div class="form-group">
            <label class="input-label">Product</label>
            <Field type="text" name="product"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Sale */}
            <div class="form-group">
            <label class="input-label">Sale</label>
            <Field type="text" name="sale"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Cart */}
            <div class="form-group">
            <div>
            <label class="input-label">Cart</label>
            <Field as="select" name="cart.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {carts.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
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

PurchaseFormView.propTypes = {
  purchase: PropTypes.object,
  carts: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default PurchaseFormView;