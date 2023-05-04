import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { ModalRoute } from "seed/helpers";

const SignupView = ({
  status = "",
  passwordField,
  confirmPasswordField,
  onClickShowPassword,
  onClickShowConfirmPassword,
  message = "",
  onSubmit
}) => (
  <div style={{ height: "100vh", overflow: "auto" }}>
    <main id="content" role="main" class="main pl-0">
      <div class="container py-5 py-sm-7">

        <div className="d-flex justify-content-center mb-5">
          <img className="z-index-2" src="https://i.ibb.co/Rb2DkqH/Logo.jpg" alt="Logo" style={{ width: "10rem" }} />
        </div>

        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-5">
            <div class="card card-lg mb-1">
              <div class="card-body" style={{ border: "0.2rem solid #519FA5", borderRadius: "10px" }}>
                <Formik
                  initialValues={{}}
                  onSubmit={onSubmit}>
                  {() =>
                    <Form>
                      <div className="text-center mb-5">
                        <h1 className="display-4" style={{ fontSize: "30px", letterSpacing: "16%" }}>Crear cuenta</h1>
                      </div>

                      {/* First name */}
                      <div class="form-group">
                        <label className="input">
                          <Field type="text" name="firstname" className="form-control input__field" placeholder=" " required />
                          <span class="input__label">
                            Nombre(s) <span className='text-danger fw-bold'>*</span>
                          </span>
                        </label>
                      </div>

                      {/* Last name */}
                      <div class="form-group">
                        <label className="input">
                          <Field type="text" name="lastname" className="form-control input__field" placeholder=" " required />
                          <span class="input__label">
                            Apellidos <span className='text-danger fw-bold'>*</span>
                          </span>
                        </label>
                      </div>

                      {/* Email */}
                      <div class="form-group">
                        <label className="input">
                          <Field type="text" name="email" className="form-control input__field" placeholder=" " required />
                          <span class="input__label">
                            Correo electrónico <span className='text-danger fw-bold'>*</span>
                          </span>
                        </label>
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

                      {/* Password */}
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

                      <button type="submit" style={{ backgroundColor: '#FC4B08', color: "white" }} class="btn btn-lg btn-block border-0">
                        <b>Crear cuenta</b>
                      </button>
                    </Form>}
                </Formik>
              </div>
            </div>

            <div className="text-center">
              <span className="font-size-1">
                ¿Eres una marca oficial? <Link to="/signup_company">Registrate aquí</Link>.
              </span>
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

SignupView.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  passwordField: PropTypes.bool,
  confirmPasswordField: PropTypes.bool,
  onClickpasswordField: PropTypes.func,
  onClickShowConfirmPassword: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default SignupView;