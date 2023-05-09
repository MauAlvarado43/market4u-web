/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

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
        companies = []
    }
) => (
    <div class="card">
        {/* Titulo */}
        <div class="card-header">
            <h1 class="card-header-title">

                {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                {item.id ? "Editar usuario" : "Nuevo usuario"}
                {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

            </h1>
        </div>
        {/* Contenido */}
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <Formik
                        initialValues={{

                            ///
                            ...item,
                            ///

                        }}
                        onSubmit={onSubmit}
                    >
                        {
                            ({
                                values,
                                setFieldValue
                            }) => (
                                <Form>
                                    {/* Correo */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="email"
                                                        value={values.email || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Correo eléctronico
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Nombre */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="firstName"
                                                        value={values.firstName || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Nombre
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Apellido */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="lastName"
                                                        value={values.lastName || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Apellido
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Contraseña */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="password"
                                                        name="password"
                                                        value={values.password || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Contraseña
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Repetir contraseña */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="password"
                                                        name="password2"
                                                        value={values.password2 || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Confirmar contraseña
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Foto */}
                                    <div class="mb-3">
                                        <div class="custom-file form-field-style">
                                            <FileField
                                                className="custom-file-input"

                                                /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                name="photo"
                                                required
                                                ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                setFieldValue={setFieldValue}
                                            />
                                            <label class="custom-file-label form-field-style" for="" data-browse="Seleccionar banner">
                                                <span class="input__label">

                                                    {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                    Ningún archivo seleccionado
                                                    <span className='text-danger fw-bold'>*</span>
                                                    {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    {/* Tipo */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        // type="text"
                                                        as="select"
                                                        name="type"
                                                        //value={values.type || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    >
                                                        <option value="SUPERADMIN">SUPERADMIN</option>
                                                        <option value="ADMIN">ADMIN</option>
                                                        <option value="SELLER">SELLER</option>
                                                        <option value="NORMAL">NORMAL</option>
                                                    </Field>
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Tipo
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Calle */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="street"
                                                        value={values.street || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Calle
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Colonia */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="cologn"
                                                        value={values.cologn || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Colonia
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Ciudad */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="city"
                                                        value={values.city || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Ciudad
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* CP */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="cp"
                                                        value={values.cp || ''}
                                                        //required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Codigo postal
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Municipio */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="municipality"
                                                        value={values.municipality || ''}
                                                        //required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Municipio
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Estado */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        // type="text"
                                                        as="select"
                                                        name="state"
                                                        // value={values.state || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
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

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Estado
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Telefono */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        type="text"
                                                        name="telephone"
                                                        value={values.telephone || ''}
                                                        required
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Teléfono
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Empresa */}
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field

                                                        /////////////////////////////////INICIO-EDITAR////////////////////////////////////
                                                        as="select"
                                                        name="company.id"
                                                        ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

                                                        class="form-control input__field"
                                                        placeholder=" "
                                                    >
                                                        <option value="">Seleccione una empresa</option>
                                                        {companies.map((e, idx) => <option key={idx} value={e.id}>{e.name}</option>)}
                                                    </Field>
                                                    <span class="input__label">

                                                        {/*/////////////////////////////////INICIO-EDITAR////////////////////////////////////*/}
                                                        Empresa
                                                        <span className='text-danger fw-bold'>*</span>
                                                        {/*///////////////////////////////////FIN-EDITAR/////////////////////////////////////*/}

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