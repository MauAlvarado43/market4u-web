import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";

const CompanyView = ({ companySchema, onSubmit }) =>
  <div className="p-5">

    <Formik
      validationSchema={companySchema}
      initialValues={{}}
      onSubmit={onSubmit}>
      {({ errors, touched, submitCount }) =>
        <Form>

          {/* Name */}
          <div class="form-group">

            <label className="input">
              <Field type="text" name="name" className="form-control input__field" placeholder=" " />
              <span class="input__label">
                Nombre fiscal <span className='text-danger fw-bold'>*</span>
              </span>
            </label>

            {
              errors.name && (touched.name || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.name}
                </div>
                : null
            }

          </div>

          {/* Common name */}
          <div class="form-group">

            <label className="input">
              <Field type="text" name="commonName" className="form-control input__field" placeholder=" " />
              <span class="input__label">
                Nombre comercial <span className='text-danger fw-bold'>*</span>
              </span>
            </label>

            {
              errors.commonName && (touched.commonName || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.commonName}
                </div>
                : null
            }

          </div>

          {/* RFC */}
          <div class="form-group">

            <label className="input">
              <Field type="text" name="rfc" className="form-control input__field" placeholder=" " />
              <span class="input__label">
                RFC <span className='text-danger fw-bold'>*</span>
              </span>
            </label>

            {
              errors.rfc && (touched.rfc || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.rfc}
                </div>
                : null
            }

          </div>

          {/* Email */}
          <div class="form-group">

            <label className="input">
              <Field type="text" name="email" className="form-control input__field" placeholder=" " />
              <span class="input__label">
                Correo electrónico <span className='text-danger fw-bold'>*</span>
              </span>
            </label>

            {
              errors.email && (touched.email || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.email}
                </div>
                : null
            }

          </div>

          <button
            type="submit"
            style={{ backgroundColor: '#FC4B08', color: "white" }}
            class="btn btn-lg btn-block border-0 mt-5"
          >
            <b>Siguiente</b>
          </button>

        </Form>}
    </Formik>

  </div>;

CompanyView.propTypes = {};

export default CompanyView;