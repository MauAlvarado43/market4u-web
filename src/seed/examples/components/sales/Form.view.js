/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const SaleFormView = ({ sale= {}, products= [], users= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Sale</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={sale}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Disscount */}
            <div class="form-group">
            <label class="input-label">Disscount</label>
            <Field type="number" name="disscount"
              class="form-control" />
            </div>
            {/* Start date */}
            <div class="form-group">
            <label class="input-label">Start date</label>
            <Field type="date" name="startDate"
              class="form-control" />
            </div>
            {/* End date */}
            <div class="form-group">
            <label class="input-label">End date</label>
            <Field type="date" name="endDate"
              class="form-control" />
            </div>
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
            </div>
            {error ? <div class="alert alert-soft-danger">{error}</div> : null}
            <button type="submit" class="btn btn-block btn-primary">Send</button>
          </Form> }
          </Formik>
        </div>
      </div>
    </div>

  </div>;

SaleFormView.propTypes = {
  sale: PropTypes.object,
  products: PropTypes.array,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default SaleFormView;