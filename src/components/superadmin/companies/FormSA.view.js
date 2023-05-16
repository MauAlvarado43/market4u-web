import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";
import { DateTime } from 'luxon';
import { Link, NavLink } from "react-router-dom";

const FormView = (
    {
        item = {},
        onSubmit,
        error,
        onCancel
    }
) => (
    <div class="card">
        <div class="card-header">
            <h1 class="card-header-title">
                {item.id ? "Editar empresa" : "Nueva empresa"}
            </h1>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <Formik
                        initialValues={{
                            ...item,
                        }}
                        onSubmit={onSubmit}
                    >
                        {
                            ({
                                values,
                                setFieldValue
                            }) => (
                                <Form>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        value={values.name || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Nombre fiscal
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="commonName"
                                                        value={values.commonName || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Nombre comercial
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="rfc"
                                                        value={values.rfc || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        RFC
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="cp"
                                                        value={values.cp || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Código Postal
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="phone"
                                                        value={values.phone || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Teléfono
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="email"
                                                        value={values.email || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Correo eléctronico
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="custom-file form-field-style">
                                            <FileField
                                                className="custom-file-input"
                                                name="photo"
                                                setFieldValue={setFieldValue}
                                            />
                                            <label class="custom-file-label form-field-style" for="" data-browse="Seleccionar banner">
                                                <span class="input__label">
                                                    Ningún archivo seleccionado
                                                    <span className='text-danger fw-bold'>*</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="municipality"
                                                        value={values.municipality || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Municipio
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        as="select"
                                                        name="state"
                                                        value={values.state || ''}
                                                        required
                                                        class="form-control input__field border-dark mb-4"
                                                        placeholder=" "
                                                    >
                                                        <option value="NS">NS</option>
                                                        <option value="AGUASCALIENTES">AGUASCALIENTES</option>
                                                        <option value="BAJA CALIFORNIA">BAJA CALIFORNIA</option>
                                                        <option value="BAJA CALIFORNIA SUR">BAJA CALIFORNIA SUR</option>
                                                        <option value="CAMPECHE">CAMPECHE</option>
                                                        <option value="COAHUILA">COAHUILA</option>
                                                        <option value="COLIMA">COLIMA</option>
                                                        <option value="CHIAPAS">Chiapas</option>
                                                        <option value="CHIHUAHUA">CHIHUAHUA</option>
                                                        <option value="DURANGO">DURANGO</option>
                                                        <option value="CIUDAD DE MEXICO">CIUDAD DE MEXICO</option>
                                                        <option value="GUANAJUATO">GUANAJUATO</option>
                                                        <option value="GUERRERO" selected="">GUERRERO</option>
                                                        <option value="HIDALGO">HIDALGO</option>
                                                        <option value="JALISCO">JALISCO</option>
                                                        <option value="MEXICO">MEXICO</option>
                                                        <option value="MICHOACAN">MICHOACAN</option>
                                                        <option value="MORELOS">MORELOS</option>
                                                        <option value="NAYARIT">NAYARIT</option>
                                                        <option value="NUEVO LEON">NUEVO LEON</option>
                                                        <option value="OAXACA">OAXACA</option>
                                                        <option value="PUEBLA">PUEBLA</option>
                                                        <option value="QUERETARO">QUERETARO</option>
                                                        <option value="QUINTANA ROO">QUINTANA ROO</option>
                                                        <option value="SAN LUIS POTOSI">SAN LUIS POTOSI</option>
                                                        <option value="SINALOA">SINALOA</option>
                                                        <option value="SONORA">SONORA</option>
                                                        <option value="TABASCO">TABASCO</option>
                                                        <option value="TAMAULIPAS">TAMAULIPAS</option>
                                                        <option value="TLAXCALA">TLAXCALA</option>
                                                        <option value="VERACRUZ">VERACRUZ</option>
                                                        <option value="YUCATAN">YUCATAN</option>
                                                        <option value="ZACATECAS">ZACATECAS</option>
                                                    </Field>
                                                    <span class="input__label">
                                                        Estado
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="cologn"
                                                        value={values.cologn || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Colonia
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="website"
                                                        value={values.website || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Sitio web
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="street"
                                                        value={values.street || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Calle
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="city"
                                                        value={values.city || ''}
                                                        required
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Ciudad
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
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
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    </div>
);

FormView.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default FormView;