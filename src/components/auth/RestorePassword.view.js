import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";

const RestorePasswordView = ({
  onSubmit = () => { },
  status,
  message,
  passwordField,
  confirmPasswordField,
  onClickShowPassword,
  onClickShowConfirmPassword
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
                  initialValues={{}}
                  onSubmit={onSubmit}>
                  {() =>
                    <Form>
                      <div className="text-center mb-5">
                        <h1 className="display-4" style={{ fontSize: "30px", letterSpacing: "16%" }}>Crear nueva contraseña</h1>
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
                      </div>

                      <button type="submit" style={{ backgroundColor: '#FC4B08', color: "white" }} class="btn btn-lg btn-block border-0 mb-5">
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
  status: PropTypes.string,
  message: PropTypes.string,
};

export default RestorePasswordView;
