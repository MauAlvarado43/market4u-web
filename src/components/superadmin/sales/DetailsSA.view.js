import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";
import { DateTime } from 'luxon';
import { Link, NavLink } from "react-router-dom";

const FormView = (
    {
        sale = {},
        onSubmit,
        error,
        onCancel
    }
) =>
    <div class="card">
        <div class="card-header">
            <h1 class="card-header-title">
                Detalles
            </h1>
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-md-11">
                    <Formik
                        initialValues={{
                            ...sale,
                            startDate: sale.startDate ? DateTime.fromISO(sale.startDate).toFormat("yyyy-MM-dd") : "",
                            endDate: sale.endDate ? DateTime.fromISO(sale.endDate).toFormat("yyyy-MM-dd") : ""
                        }}
                    >
                        {({
                            values,
                            setFieldValue
                        }) =>
                            <Form>
                                <div class="mb-3">
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    readonly=" "
                                                    value={values.name || ''}
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                    placeholder=" "
                                                />
                                                <span class="input__label">
                                                    Nombre
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="text"
                                                    name="disscount"
                                                    readonly=" "
                                                    value={values.disscount + " %"}
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                    placeholder=" "
                                                />
                                                <span class="input__label">
                                                    Descuento
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="date"
                                                    name="startDate"
                                                    readonly=" "
                                                    value={values.startDate || ''}
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                    placeholder=" "
                                                />
                                                <span class="input__label">
                                                    Fecha inicial
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="date"
                                                    name="endDate"
                                                    readonly=" "
                                                    value={values.endDate || ''}
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                    placeholder=" "
                                                />
                                                <span class="input__label">
                                                    Fecha de fin
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label className="input">
                                            <Field
                                                as="select"
                                                name="products.id"
                                                multiple
                                                class="form-control input__field"
                                                placeholder=" "
                                            >
                                                {
                                                    values.products.map((e, idx) =>
                                                        <option key={idx} value={e.id}>{e.name}</option>)
                                                }
                                            </Field>
                                            <span class="input__label">
                                                Productos con la oferta
                                            </span>
                                        </label>
                                    </div>
                                    <div class="mb-3">
                                        <span className = "h4">
                                            Banner
                                        </span>
                                        <div class="text-center form-group">
                                            <label class="input">
                                                <img
                                                    src={values.banner ? values.banner.url : ''}
                                                    height={110}
                                                    className="mr-3"
                                                    alt="Banner"
                                                />
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
                                </div>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </div>
    </div>;

FormView.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default FormView;