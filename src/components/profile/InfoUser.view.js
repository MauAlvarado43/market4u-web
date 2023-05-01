import React from "react";
import PropTypes from "prop-types";
import css from "styles/Scrollbar.scss";
import { Formik, Form, Field } from "formik";

const InfoUserView = ({
  users,
  onSubmit,
  showPassword,
  setPassword,
  togglePasswordVisibility,
}) => (
  <div className="col-md-9 ml-1">
    {users.map((user) => (
    <div
      key={user.id}
      className="card mt-5 col-md-11 mx-auto"
      style={{ maxHeight: "70vh", borderColor: "#519EA4", borderWidth: "4px" }}
    >
      <p
        className="col-md-4 text-center"
        style={{ marginTop: "-22px", backgroundColor: "white" }}
      >
        {user.type !== "ADMIN" ? (
          <span className="display-4">Mis datos personales</span>
        ) : (
          <span className="display-4">Datos generales</span>
        )}
      </p>
      <div className="card-body text-center" style={{ overflowY: "auto" }}>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="md-form">
              <Formik
                initialValues={user}
                onSubmit={onSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <div class="mb-2 mt-2">
                      {/*BASIC FIELDS*/}
                      <div class="form-group">
                        <label className="input">
                          {user.type !== "ADMIN" ? (
                          <> 
                            <Field
                              type="text"
                              name="firstName"
                              className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                              required
                            />
                            <span class="input__label">
                              Nombre{" "}
                              <span className="text-danger fw-bold">*</span>
                            </span>
                          </>
                          ) : (
                          <>
                            <Field
                              type="text"
                              name="company.name"
                              className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                              required
                            />
                            <span class="input__label">
                              Razón Social {" "}
                              <span className="text-danger fw-bold">*</span>
                            </span>
                          </>
                          )}
                        </label>
                      </div>
                      <div class="form-group">
                        <label className="input">
                          {user.type !== "ADMIN" ? 
                          <>
                            <Field
                              type="text"
                              name="lastName"
                              className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                              required
                            />
                            <span class="input__label">
                              Apellidos {" "}
                              <span className="text-danger fw-bold">*</span>
                            </span>
                          </>
                          : 
                          <>
                            <Field
                              type="text"
                              name="company.website"
                              className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                              required
                            />
                            <span class="input__label">
                              Página oficial {" "}
                              <span className="text-danger fw-bold">*</span>
                            </span>
                          </>}
                        </label>
                      </div>
                      <div class="form-group">
                        <label className="input">
                          <Field
                            type="number"
                            name={user.type !== "ADMIN" ? "telephone" : "company.phone"}
                            className="form-control input__field border-top-0 border-left-0
                                  border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                            required
                          />
                          <span class="input__label">
                            Teléfono
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      </div>
                      <div class="form-group">
                        <label className="input">
                          <Field
                            type="email"
                            name={user.type !== "ADMIN" ? "email" : "company.email"}
                            className="form-control input__field border-top-0 border-left-0
                                  border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                            required
                          />
                          <span class="input__label">
                            e-mail{" "}
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      </div>
                      <div class="form-group text-left">
                        <h4>Dirección</h4>
                      </div>
                      <div class="form-group">
                        <label className="input">
                          <Field
                            type="text"
                            name={user.type !== "ADMIN" ? "street" : "company.street"}
                            className="form-control input__field border-top-0 border-left-0
                                  border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                            required
                          />
                          <span class="input__label">
                            Calle y número{" "}
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      </div>
                      <div class="form-group">
                        <label className="input">
                          <Field
                            type="text"
                            name={user.type !== "ADMIN" ? "cologn" : "company.cologn"}
                            className="form-control input__field border-top-0 border-left-0
                                  border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                            required
                          />
                          <span class="input__label">
                            Colonia{" "}
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      </div>
                      <div class="form-group">
                        <label className="input">
                          <Field
                            type="number"
                            name={user.type !== "ADMIN" ? "cp" : "company.cp"}
                            className="form-control input__field border-top-0 border-left-0
                                  border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                            required
                          />
                          <span class="input__label">
                            CP<span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      </div>
                      <div class="form-group">
                        <label className="input">
                          <Field
                            type="text"
                            name={user.type !== "ADMIN" ? "city" : "company.city"}
                            className="form-control input__field border-top-0 border-left-0
                                  border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                            required
                          />
                          <span class="input__label">
                            Ciudad{" "}
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      </div>

                      <div className="d-flex mb-3">
                        <div className="form-group col-md-6">
                          <label className="input">
                            <Field
                              as="select"
                              name={user.type !== "ADMIN" ? "state" : "company.state"}
                              className="form-control input__field border-dark"
                              required
                            >
                              <option value="NS">Seleccionar estado</option>
                              <option value="AGUASCALIENTES">
                                Aguascalientes
                              </option>
                              <option value="BAJA_CALIFORNIA">
                                Baja California
                              </option>
                              <option value="BAJA_CALIFORNIA_SUR">
                                Baja California Sur
                              </option>
                              <option value="CAMPECHE">Campeche</option>
                              <option value="COAHUILA">Coahuila</option>
                              <option value="COLIMA">Colima</option>
                              <option value="CHIAPAS">Chiapas</option>
                              <option value="CHIHUAHUA">Chihuahua</option>
                              <option value="CIUDAD_DE_MEXICO">
                                Ciudad de México
                              </option>
                              <option value="DURANGO">Durango</option>
                              <option value="GUANAJUATO">Guanajuato</option>
                              <option value="GUERRERO">Guerrero</option>
                              <option value="HIDALGO">Hidalgo</option>
                              <option value="JALISCO">Jalisco</option>
                              <option value="MEXICO">México</option>
                              <option value="MICHOACAN">Michoacán</option>
                              <option value="MORELOS">Morelos</option>
                              <option value="NAYARIT">Nayarit</option>
                              <option value="NUEVO_LEON">Nuevo León</option>
                              <option value="OAXACA">Oaxaca</option>
                              <option value="PUEBLA">Puebla</option>
                              <option value="QUERETARO">Querétaro</option>
                              <option value="QUINTANA_ROO">Quintana Roo</option>
                              <option value="SAN_LUIS_POTOSI">
                                San Luis Potosí
                              </option>
                              <option value="SINALOA">Sinaloa</option>
                              <option value="SONORA">Sonora</option>
                              <option value="TABASCO">Tabasco</option>
                              <option value="TAMAULIPAS">Tamaulipas</option>
                              <option value="TLAXCALA">Tlaxcala</option>
                              <option value="VERACRUZ">Veracruz</option>
                              <option value="YUCATAN">Yucatán</option>
                              <option value="ZACATECAS">Zacatecas</option>
                            </Field>
                            <span class="input__label">
                              Estado{" "}
                              <span className="text-danger fw-bold">*</span>
                            </span>
                          </label>
                        </div>
                        <div className="form-group col-md-6">
                          <label className="input">
                            <Field
                              type="text"
                              name={user.type !== "ADMIN" ? "municipality" : "company.municipality"}
                              className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                              required
                            />
                            <span class="input__label">
                              Alcaldía o Municipio
                              <span className="text-danger fw-bold">*</span>
                            </span>
                          </label>
                        </div>
                      </div>
                      {user.type !== "ADMIN" ? null : (
                      <div class="form-group">
                        <label className="input">
                          <Field
                            type="text"
                            name="company.rfc"
                            disabled
                            className="form-control input__field border-top-0 border-left-0
                                  border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                            required
                          />
                          <span class="input__label">
                            RFC 
                            <span className="text-danger fw-bold">*</span>
                          </span>
                        </label>
                      </div>
                      )}
                      <div class="form-group text-left mb-auto">
                        <h4>Contraseña</h4>
                      </div>
                      <br/><br/>
                      <div className="d-flex mb-5 mt-auto">
                        <div className="form-group col-md-6">
                          <label className="input">
                            <Field
                              id="pass"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                              onChange={(e) => setPassword(e.target.value)}
                            >
                            </Field>
                            <span class="input__label">
                              Actualizar contraseña
                              <span className="text-danger fw-bold">*</span>
                              <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="btn btn-outline-secondary bg-transparent border-0"
                              >
                                <i
                                  className={
                                    showPassword
                                      ? "fas fa-eye"
                                      : "fas fa-eye-slash"
                                  }
                                />
                              </button>
                            </span>
                          </label>
                        </div>
                        <div className="form-group col-md-6">
                          <label className="text">
                            En caso de no querer realizar modificaciones en tu contraseña, omite este campo.
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            className="row border-0 d-flex align-items-center justify-content-center mt-2 rounded"
                            style={{
                              backgroundColor: "#519EA4",
                              minWidth: "17vh",
                              maxWidth: "17vh",
                            }}
                          >
                            <i className = "fas fa-sd-card"
                              style={{ fontSize: "21px", color:"white"}}
                            ></i>
                            <h4 className="col-md-8 col-sm-1 mt-2" style={{ fontSize: "16px", color:"white" }}>
                              Guardar
                            </h4>
                          </button>
                          <div
                            className="ml-5 row d-flex align-items-center justify-content-center mt-2 rounded"
                            style={{
                              backgroundColor: "#FC4B08",
                              minWidth: "17vh",
                              maxWidth: "17vh",
                            }}
                          >
                            <i className = "fas fa-times"
                              style={{ fontSize: "21px", color:"white" }}
                            ></i>
                            <h4 className="col-md-8 col-sm-1 mt-2" style={{ fontSize: "16px", color:"white"}}>
                              Cancelar
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
);

InfoUserView.propTypes = {
  user: PropTypes.object.isRequired,
  showPassword: PropTypes.bool.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default InfoUserView;
