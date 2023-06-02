import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { FileField } from "seed/helpers";

const FielView = ({
  fielSchema,
  passwordField,
  onClickShowPassword,
  onSubmit
}) =>
  <div className="p-5">

    <Formik
      validationSchema={fielSchema}
      initialValues={{}}
      onSubmit={onSubmit}>
      {({ errors, touched, submitCount, setFieldValue }) =>
        <Form>

          {/* Certificate */}
          <div class="mb-3">
            <label class="input-label ml-3">Certificado</label>
            <div class="custom-file form-field-style">
              <FileField
                className="custom-file-input" name="certificate" setFieldValue={setFieldValue}
              />
              <label class="custom-file-label form-field-style" for="" data-browse="Seleccionar certificado">
                <span class="input__label">
                  Ningún archivo seleccionado
                  <span className='text-danger fw-bold'>*</span>
                </span>
              </label>
              {
                errors.certificate && (touched.certificate || submitCount > 0)
                  ? <div class="mt-2 text-danger" role="alert">
                    {errors.certificate}
                  </div>
                  : null
              }
            </div>
          </div>

          {/* Private Key */}
          <div class="mb-3">
            <label class="input-label ml-3">Clave privada</label>
            <div class="custom-file form-field-style">
              <FileField
                className="custom-file-input" name="private_key" setFieldValue={setFieldValue}
              />
              <label class="custom-file-label form-field-style" for="" data-browse="Seleccionar clave privada">
                <span class="input__label">
                  Ningún archivo seleccionado
                  <span className='text-danger fw-bold'>*</span>
                </span>
              </label>
              {
                errors.privateKey && (touched.privateKey || submitCount > 0)
                  ? <div class="mt-2 text-danger" role="alert">
                    {errors.privateKey}
                  </div>
                  : null
              }
            </div>
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
                  Contraseña de clave privada
                  <span className="text-danger fw-bold">*</span>
                </span>
              </label>
              <div class="input-group-append">
                <a
                  type="button"
                  onClick={() => onClickShowPassword(!passwordField)}
                  className="btn"
                >
                  <i className={passwordField ? "fas fa-eye" : "fas fa-eye-slash"}
                  />
                </a>
              </div>
            </div>

            {
              errors.password && (touched.password || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.password}
                </div>
                : null
            }

          </div>


          <button
            type="submit"
            style={{ backgroundColor: '#FC4B08', color: "white" }}
            class="btn btn-lg btn-block border-0 mt-5"
          >
            <b>Crear cuenta</b>
          </button>

        </Form>}
    </Formik>

  </div>;

FielView.propTypes = {};

export default FielView;