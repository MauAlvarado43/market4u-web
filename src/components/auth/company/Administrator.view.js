import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";

const AdministratorView = ({
  userSchema,
  onSubmit,
  passwordField,
  confirmPasswordField,
  onClickShowPassword,
  onClickShowConfirmPassword
}) =>
  <div className="p-5">

    <Formik
      validationSchema={userSchema}
      initialValues={{}}
      onSubmit={onSubmit}>
      {({ errors, touched, submitCount }) =>
        <Form>

          {/* First name */}
          <div class="form-group">

            <label className="input">
              <Field type="text" name="firstname" className="form-control input__field" placeholder=" " />
              <span class="input__label">
                Nombre(s) <span className='text-danger fw-bold'>*</span>
              </span>
            </label>

            {
              errors.firstname && (touched.firstname || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.firstname}
                </div>
                : null
            }

          </div>

          {/* Last name */}
          <div class="form-group">

            <label className="input">
              <Field type="text" name="lastname" className="form-control input__field" placeholder=" " />
              <span class="input__label">
                Apellidos <span className='text-danger fw-bold'>*</span>
              </span>
            </label>

            {
              errors.lastname && (touched.lastname || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.lastname}
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

          {/* Password */}
          <div class="form-group">

            <div class="input-group input-group-merge">
              <label className="input">
                <Field
                  id="pass"
                  name="password"
                  type={passwordField ? "text" : "password"}
                  className="form-control input__field"
                  placeholder=" "
                >
                </Field>
                <span class="input__label">
                  Contraseña
                  <span className="text-danger fw-bold">*</span>
                </span>
              </label>
              <div class="input-group-append">
                <a
                  type="button"
                  onClick={() => onClickShowPassword(!passwordField)}
                  className="btn"
                >
                  <i
                    className={
                      passwordField
                        ? "fas fa-eye"
                        : "fas fa-eye-slash"
                    }
                  />
                </a>
              </div>
            </div>

            {
              errors.password && (touched.password || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.password}
                </div>
                : null
            }

          </div>

          {/* Password */}
          <div class="form-group">

            <div class="input-group input-group-merge">
              <label className="input">
                <Field
                  id="confirm_pass"
                  name="confirmPassword"
                  type={confirmPasswordField ? "text" : "password"}
                  className="form-control input__field"
                  placeholder=" "
                >
                </Field>
                <span class="input__label">
                  Volver a escribir la contraseña
                  <span className="text-danger fw-bold">*</span>
                </span>
              </label>
              <div class="input-group-append">
                <a
                  type="button"
                  onClick={() => onClickShowConfirmPassword(!confirmPasswordField)}
                  className="btn"
                >
                  <i
                    className={
                      confirmPasswordField
                        ? "fas fa-eye"
                        : "fas fa-eye-slash"
                    }
                  />
                </a>
              </div>
            </div>

            {
              errors.confirmPassword && (touched.confirmPassword || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.confirmPassword}
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

AdministratorView.propTypes = {};

export default AdministratorView;