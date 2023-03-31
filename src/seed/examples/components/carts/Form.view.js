/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const CartFormView = ({ cart= {}, users= [], payments= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Cart</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={cart}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Destiny */}
            <div class="form-group">
            <label class="input-label">Destiny</label>
            <Field type="text" name="destiny"
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
            {/* Payment */}
            <div class="form-group">
            <div>
            <label class="input-label">Payment</label>
            <Field as="select" name="payment.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {payments.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
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

CartFormView.propTypes = {
  cart: PropTypes.object,
  users: PropTypes.array,
  payments: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default CartFormView;