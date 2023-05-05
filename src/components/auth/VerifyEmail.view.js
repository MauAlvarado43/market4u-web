import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";
import { Link } from "react-router-dom";

const VerifyEmailView = ({
  error = "",
  message = "",
  onClickGenerate = () => { },
  onSubmit,
  verifyEmailSchema,
  verified
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
                  validationSchema={verifyEmailSchema}
                  onSubmit={onSubmit}>
                  {({ errors, touched }) =>
                    <Form>
                      <div className="text-center mb-5">
                        <h1 className="display-4" style={{ fontSize: "30px", letterSpacing: "16%" }}>
                          Verificación de Correo
                        </h1>
                      </div>

                      <div className="text-left mb-5 text-center">
                        <span className="font-size-1">
                          <h4>El registro se ha realizado con éxito.</h4>
                          Ingresa el código de verificación que te hemos enviado a tu correo.
                        </span>
                      </div>

                      {/* Code */}
                      <div class="form-group">

                        <label className="input">
                          <Field 
                            type="text" 
                            name="code" 
                            className="form-control input__field" 
                            placeholder=" "
                            disabled={verified}
                          />
                          <span class="input__label">
                            Código de verificación <span className='text-danger fw-bold'>*</span>
                          </span>
                        </label>

                        {
                          errors.code && touched.code
                            ? <div class="mt-4 alert alert-soft-danger" role="alert">
                                {errors.code}
                              </div>
                            : null
                        }

                      </div>

                      { error ? <div class="mb-4 alert alert-soft-danger" role="alert"> {error} </div> : null }
                      { message ? <div class="mb-4 alert alert-soft-success" role="alert"> {message} </div> : null }

                      <button
                        type="submit" 
                        style={{ backgroundColor: '#FC4B08', color: "white" }} 
                        class="btn btn-lg btn-block border-0 mb-5"
                      >
                        <b>Crear tu cuenta de Market4U</b>
                      </button>
                    </Form>}
                </Formik>

                <div className="text-left">
                  <span className="font-size-1">
                    ¿No recibiste tu código de verificación? &nbsp;
                    <a href="#" onClick={onClickGenerate}>Enviar nuevo código</a>
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
  message: PropTypes.string,
  onClickGenerate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  verifyEmailSchema: PropTypes.object,
  verified: PropTypes.bool.isRequired
};

export default VerifyEmailView;