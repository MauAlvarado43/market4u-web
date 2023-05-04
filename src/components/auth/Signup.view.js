import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { ModalRoute } from "seed/helpers";
import Privacy from "components/auth/Privacy";

const SignupView = ({
  status = "",
  passwordField,
  confirmPasswordField,
  onClickShowPassword,
  onClickShowConfirmPassword,
  message = "",
  onSubmit
}) => (
  <main id="content" role="main" class="main">
    <div
      class="position-fixed top-0 end-0 start-0 bg-img-start"
      style={{
        height: "32rem",
        backgroundImage: "url(/theme/svg/components/abstract-bg-4.svg)",
      }}
    >
      {/* Shape */}
      <div class="shape shape-bottom zi-1">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
        >
          <polygon fill="#f2f4f5" points="0,273 1921,273 1921,0 " />
        </svg>
      </div>
      {/* End Shape */}
    </div>

    {/* Content */}
    <div class="container py-5 py-sm-7">
      <a class="d-flex justify-content-center mb-5" href="/">
        <img
          class="zi-2"
          src="/theme/svg/logo.svg"
          alt="Description"
          style={{ width: "11rem" }}
        />
      </a>
      <div class="mx-auto" style={{ maxWidth: "30rem" }}>
        {/* Card */}
        <div class="card card-lg mb-5">
          <div class="card-body">
            <Formik initialValues={{}} onSubmit={onSubmit}>
              {() => (
                <Form>
                  <div class="text-center">
                    <div class="mb-5">
                      <h1 class="display-5">Crear una cuenta</h1>
                      <p>
                        ¿Ya tienes una cuenta?{" "}
                        <Link
                          to="/login"
                          class="link fw-normal"
                          href="./authentication-login-basic.html"
                        >
                          Inicia sesión aqui
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div class="mb-0">
                    <label class="form-label" for="formFirstName">
                      Nombre completo
                    </label>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-4">
                          <Field
                            type="text"
                            class="form-control form-control-lg"
                            name="firstName"
                            tabindex="1"
                            id="formFirstName"
                            autofocus="1"
                            placeholder="Nombre(s)"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="mb-4">
                          <Field
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Apellidos"
                            tabindex="2"
                            name="lastName"
                            id="formLastName"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="formEmail">
                      Tu correo
                    </label>
                    <Field
                      type="email"
                      class="form-control form-control-lg"
                      name="email"
                      tabindex="3"
                      id="formEmail"
                      placeholder="fantasy@sitio.com"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="formPassword">
                      Contraseña
                    </label>

                    <div
                      class="input-group input-group-merge"
                      data-hs-validation-validate-class
                    >
                      <Field
                        type={passwordField ? "password" : "text"}
                        class="js-toggle-password form-control form-control-lg"
                        name="password"
                        id="formPassword"
                        tabindex="4"
                        placeholder="6+ caracteres requeridos"
                        aria-label="6+ caracteres requeridos"
                        required
                        minlength="6"
                      />
                      <div class="input-group-append">
                        <a
                          class="input-group-text input-group-append"
                          onClick={onClickShowPassword}
                          style={{ cursor: "pointer" }}
                        >
                          <i id="changePassIcon" class={`bi-eye${!passwordField ? "-slash" : ""}`}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="formConfirmPassword">
                      Confirmar contraseña
                    </label>

                    <div
                      class="input-group input-group-merge"
                      data-hs-validation-validate-class
                    >
                      <Field
                        type={confirmPasswordField ? "password" : "text"}
                        class="js-toggle-password form-control form-control-lg"
                        name="confirmPassword"
                        id="formConfirmPassword"
                        placeholder="6+ caracteres requeridos"
                        aria-label="6+ caracteres requeridos"
                        required
                        minlength="6"
                        tabindex="5"
                      />
                      <div class="input-group-append">
                        <a
                          class="input-group-text input-group-append"
                          onClick={onClickShowConfirmPassword}
                          style={{ cursor: "pointer" }}
                        >
                          <i id="changePassIcon" class={`bi-eye${!confirmPasswordField ? "-slash" : ""}`}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      tabindex="6"
                      id="termsCheckbox"
                      required
                    />
                    <label class="form-check-label mb-1" for="termsCheckbox">
                      Acepto los <Link to="/signup/privacy">Términos y Condiciones</Link>
                    </label>
                  </div>

                  {status ? (
                    <div
                      class={`alert alert-soft-${status == "ERROR" ? "danger" : "success"
                        }`}
                      role="alert"
                    >
                      {status == "SUCCESS" ?
                        <div>Registro exitoso, inicia sesión&nbsp;
                          <a href="/login" style={{ textDecoration: "underline" }}>aquí</a></div> :
                        message}
                    </div>
                  ) : null}

                  <div class="d-grid gap-2">
                    <button type="submit"
                      class="btn btn-primary btn-lg"
                      tabindex="7">
                      Crear una cuenta
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
    {/* End Content */}
    <ModalRoute path="/signup/privacy"
      width={window.screen.width < 800 ? window.screen.width - 20 : 800}
      height={window.screen.height < 800 ? window.screen.height - 100 : 800}
      component={Privacy} />
  </main>
);

SignupView.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  passwordField: PropTypes.bool,
  confirmPasswordField: PropTypes.bool,
  onClickShowPassword: PropTypes.func,
  onClickShowConfirmPassword: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default SignupView;