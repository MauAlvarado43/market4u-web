/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const UserFormView = ({ user= {}, companies= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">User</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={user}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Username */}
            <div class="form-group">
            <label class="input-label">Username</label>
            <Field type="text" name="username"
              class="form-control" />
            </div>
            {/* Password */}
            <div class="form-group">
            <label class="input-label">Password</label>
            <Field type="text" name="password"
              class="form-control" />
            </div>
            {/* Email */}
            <div class="form-group">
            <label class="input-label">Email</label>
            <Field type="text" name="email"
              class="form-control" />
            </div>
            {/* First name */}
            <div class="form-group">
            <label class="input-label">First name</label>
            <Field type="text" name="firstName"
              class="form-control" />
            </div>
            {/* Last name */}
            <div class="form-group">
            <label class="input-label">Last name</label>
            <Field type="text" name="lastName"
              class="form-control" />
            </div>
            {/* Address */}
            <div class="form-group">
            <label class="input-label">Address</label>
            <Field type="text" name="address"
              class="form-control" />
            </div>
            {/* Active */}
            <div class="form-group">
            <Field type="checkbox" name="active"
              class="d-inline mr-2" />
            <label class="input-label d-inline">Active</label>
            </div>
            {/* Type */}
            <div class="form-group">
            <label class="input-label">Type</label>
            <Field as="select" name="type"
              class="form-control"  >
              <option value="">Select an option</option>
              <option value="SUPERADMIN">SUPERADMIN</option>
              <option value="ADMIN;SELLER">ADMIN;SELLER</option>
              <option value="NORMAL">NORMAL</option>
            </Field>
            </div>
            {/* Photo */}
            <div class="form-group">
            <label class="input-label">Photo</label>
            <FileField name="photo"
              accept="*/*" setFieldValue={setFieldValue}
              class="form-control"  />
            </div>
            {/* Company */}
            <div class="form-group">
            <div>
            <label class="input-label">Company</label>
            <Field as="select" name="company.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {companies.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
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

UserFormView.propTypes = {
  user: PropTypes.object,
  companies: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default UserFormView;