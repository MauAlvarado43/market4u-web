import React from "react";
import PropTypes from "prop-types";
import Company from "components/auth/company/Company";
import Administrator from "components/auth/company/Administrator";
import Fiel from "components/auth/company/Fiel";

const SignupCompanyView = ({
  data,
  activeStep,
  setActiveStep,
  onFinish,
  setData,
}) => (
  <div style={{ height: "100vh", overflow: "auto" }}>
    <main id="content" role="main" class="main pl-0">
      <div class="container py-5 py-sm-7">

        <div className="d-flex justify-content-center mb-5">
          <img className="z-index-2" src="/theme/img/market4u.png" alt="Logo" style={{ width: "15rem" }} />
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

                    <li class={`step-item ${activeStep == 1 ? "active" : ""}`} style={{ cursor: "pointer" }}>
                      <a class="step-content-wrapper">
                        <span class="step-icon step-icon-soft-dark">1</span>
                        <div class="step-content">
                          <span class="step-title">Registro empresa</span>
                        </div>
                      </a>
                    </li>

                    <li class={`step-item ${activeStep == 2 ? "active" : ""}`} style={{ cursor: "pointer" }}>
                      <a class="step-content-wrapper">
                        <span class="step-icon step-icon-soft-dark">2</span>
                        <div class="step-content">
                          <span class="step-title">Registro administrador</span>
                        </div>
                      </a>
                    </li>

                    <li class={`step-item ${activeStep == 3 ? "active" : ""}`} style={{ cursor: "pointer" }}>
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
                    <Company setActiveStep={setActiveStep} setData={setData}/>
                  </div>
                )}

                {activeStep == 2 && (
                  <div>
                    <Administrator setActiveStep={setActiveStep} setData={setData}/>
                  </div>
                )}

                {activeStep == 3 && (
                  <div>
                    <Fiel setData={setData} onFinish={onFinish}/>
                  </div>
                )}

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