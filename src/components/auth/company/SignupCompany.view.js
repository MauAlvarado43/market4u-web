import React from "react";
import PropTypes from "prop-types";
import 
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const SignupCompanyView = ({ activeStep }) => (
  <div style={{ height: "100vh", overflow: "auto" }}>
    <main id="content" role="main" class="main pl-0">
      <div class="container py-5 py-sm-7">

        <div className="d-flex justify-content-center mb-5">
          <img className="z-index-2" src="https://i.ibb.co/Rb2DkqH/Logo.jpg" alt="Logo" style={{ width: "10rem" }} />
        </div>

        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card card-lg mb-1">
              <div class="card-body" style={{ border: "0.2rem solid #519FA5", borderRadius: "10px" }}>


                <div className="text-center mb-5">
                  <h1 className="display-4" style={{ fontSize: "30px", letterSpacing: "16%" }}>
                    Crear cuenta empresarial
                  </h1>
                </div>

                <div className="p-3">
                  <ul className="js-step-progress step step-sm step-icon-sm step step-inline step-item-between mb-3 mb-md-5">

                    <li class="step-item active">
                      <a class="step-content-wrapper">
                        <span class="step-icon step-icon-soft-dark">1</span>
                        <div class="step-content">
                          <span class="step-title">Registro empresa</span>
                        </div>
                      </a>
                    </li>

                    <li class="step-item">
                      <a class="step-content-wrapper">
                        <span class="step-icon step-icon-soft-dark">2</span>
                        <div class="step-content">
                          <span class="step-title">Registro administrador</span>
                        </div>
                      </a>
                    </li>

                    <li class="step-item">
                      <a class="step-content-wrapper">
                        <span class="step-icon step-icon-soft-dark">3</span>
                        <div class="step-content">
                          <span class="step-title">Validación de FIEL</span>
                        </div>
                      </a>
                    </li>

                  </ul>
                </div>

                {activeStep == 1 && (
                  <div>

                  </div>
                )}

                {activeStep == 2 && (
                  <div>

                  </div>
                )}

                {activeStep == 3 && (
                  <div>

                  </div>
                )}

                <Formik
                  initialValues={{}}
                  onSubmit={() => { }}>
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
                            ? <div class="mt-3 alert alert-soft-danger" role="alert">
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
                            Apellido (s) <span className='text-danger fw-bold'>*</span>
                          </span>
                        </label>

                        {
                          errors.lastname && (touched.lastname || submitCount > 0)
                            ? <div class="mt-3 alert alert-soft-danger" role="alert">
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
                            ? <div class="mt-3 alert alert-soft-danger" role="alert">
                              {errors.email}
                            </div>
                            : null
                        }

                      </div>

                      {/* Password */}
                      <div class="form-group">

                        {/* <div class="input-group input-group-merge">
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
                      </div> */}

                        {
                          errors.password && (touched.password || submitCount > 0)
                            ? <div class="mt-3 alert alert-soft-danger" role="alert">
                              {errors.password}
                            </div>
                            : null
                        }

                      </div>

                      {/* Password */}
                      <div class="form-group">

                        {/* <div class="input-group input-group-merge">
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
                      </div> */}

                        {
                          errors.confirmPassword && (touched.confirmPassword || submitCount > 0)
                            ? <div class="mt-3 alert alert-soft-danger" role="alert">
                              {errors.confirmPassword}
                            </div>
                            : null
                        }

                      </div>

                      {/* {error && <div class="mb-4 alert alert-soft-danger" role="alert"> {error} </div>} */}

                      <button
                        type="submit"
                        style={{ backgroundColor: '#FC4B08', color: "white" }}
                        class="btn btn-lg btn-block border-0"
                      >
                        <b>Crear cuenta</b>
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

SignupCompanyView.propTypes = {};

export default SignupCompanyView;