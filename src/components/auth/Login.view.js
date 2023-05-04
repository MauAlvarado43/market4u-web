import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";

const LoginView = ({ passwordField, onSubmit, onClickShowPassword, error }) => (
  <main id="content" role="main" class="main">
    <div
      class="position-fixed top-0 end-0 start-0 bg-img-start"
      style={{
        height: "31rem",
        backgroundImage: "url(/theme/svg/components/abstract-bg-4.svg)",
      }}
    >
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
    </div>

    {/* Content */}
    <div class="container py-5 py-sm-7">
      <a class="d-flex justify-content-center mb-5" href="/">
        <img
          class="zi-2"
          src="/theme/svg/logo.svg"
          alt="Logo"
          style={{ width: "12.7rem" }}
        />
      </a>

      <div class="mx-auto" style={{ maxWidth: "30rem", overflow: "hidden" }}>
        <div class="card card-lg mb-5 animate__animated animate__fadeIn animate__fast">
          <div class="card-body">
            <Formik initialValues={{}} onSubmit={onSubmit}>
              {() => (
                <Form>
                  <div class="text-center">
                    <div class="mb-5">
                      <h1 class="display-5">Iniciar sesión</h1>
                      <p>
                        ¿Todavía no tienes una cuenta?{" "}
                        <Link to="/signup" class="link d-inline-block fw-normal">
                          Regístrate
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div class="mb-4">
                    <label class="form-label" for="formEmail">
                      Correo electrónico
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="formEmail"
                      class="form-control form-control-lg"
                      tabindex="1"
                      placeholder="email@address.com"
                      required
                      autofocus="1"
                    />
                  </div>

                  {/* Password */}
                  <div class="mb-4">
                    <label
                      class="form-label w-100"
                      for="formPassword"
                    >
                      <span class="d-flex justify-content-between align-items-center">
                        <span>Contraseña</span>
                        <Link
                          to="/recover_password"
                          class="form-label-link fw-normal mb-0"
                        >
                          ¿Olvídaste tu contraseña?
                        </Link>
                      </span>
                    </label>

                    <div
                      class="input-group input-group-merge"
                      data-hs-validation-validate-class
                    >
                      <Field
                        type={passwordField ? "password" : "text"}
                        name="password"
                        id="formPassword"
                        placeholder="●●●●●"
                        tabindex="2"
                        class="js-toggle-password form-control form-control-lg"
                        required
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

                  {/* Remember me */}
                  <div class="form-check mb-4">
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      class="form-check-input"
                    />
                    <label class="form-check-label" for="termsCheckbox">
                      Recuérdame
                    </label>
                  </div>

                  {error ? (
                    <div class="alert alert-soft-danger" role="alert">
                      {error}
                    </div>
                  ) : null}

                  <div class="d-grid">
                    <button type="submit"
                      class="btn btn-primary btn-lg"
                      tabindex="3">
                      Iniciar sesión
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>

    <ScriptTag
      content={`
      new HSTogglePassword('.js-toggle-password')
    `}
    />
  </main>
);

LoginView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  passwordField: PropTypes.bool,
  onClickShowPassword: PropTypes.func.isRequired,
};

export default LoginView;
