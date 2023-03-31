/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const MessageFormView = ({ message= {}, users= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Message</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={message}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Content */}
            <div class="form-group">
            <label class="input-label">Content</label>
            <Field type="text" name="content"
              as="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Sender */}
            <div class="form-group">
            <div>
            <label class="input-label">Sender</label>
            <Field as="select" name="sender.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {users.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Target */}
            <div class="form-group">
            <div>
            <label class="input-label">Target</label>
            <Field as="select" name="target.id"
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

MessageFormView.propTypes = {
  message: PropTypes.object,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default MessageFormView;