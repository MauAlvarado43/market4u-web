/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const VariantoptionFormView = ({ variantoption= {}, variants= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Variantoption</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={variantoption}
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
            {/* Value */}
            <div class="form-group">
            <label class="input-label">Value</label>
            <Field type="text" name="value"
              class="form-control" />
            </div>
            {/* Variant */}
            <div class="form-group">
            <div>
            <label class="input-label">Variant</label>
            <Field as="select" name="variant.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {variants.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
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

VariantoptionFormView.propTypes = {
  variantoption: PropTypes.object,
  variants: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default VariantoptionFormView;