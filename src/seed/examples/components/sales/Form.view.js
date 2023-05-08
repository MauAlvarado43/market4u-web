/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const SaleFormView = ({ sale= {}, companies= [], onSubmit, error }) =>
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
            {/* Name */}
            <div class="form-group">
            <label class="input-label">Name</label>
            <Field type="text" name="name"
              class="form-control" />
            </div>
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
            {/* Banner */}
            <div class="form-group">
            <label class="input-label">Banner</label>
            <FileField name="banner"
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

SaleFormView.propTypes = {
  sale: PropTypes.object,
  companies: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default SaleFormView;