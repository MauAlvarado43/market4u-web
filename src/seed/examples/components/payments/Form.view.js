/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const PaymentFormView = ({ payment= {}, users= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Payment</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={payment}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Card number */}
            <div class="form-group">
            <label class="input-label">Card number</label>
            <Field type="text" name="cardNumber"
              class="form-control" />
            </div>
            {/* Expire date */}
            <div class="form-group">
            <label class="input-label">Expire date</label>
            <Field type="text" name="expireDate"
              class="form-control" />
            </div>
            {/* Type */}
            <div class="form-group">
            <label class="input-label">Type</label>
            <Field as="select" name="type"
              class="form-control"  >
              <option value="">Select an option</option>
              <option value="DEBIT">DEBIT</option>
              <option value="CREDIT">CREDIT</option>
            </Field>
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
            {/* Address */}
            <div class="form-group">
            <label class="input-label">Address</label>
            <Field type="text" name="address"
              class="form-control" />
            </div>
            {/* Bank */}
            <div class="form-group">
            <label class="input-label">Bank</label>
            <Field type="text" name="bank"
              class="form-control" />
            </div>
            {/* Name */}
            <div class="form-group">
            <label class="input-label">Name</label>
            <Field type="text" name="name"
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

PaymentFormView.propTypes = {
  payment: PropTypes.object,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default PaymentFormView;