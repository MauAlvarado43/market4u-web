import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";
import { DateTime } from 'luxon';
import { Link, NavLink } from "react-router-dom";

const SaleFormView = ({
    sale = {},
    products = [],
    onSubmit,
    onCancel,
    productSchema
}) =>

    <div class="card">

        <div class="card-header">
            <h1 class="card-header-title">
                {sale.id ? "Editar oferta" : "Nueva oferta"}
            </h1>
        </div>

        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-md-11">
                    <Formik
                        validationSchema={productSchema}
                        initialValues={{
                            ...sale,
                            startDate: sale.startDate ? DateTime.fromISO(sale.startDate).toFormat("yyyy-MM-dd") : "",
                            endDate: sale.endDate ? DateTime.fromISO(sale.endDate).toFormat("yyyy-MM-dd") : "",

                        }}
                        onSubmit={onSubmit}

                    >
                        {({ values,
                            setFieldValue,
                            errors,
                            touched,
                            submitCount, }) =>
                            <Form>
                                <div class="mb-3">

                                    <div class="mt-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0"
                                                    placeholder=" "
                                                    value={values.name || ''}
                                                />
                                                <span class="input__label">
                                                    Nombre de la oferta
                                                    <span className='text-danger fw-bold'>*</span>
                                                </span>
                                            </label>
                                            {
                                                errors.name && (touched.name || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.name}
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>

                                    <div class="mt-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="number"
                                                    name="disscount"
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0"
                                                    placeholder=" "
                                                    value={values.disscount}
                                                />
                                                <span class="input__label">
                                                    Descuento %
                                                    <span className='text-danger fw-bold'>*</span>
                                                </span>
                                            </label>
                                            {
                                                errors.disscount && (touched.disscount || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.disscount}
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>

                                    <div class="mt-7">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    id="startDateValidation"
                                                    type="date"
                                                    name="startDate"
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0"
                                                    placeholder=" "
                                                    value={values.startDate || ''}
                                                />
                                                <span class="input__label">
                                                    Fecha inicial
                                                    <span className='text-danger fw-bold'>*</span>
                                                </span>
                                            </label>
                                            {
                                                errors.startDate && (touched.startDate || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.startDate}
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>

                                    <div class="mt-7">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    id="endDateValidation"
                                                    type="date"
                                                    name="endDate"
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0"
                                                    placeholder=" "
                                                    value={values.endDate || ''}
                                                />
                                                <span class="input__label">
                                                    Fecha de fin
                                                    <span className='text-danger fw-bold'>*</span>
                                                </span>
                                            </label>
                                            {
                                                errors.endDate && (touched.endDate || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.endDate}
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>

                                    <div class="mt-3">
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
                                            {
                                                errors.banner && (touched.banner || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.banner}
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>

                                    <div class="form-group mt-7">
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
                                            <span class="input__label">
                                                Seleccione los productos a los que aplicar la promoción
                                            </span>
                                        </label>
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
                        }
                    </Formik>
                </div>
            </div>
        </div>
    </div>;

SaleFormView.propTypes = {
    sale: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default SaleFormView;
