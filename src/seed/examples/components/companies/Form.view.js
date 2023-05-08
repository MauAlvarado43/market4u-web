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
            {/* Cp */}
            <div class="form-group">
            <label class="input-label">Cp</label>
            <Field type="number" name="cp"
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
            {/* Municipality */}
            <div class="form-group">
            <label class="input-label">Municipality</label>
            <Field type="text" name="municipality"
              class="form-control" />
            </div>
            {/* State */}
            <div class="form-group">
            <label class="input-label">State</label>
            <Field as="select" name="state"
              class="form-control"  >
              <option value="">Select an option</option>
              <option value="NS">NS</option>
              <option value="AGUASCALIENTES">AGUASCALIENTES</option>
              <option value="BAJA CALIFORNIA">BAJA CALIFORNIA</option>
              <option value="BAJA CALIFORNIA SUR">BAJA CALIFORNIA SUR</option>
              <option value="CAMPECHE">CAMPECHE</option>
              <option value="COAHUILA">COAHUILA</option>
              <option value="COLIMA">COLIMA</option>
              <option value="CHIAPAS">Chiapas</option>
              <option value="CHIHUAHUA">CHIHUAHUA</option>
              <option value="DURANGO">DURANGO</option>
              <option value="CIUDAD DE MEXICO">CIUDAD DE MEXICO</option>
              <option value="GUANAJUATO">GUANAJUATO</option>
              <option value="GUERRERO">GUERRERO</option>
              <option value="HIDALGO">HIDALGO</option>
              <option value="JALISCO">JALISCO</option>
              <option value="MEXICO">MEXICO</option>
              <option value="MICHOACAN">MICHOACAN</option>
              <option value="MORELOS">MORELOS</option>
              <option value="NAYARIT">NAYARIT</option>
              <option value="NUEVO LEON">NUEVO LEON</option>
              <option value="OAXACA">OAXACA</option>
              <option value="PUEBLA">PUEBLA</option>
              <option value="QUERETARO">QUERETARO</option>
              <option value="QUINTANA ROO">QUINTANA ROO</option>
              <option value="SAN LUIS POTOSI">SAN LUIS POTOSI</option>
              <option value="SINALOA">SINALOA</option>
              <option value="SONORA">SONORA</option>
              <option value="TABASCO">TABASCO</option>
              <option value="TAMAULIPAS">TAMAULIPAS</option>
              <option value="TLAXCALA">TLAXCALA</option>
              <option value="VERACRUZ">VERACRUZ</option>
              <option value="YUCATAN">YUCATAN</option>
              <option value="ZACATECAS">ZACATECAS</option>
            </Field>
            </div>
            {/* Cologn */}
            <div class="form-group">
            <label class="input-label">Cologn</label>
            <Field type="text" name="cologn"
              class="form-control" />
            </div>
            {/* Website */}
            <div class="form-group">
            <label class="input-label">Website</label>
            <Field type="text" name="website"
              class="form-control" />
            </div>
            {/* Street */}
            <div class="form-group">
            <label class="input-label">Street</label>
            <Field type="text" name="street"
              class="form-control" />
            </div>
            {/* City */}
            <div class="form-group">
            <label class="input-label">City</label>
            <Field type="text" name="city"
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

CompanyFormView.propTypes = {
  company: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default CompanyFormView;