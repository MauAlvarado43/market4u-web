import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";
import { Link } from "react-router-dom";

const VerifyEmailView = ({
  status = "",
  message = "",
  onClickGenerate = () => { },
  onSubmit
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
              <div class="card-body" style={{border: "0.2rem solid #519FA5", borderRadius: "10px"}}>
                <Formik
                  initialValues={{}}
                  onSubmit={onSubmit}>
                  {() =>
                    <Form>
                      <div className="text-center mb-5">
                        <h1 className="display-4" style={{ fontSize: "30px", letterSpacing: "16%" }}>Verificación de Correo</h1>
                      </div>

                      <div className="text-left mb-5">
                        <span className="font-size-1">
                          Te has registrado de manera exitosa, pero primero debes verificar tu correo, te hemos enviado un código a tu email
                        </span>
                      </div>

                      {/* Code */}
                      <div class="form-group">
                        <label className="input">
                          <Field type="text" name="code" className="form-control input__field" placeholder=" " required />
                          <span class="input__label">
                            Código de verificación <span className='text-danger fw-bold'>*</span>
                          </span>
                        </label>
                      </div>

                      <button type="submit" style={{ backgroundColor: '#FC4B08', color: "white" }} class="btn btn-lg btn-block border-0 mb-5">
                        <b>Crear tu cuenta de Market4U</b>
                      </button>
                    </Form>}
                </Formik>

                <div className="text-left">
                  <span className="font-size-1">
                    ¿No recibiste tu código de verificación? <a href="#" onClick={onClickGenerate}>Enviar nuevo código</a>
                  </span>
                </div>
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
VerifyEmailView.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClickGenerate: PropTypes.func.isRequired,
};

export default VerifyEmailView;
