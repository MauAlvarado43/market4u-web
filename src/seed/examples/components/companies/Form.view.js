/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const CompanyFormView = ({ company= {}, onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Company</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={company}
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
            {/* Common name */}
            <div class="form-group">
            <label class="input-label">Common name</label>
            <Field type="text" name="commonName"
              class="form-control" />
            </div>
            {/* Rfc */}
            <div class="form-group">
            <label class="input-label">Rfc</label>
            <Field type="text" name="rfc"
              class="form-control" />
            </div>
            {/* Address */}
            <div class="form-group">
            <label class="input-label">Address</label>
            <Field type="text" name="address"
              class="form-control" />
            </div>
            {/* Phone */}
            <div class="form-group">
            <label class="input-label">Phone</label>
            <Field type="text" name="phone"
              class="form-control" />
            </div>
            {/* Email */}
            <div class="form-group">
            <label class="input-label">Email</label>
            <Field type="text" name="email"
              class="form-control" />
            </div>
            {/* Active */}
            <div class="form-group">
            <Field type="checkbox" name="active"
              class="d-inline mr-2" />
            <label class="input-label d-inline">Active</label>
            </div>
            {/* Photo */}
            <div class="form-group">
            <label class="input-label">Photo</label>
            <FileField name="photo"
              accept="*/*" setFieldValue={setFieldValue}
              class="form-control"  />
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

CompanyFormView.propTypes = {
  company: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default CompanyFormView;