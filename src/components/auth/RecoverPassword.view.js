import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { ScriptTag } from "seed/helpers";

const RecoverPasswordView = ({ 
  onSubmit = () => { }, 
  recoverPasswordSchema, 
  error, 
  message
}) => (
  <div style={{ height: "100vh", overflow: "auto" }}>
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
                  validationSchema={recoverPasswordSchema}
                  initialValues={{}}
                  onSubmit={onSubmit}>
                  {({ errors, touched, submitCount }) =>
                    <Form>
                      <div className="text-center mb-5">
                        <h1 className="display-4" style={{ fontSize: "30px", letterSpacing: "16%" }}>
                          Ayuda con la contraseña
                        </h1>
                      </div>

                      <div className="text-left mb-5">
                        <span className="font-size-1">
                          Escribe la dirección de correo electrónico asociado a tu cuenta de Market4U y 
                          te haremos llegar un link de restablecimiento 
                        </span>
                      </div>

                      {/* Email */}
                      <div class="form-group">

                        <label className="input">
                          <Field type="text" name="email" className="form-control input__field" placeholder=" " />
                          <span class="input__label">
                            Email <span className='text-danger fw-bold'>*</span>
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

                      { error ? <div class="mb-4 alert alert-soft-danger" role="alert"> {error} </div> : null }
                      { message ? <div class="mb-4 alert alert-soft-success" role="alert"> {message} </div> : null }

                      <button
                        type="submit"
                        style={{ backgroundColor: '#FC4B08', color: "white" }} 
                        class="btn btn-lg btn-block border-0 mb-5"
                      >
                        <b>Continuar</b>
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

RecoverPasswordView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string,
  error: PropTypes.string,
  recoverPasswordSchema: PropTypes.object.isRequired
};

export default RecoverPasswordView;
