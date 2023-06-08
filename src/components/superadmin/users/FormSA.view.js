import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { MultiField, FileField } from "seed/helpers";

const FormView = ({
  item = {},
  onSubmit,
  onCancel,
  companies = [],
  onChangeType,
  showPassword,
  validationSchema,
  togglePasswordVisibility,
  togglePasswordVisibilityConfirm,
  setPasswordConfirm,
  onChangeCompany,
  showPassConfirm,
  showCompany,
  changeType,
  validateLetters,
}) => (
  <div class="card">
    <div class="card-header">
      <h1 class="card-header-title">
        {item.id ? "Editar usuario" : "Nuevo usuario"}
      </h1>
    </div>
    <div class="card-body">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <Formik
            initialValues={item}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue, errors, touched, submitCount }) => (
              <Form>
                <div class="mb-3">
                  <div class="mb-3">
                    <div class="form-group">
                      <label class="input">
                        <Field
                          type="text"
                          name="firstName"
                          value={values.firstName || ""}
                          class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                          placeholder=" "
                          onKeyPress={(e) => {
                            validateLetters(e);
                          }}
                        />
                        <span class="input__label ">
                          Nombre(s)
                          <span className="text-danger fw-bold">*</span>
                        </span>
                      </label>
                      {errors.firstName &&
                      (touched.firstName || submitCount > 0) ? (
                        <div class="mt-2 text-danger" role="alert">
                          {errors.firstName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="mb-3">
                    <div class="form-group">
                      <label class="input">
                        <Field
                          type="text"
                          name="lastName"
                          value={values.lastName || ""}
                          class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                          placeholder=" "
                          onKeyPress={(e) => {
                            validateLetters(e);
                          }}
                        />
                        <span class="input__label">
                          Apellido(s)
                          <span className="text-danger fw-bold">*</span>
                        </span>
                      </label>
                      {errors.lastName &&
                      (touched.lastName || submitCount > 0) ? (
                        <div class="mt-2 text-danger" role="alert">
                          {errors.lastName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="mb-3">
                    <div class="form-group">
                      <label class="input">
                        <Field
                          type="email"
                          name="email"
                          value={values.email || ""}
                          class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                          placeholder=" "
                        />
                        <span class="input__label">
                          Correo eléctronico
                          <span className="text-danger fw-bold">*</span>
                        </span>
                      </label>
                      {errors.email && (touched.email || submitCount > 0) ? (
                        <div class="text-danger mt-2" role="alert">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="mb-3 mt-5">
                  <div className="mb-3 row">
                    <div className="form-group col-md-6">
                      {item.id ? (
                        <label
                          className="input"
                          onChange={(e) => changeType(e)}
                        >
                          <Field
                            id="typeS"
                            as="select"
                            name="type"
                            className="form-control input__field border-dark"
                          >
                            <option value="ADMIN">ADMIN</option>
                            <option value="SELLER">SELLER</option>
                            <option value="NORMAL">NORMAL</option>
                            <option value="SUPERADMIN">SUPERADMIN</option>
                          </Field>
                          <span className="input__label">
                            Tipo
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      ) : (
                        <label className="input">
                          <Field
                            id="type"
                            as="select"
                            name="type"
                            className="form-control input__field border-dark"
                            onChange={(e) => onChangeType(e)}
                          >
                            <option value="ADMIN">ADMIN</option>
                            <option value="SELLER">SELLER</option>
                            <option value="NORMAL">NORMAL</option>
                            <option value="SUPERADMIN">SUPERADMIN</option>
                          </Field>
                          <span className="input__label">
                            Tipo
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      )}
                    </div>
                    {(values.type === "ADMIN" || values.type === "SELLER") ? (
                      <div className="form-group col-md-6">
                        <label className="input">
                          <Field
                            id="company"
                            as="select"
                            name="company.id"
                            className="form-control input__field border-dark"
                            placeholder=" "
                            onChange = {(e) => {onChangeCompany(e)}}
                          >
                            <option value="">Seleccione una opción</option>
                            {companies.map((e, idx) => (
                              <option key={idx} value={e.id}>
                                {e.name}
                              </option>
                            ))}
                          </Field>
                          <span className="input__label">
                            Empresa
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                        {errors.company_edit &&
                          (touched.company_edit || submitCount > 0) ? (
                            <div class="mt-2 text-danger" role="alert">
                              {errors.company_edit}
                            </div>
                          ) : null}
                      </div>
                    ) : null}
                    {!item.id ? (
                      <div
                        class="form-group col-md-6"
                        style={{ display: showCompany ? "block" : "none" }}
                      >
                        <label class="input">
                          <Field
                            id="company"
                            as="select"
                            name="company.id"
                            class="form-control input__field border-dark"
                            placeholder=" "
                            onChange = {(e) => onChangeCompany(e)}
                          >
                            <option value="">Seleccione una opción</option>
                            {companies.map((e, idx) => (
                              <option key={idx} value={e.id}>
                                {e.name}
                              </option>
                            ))}
                          </Field>
                          <span class="input__label">
                            Empresa
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                        {errors.company &&
                          (touched.company || submitCount > 0) ? (
                            <div class="mt-2 text-danger" role="alert">
                              {errors.company}
                            </div>
                          ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div class="form-group text-left mb-auto">
                  <h4>Contraseña</h4>
                </div>
                <br />
                <br />

                <div className="d-flex mb-5 mt-auto">
                  <div className="form-group col-md-6">
                    <label className="input">
                      <Field
                        id="pass"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                      ></Field>
                      <span class="input__label">
                        Escribe la contraseña
                        {item.id ? null : (
                          <span className="text-danger fw-bold">*</span>
                        )}
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="btn btn-outline-secondary bg-transparent border-0"
                        >
                          <i
                            className={
                              showPassword ? "fas fa-eye" : "fas fa-eye-slash"
                            }
                          />
                        </button>
                      </span>
                    </label>
                    {errors.password &&
                      (touched.password || submitCount > 0) ? (
                      <div class="mt-2 text-danger" role="alert">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group col-md-6">
                    <label className="text-left">
                      {item.id
                        ? "En caso de no querer realizar modificaciones en la contraseña, omite estos campos."
                        : "La contraseña debe tener una longitud mínima de 8 caracteres"}
                    </label>
                  </div>
                </div>

                <div className="d-flex mb-5 mt-auto">
                  <div className="form-group col-md-6">
                    <label className="input">
                      <Field
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type={showPassConfirm ? "text" : "password"}
                        className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                        onChange={(ev) => setPasswordConfirm(ev.target.value)}
                      ></Field>
                      <span class="input__label">
                        Confirmar contraseña
                        {item.id ? null : (
                          <span className="text-danger fw-bold">*</span>
                        )}
                        <button
                          type="button"
                          onClick={togglePasswordVisibilityConfirm}
                          className="btn btn-outline-secondary bg-transparent border-0"
                        >
                          <i
                            className={
                              showPassConfirm
                                ? "fas fa-eye"
                                : "fas fa-eye-slash"
                            }
                          />
                        </button>
                      </span>
                    </label>
                    {errors.passwordConfirm &&
                      (touched.passwordConfirm || submitCount >  0) ? (
                        <div class="mt-2 text-danger" role="alert">
                          {errors.passwordConfirm}
                        </div>
                      ) : null}
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center pt-2">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill px-5 mr-5"
                    onClick={onCancel}
                  >
                    <i className="fas fa-times mr-3 fa-lg"></i>
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm rounded-pill px-5 ml-5"
                  >
                    <i className="fas fa-save mr-3 fa-lg"></i>
                    Guardar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
);

FormView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired,
  onChangeType: PropTypes.func,
  showPassword: PropTypes.bool,
  togglePasswordVisibility: PropTypes,
  showPassConfirm: PropTypes.bool,
  togglePasswordVisibilityConfirm: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  setPasswordConfirm: PropTypes.func,
};

export default FormView;
