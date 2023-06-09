/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const ShippingFormView = ({ shipping= {}, users= [], carts= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Shipping</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={shipping}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Info */}
            <div class="form-group">
            <label class="input-label">Info</label>
            <Field type="text" name="info"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Folio */}
            <div class="form-group">
            <label class="input-label">Folio</label>
            <Field type="text" name="folio"
              class="form-control" />
            </div>
            {/* Address */}
            <div class="form-group">
            <label class="input-label">Address</label>
            <Field type="text" name="address"
              class="form-control" />
            </div>
            {/* Status */}
            <div class="form-group">
            <label class="input-label">Status</label>
            <Field as="select" name="status"
              class="form-control"  >
              <option value="">Select an option</option>
              <option value="CREATED">CREATED</option>
              <option value="SENT">SENT</option>
              <option value="COMPLETED">COMPLETED</option>
            </Field>
            </div>
            {/* Seller */}
            <div class="form-group">
            <div>
            <label class="input-label">Seller</label>
            <Field as="select" name="seller.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {users.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
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

ShippingFormView.propTypes = {
  shipping: PropTypes.object,
  users: PropTypes.array,
  carts: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default ShippingFormView;