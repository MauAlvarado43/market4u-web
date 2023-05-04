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
            {/* Type */}
            <div class="form-group">
            <label class="input-label">Type</label>
            <Field as="select" name="type"
              class="form-control"  >
              <option value="">Select an option</option>
              <option value="SUPERADMIN">SUPERADMIN</option>
              <option value="ADMIN">ADMIN</option>
              <option value="SELLER">SELLER</option>
              <option value="NORMAL">NORMAL</option>
            </Field>
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
            {/* Cp */}
            <div class="form-group">
            <label class="input-label">Cp</label>
            <Field type="number" name="cp"
              class="form-control" />
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
              <option value="CHIAPAS">CHIAPAS</option>
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
            {/* Telephone */}
            <div class="form-group">
            <label class="input-label">Telephone</label>
            <Field type="text" name="telephone"
              class="form-control" />
            </div>
            {/* Token */}
            <div class="form-group">
            <label class="input-label">Token</label>
            <Field type="text" name="token"
              class="form-control" />
            </div>
            {/* Token verified */}
            <div class="form-group">
            <Field type="checkbox" name="tokenVerified"
              class="d-inline mr-2" />
            <label class="input-label d-inline">Token verified</label>
            </div>
            {/* Code */}
            <div class="form-group">
            <label class="input-label">Code</label>
            <Field type="number" name="code"
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

UserFormView.propTypes = {
  user: PropTypes.object,
  companies: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default UserFormView;