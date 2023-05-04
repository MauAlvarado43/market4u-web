import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";

const RestorePasswordView = ({ onSubmit = () => { }, status, message }) => (
  <main id="content" role="main" class="main">
    <div
      class="position-fixed top-0 end-0 start-0 bg-img-start"
      style={{
        height: "32rem",
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
      <a class="d-flex justify-content-center mb-5" href="#">
        <img
          class="zi-2"
          src="/theme/svg/logo.svg"
          alt="Logo"
          style={{ width: "12.7rem" }}
        />
      </a>

      <div class="mx-auto" style={{ maxWidth: "30rem" }}>
        <div class="card card-lg mb-5">
          <div class="card-body">
            <Formik initialValues={{}} onSubmit={onSubmit}>
              {() => (
                <Form>
                  <div class="text-center">
                    <div class="mb-5">
                      <h1 class="display-5">Restablece tu contraseña</h1>
                    </div>
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
                        type="password"
                        class="js-toggle-password form-control form-control-lg"
                        name="password"
                        id="formPassword"
                        placeholder="8+ caracteres requeridos"
                        aria-label="8+ caracteres requeridos"
                        required
                        minlength="8"
                        data-hs-toggle-password-options='{
                          "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                          "defaultClass": "bi-eye-slash",
                          "showClass": "bi-eye",
                          "classChangeTarget": ".js-toggle-password-show-icon-1"
                        }'
                      />
                      <a
                        class="js-toggle-password-target-1 input-group-append input-group-text"
                        // eslint-disable-next-line no-script-url
                        href="javascript:;"
                      >
                        <i class="js-toggle-password-show-icon-1 bi-eye"></i>
                      </a>
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
                        type="password"
                        class="js-toggle-password form-control form-control-lg"
                        name="confirmPassword"
                        id="formConfirmPassword"
                        placeholder="8+ caracteres requeridos"
                        aria-label="8+ caracteres requeridos"
                        required
                        minlength="8"
                        data-hs-toggle-password-options='{
                          "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                          "defaultClass": "bi-eye-slash",
                          "showClass": "bi-eye",
                          "classChangeTarget": ".js-toggle-password-show-icon-2"
                        }'
                      />
                      <a
                        class="js-toggle-password-target-2 input-group-append input-group-text"
                        // eslint-disable-next-line no-script-url
                        href="javascript:;"
                      >
                        <i class="js-toggle-password-show-icon-2 bi-eye"></i>
                      </a>
                    </div>
                  </div>

                  {status ? (
                    <div
                      class={`alert alert-soft-${status == "ERROR" ? "danger" : "success"
                        }`}
                      role="alert"
                    >
                      {message}
                    </div>
                  ) : null}

                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary btn-lg">
                      Buscar cuenta
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

RestorePasswordView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  status: PropTypes.string,
  message: PropTypes.string,
};

export default RestorePasswordView;
