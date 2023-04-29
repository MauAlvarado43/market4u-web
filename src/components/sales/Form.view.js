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

const SaleFormView = ({ sale = {}, products = [], onSubmit, error, windowTitle }) =>

    // Ventana para editar o agregar
    <div class="css-sales">
        <div class="modal fade show window-always-visible" id="addEditWindow" tabindex="-1" aria-labelledby="addEditWindowLabel" aria-hidden="true"> {/* ventana-emergente transicion visible */}
            <div class="modal-dialog modal-dialog-centered modal-lg"> {/* ventana-emergente centrado tamaño */}
                <div class="modal-content modal-content-padding"> {/* contenido de la ventana */}
                    <div class="modal-header p-4 form-field-style"> {/* encabezado-ventana padding */}
                        <h5 class="modal-title page-modal-title" id="editWindowLabel"> {/* titulo-ventana */}
                            {windowTitle}
                        </h5>
                    </div>
                    <div class="modal-body form-field-style"> {/* contenido-ventana */}
                        <Formik
                            initialValues={
                                {
                                    ...sale,
                                    startDate: sale.startDate ? DateTime.fromISO(sale.startDate).toFormat("yyyy-MM-dd") : "",
                                    endDate: sale.endDate ? DateTime.fromISO(sale.endDate).toFormat("yyyy-MM-dd") : ""
                                }
                            }
                            onSubmit={onSubmit}
                        >
                            {
                                ({ values, setFieldValue }) =>
                                    <Form>

                                        <div class="mb-3 mt-5"> {/* margen-inferior-mediano margen-superior-grande */}

                                            {/* Nombre de la oferta */}
                                            <div class="form-group">
                                                <label className="input">
                                                    <Field type="text" name="name" className="form-control input__field form-field-style" placeholder=" " required /> {/* input */}
                                                    <span class="input__label form-field-style">
                                                        Nombre de la oferta
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div class="form-group">
                                                <label className="input">
                                                    <Field type="number" name="disscount" className="form-control input__field form-field-style" placeholder=" " required /> {/* input */}
                                                    <span class="input__label form-field-style">
                                                        Descuento %
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div class="form-group">
                                                <label className="input">
                                                    <Field type="date" name="startDate" className="form-control input__field form-field-style" placeholder=" " required /> {/* input */}
                                                    <span class="input__label form-field-style">
                                                        Fecha inicial
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div class="form-group">
                                                <label className="input">
                                                    <Field type="date" name="endDate" className="form-control input__field form-field-style" placeholder=" " required /> {/* input */}
                                                    <span class="input__label form-field-style">
                                                        Fecha de fin
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div class="custom-file form-field-style">
                                                <FileField
                                                    className="custom-file-input" name="banner" setFieldValue={setFieldValue}
                                                />
                                                <label class="custom-file-label form-field-style" for="" data-browse="Seleccionar banner">
                                                    <span class="input__label">
                                                        Ningún archivo seleccionado
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                            {/* Products*/}

                                            <div class="form-group">
                                                <label className="input">

                                                    <Field
                                                        as="select"
                                                        name="products.id"
                                                        class="form-control input__field"
                                                        placeholder=" "
                                                        multiple

                                                    >
                                                        {
                                                            products.map((e, idx) =>
                                                                <option key={idx} value={e.id}>{e.name}</option>)
                                                        }
                                                    </Field>
                                                    {/*
                                                <select name="saleBanner" className="form-control input__field" placeholder=" " required> 
                                                    <option>Producto 1</option>
                                                    <option>Producto 2</option>
                                                    <option>Producto 3</option>
                                                </select>
                                                */}
                                                    <span class="input__label">
                                                        Productos con la oferta
                                                    </span>
                                                </label>
                                            </div>

                                        </div>

                                        <div className="d-flex">
                                            <div class="mx-auto align-self-center p-4 window-buttons form-field-style"> {/* pie-ventana-emergente alineacion-izquierda */}
                                                <Link to={""}>
                                                    <button type="button" class="btn btn-warning orange-button big-button mr-4"> {/* boton estilo-boton */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                                        Cancelar
                                                    </button>
                                                </Link>
                                                <button type="submit" class="btn btn-primary light-blue-button big-button ml-4"> {/* boton estilo-boton */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                                    Guardar
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                            }
                        </Formik>
                    </div>

                </div>
            </div>
        </div>
    </div>;

SaleFormView.propTypes = {
    sale: PropTypes.object,
    users: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default SaleFormView;