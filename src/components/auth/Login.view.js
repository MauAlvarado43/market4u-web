import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";

const LoginView = ({ loginSchema, passwordField, onClickShowPassword, onSubmit, error }) => (
  <div>
    <main id="content" role="main" class="main pl-0">
      <div class="container py-5 py-sm-7">

        <div className="d-flex justify-content-center mb-5">
          <img className="z-index-2" src="/theme/img/market4u.png" alt="Logo" style={{ width: "15rem" }} />
        </div>

        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-5">
            <div class="card card-lg mb-5">
              <div class="card-body" style={{border: "0.2rem solid #519FA5", borderRadius: "10px"}}>
                <Formik
                  validationSchema={loginSchema}
                  initialValues={{}}
                  onSubmit={onSubmit}>
                  {({ errors, touched, validateForm, submitCount }) =>
                    <Form>

                      <div className="text-center mb-5">
                        <h1 className="display-4" style={{ fontSize: "30px", letterSpacing: "16%" }}>Iniciar sesión</h1>
                      </div>

                      {/* Username */}
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
                              onClick={onClickShowPassword}
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
                          errors.password && (touched.password || submitCount >= 0)
                            ? <div class="mt-2 text-danger" role="alert">
                                {errors.password}
                              </div>
                            : null
                        }

                      </div>

                      { error ? <div class="mb-4 alert alert-soft-danger" role="alert"> {error} </div> : null }

                      <button 
                        type="submit" 
                        style={{ backgroundColor: '#FC4B08', color: "white" }} 
                        class="btn btn-lg btn-block border-0"
                        onClick={validateForm}
                      >
                        <b>Iniciar sesión</b>
                      </button>
                      
                    </Form>}
                </Formik>

                <div className="text-right mb-5 mt-2">
                  <span className="font-size-1 d-flex flex-row-reverse">
                    <b> ¿Tienes problemas para iniciar sesión?
                      <br></br>
                      <a href="/recover_password" id="recover_password" >Recuperar contraseña</a>
                    </b>
                  </span>
                </div>

                <div className="text-left">
                  <span className="font-size-1">
                    Al continuar, aceptas las <a href="/" id="ConditionsPDF" >Condiciones de uso</a> y el <a href="/" id="PrivacyPDF" >Aviso de privacidad</a> de Market4U.
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mb-3">
              <span className="font-size-1 text-muted">¿No tienes una cuenta?</span>
            </div>

            <Link to="/signup" class="btn btn-block btn-primary border-0" style={{ backgroundColor: '#519FA5' }} >
              <b>Crear cuenta</b>
            </Link>

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

LoginView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  passwordField: PropTypes.bool,
  onClickShowPassword: PropTypes.func.isRequired,
  loginSchema: PropTypes.object.isRequired
};

export default LoginView;
