import React from "react";
import PropTypes from "prop-types";
import { ScriptTag } from "seed/helpers";
import { Link } from "react-router-dom";

const VerifyEmailView = ({
  status = "",
  message = "",
  onClickGenerate = () => { },
}) => (
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
            <div class="text-center">
              <div class="mb-5">
                <h1 class="display-5 mb-4">Verificación de correo</h1>
                <h4 class="mb-4">{message}</h4>
                <h5 class="mt-4">
                  {status == "ERROR" ? (
                    <button
                      class="btn btn-primary btn-block"
                      onClick={onClickGenerate}
                    >
                      Generar nuevo link
                    </button>
                  ) : null}
                  {status == "SUCCESS" ? (
                    <Link to="/login" class="link">
                      Iniciar sesión
                    </Link>
                  ) : null}
                </h5>
              </div>
            </div>
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
VerifyEmailView.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClickGenerate: PropTypes.func.isRequired,
};

export default VerifyEmailView;
