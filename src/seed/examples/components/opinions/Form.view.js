/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const OpinionFormView = ({ opinion= {}, products= [], users= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Opinion</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={opinion}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Title */}
            <div class="form-group">
            <label class="input-label">Title</label>
            <Field type="text" name="title"
              class="form-control" />
            </div>
            {/* Description */}
            <div class="form-group">
            <label class="input-label">Description</label>
            <Field type="text" name="description"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Rate */}
            <div class="form-group">
            <label class="input-label">Rate</label>
            <Field type="number" name="rate"
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

OpinionFormView.propTypes = {
  opinion: PropTypes.object,
  products: PropTypes.array,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default OpinionFormView;