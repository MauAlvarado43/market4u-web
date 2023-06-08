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
        onCancel,
        productSchema 
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
                        validationSchema={productSchema}
                        initialValues={{
                            ...item,
                        }}
                        onSubmit={onSubmit}
                    >
                        {
                            ({
                                values,
                                setFieldValue,
                                errors,
                                touched, 
                                submitCount
                            }) => (
                                <Form>
                                    <h4 className="mt-2">Datos generales</h4>
                                    <div class="mt-4">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        value={values.name || ''}
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Nombre fiscal
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.name && (touched.name || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.name}
                                                    </div>
                                                    : null
                                            }
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
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Nombre comercial
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.commonName && (touched.commonName || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.commonName}
                                                    </div>
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="number"
                                                        name="phone"
                                                        value={values.phone || ''}
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Teléfono
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.phone && (touched.phone || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.phone}
                                                    </div>
                                                    : null
                                            }
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
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Correo eléctronico
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.email && (touched.email || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.email}
                                                    </div>
                                                    : null
                                            }
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
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Sitio web
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.website && (touched.website || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.website}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className = "mt-7">Logo de la empresa</h4>
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
                                    <h4 className="mt-7">Datos fiscales</h4>
                                    <div class="mt-4">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="rfc"
                                                        value={values.rfc || ''}
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        RFC
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.rfc && (touched.rfc || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.rfc}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="mt-7">Dirección</h4>
                                    <div class="mt-4">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="number"
                                                        name="cp"
                                                        value={values.cp || ''}
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Código Postal
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.cp && (touched.cp || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.cp}
                                                    </div>
                                                    : null
                                            }
                                            </div>
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
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Municipio
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.municipality && (touched.municipality || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.municipality}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        as="select"
                                                        name="state"
                                                        value={values.state || ''}
                                                        class="form-control input__field border-dark"
                                                        placeholder=" "
                                                    >
                                                        <option value="">Seleccione una opción</option>
                                                        <option value="AGUA_SCALIENTES">AGUASCALIENTES</option>
                                                        <option value="BAJACALIFORNIA">BAJA CALIFORNIA</option>
                                                        <option value="BAJA_CALIFORNIA_SUR">BAJA CALIFORNIA SUR</option>
                                                        <option value="CAMPECHE">CAMPECHE</option>
                                                        <option value="COAHUILA">COAHUILA</option>
                                                        <option value="COLIMA">COLIMA</option>
                                                        <option value="CHIAPAS">Chiapas</option>
                                                        <option value="CHIHUAHUA">CHIHUAHUA</option>
                                                        <option value="DURANGO">DURANGO</option>
                                                        <option value="CIUDAD_DE_MEXICO">CIUDAD DE MEXICO</option>
                                                        <option value="GUANAJUATO">GUANAJUATO</option>
                                                        <option value="GUERRERO">GUERRERO</option>
                                                        <option value="HIDALGO">HIDALGO</option>
                                                        <option value="JALISCO">JALISCO</option>
                                                        <option value="MEXICO">MEXICO</option>
                                                        <option value="MICHOACAN">MICHOACAN</option>
                                                        <option value="MORELOS">MORELOS</option>
                                                        <option value="NAYARIT">NAYARIT</option>
                                                        <option value="NUEVO_LEON">NUEVO LEON</option>
                                                        <option value="OAXACA">OAXACA</option>
                                                        <option value="PUEBLA">PUEBLA</option>
                                                        <option value="QUERETARO">QUERETARO</option>
                                                        <option value="QUINTANA_ROO">QUINTANA ROO</option>
                                                        <option value="SAN_LUIS_POTOSI">SAN LUIS POTOSI</option>
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
                                                {
                                                errors.state && (touched.state || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.state}
                                                    </div>
                                                    : null
                                            }
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
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Colonia
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.cologn && (touched.cologn || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.cologn}
                                                    </div>
                                                    : null
                                            }
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
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mt-2"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Calle
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.street && (touched.street || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.street}
                                                    </div>
                                                    : null
                                            }
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
                                                        className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Ciudad
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.city && (touched.city || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.city}
                                                    </div>
                                                    : null
                                            }
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