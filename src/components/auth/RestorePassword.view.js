import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";

const RestorePasswordView = ({
  onSubmit = () => { },
  error,
  message,
  passwordField,
  confirmPasswordField,
  onClickShowPassword,
  onClickShowConfirmPassword,
  restorePasswordSchema
}) => (
  <div style={{ height: "100vh", overflow: "auto" }}>
    <main id="content" role="main" class="main pl-0">
      <div class="container py-5 py-sm-7">

        <div className="d-flex justify-content-center mb-5">
          <img className="z-index-2" src="https://i.ibb.co/Rb2DkqH/Logo.jpg" alt="Logo" style={{ width: "8rem" }} />
        </div>

        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-5">
            <div class="card card-lg mb-5">
              <div class="card-body" style={{ border: "0.2rem solid #519FA5", borderRadius: "10px" }}>
                <Formik
                  validationSchema={restorePasswordSchema}
                  initialValues={{}}
                  onSubmit={onSubmit}>
                  {({ errors, touched, submitCount }) =>
                    <Form>

                      <div className="text-center mb-5">
                        <h1 className="display-4" style={{ fontSize: "30px", letterSpacing: "16%" }}>
                          Crear nueva contraseña
                        </h1>
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
                              required
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
                            ? <div class="mt-3 alert alert-soft-danger" role="alert">
                                {errors.password}
                              </div>
                            : null
                        }

                      </div>

                      {/* Repeat Password */}
                      <div class="form-group">

                        <div class="input-group input-group-merge">
                          <label className="input">
                            <Field
                              id="pass"
                              name="confirmPassword"
                              type={confirmPasswordField ? "text" : "password"}
                              className="form-control input__field"
                              placeholder=" "
                              required
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
                            ? <div class="mt-3 alert alert-soft-danger" role="alert">
                                {errors.confirmPassword}
                              </div>
                            : null
                        }

                      </div>

                      { error && <div class="mb-4 alert alert-soft-danger" role="alert"> {error} </div> }
                      { message && <div class="mb-4 alert alert-soft-success" role="alert"> {message} </div> }

                      <button 
                        type="submit" 
                        style={{ backgroundColor: '#FC4B08', color: "white" }} 
                        class="btn btn-lg btn-block border-0 mb-5"
                      >
                        <b>Actualizar contraseña</b>
                      </button>

                    </Form>}
                </Formik>

              </div>
            </div>

          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center">
              <small className="d-block">&copy; Market4U, 2023</small>
            </div>
          </div>
        </div>
      </footer>

    </main>
  </div>
);

RestorePasswordView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string,
  error: PropTypes.string,
  passwordField: PropTypes.bool.isRequired,
  confirmPasswordField: PropTypes.bool.isRequired,
  onClickShowPassword: PropTypes.func.isRequired,
  onClickShowConfirmPassword: PropTypes.func.isRequired,
  restorePasswordSchema: PropTypes.object.isRequired
};

export default RestorePasswordView;
