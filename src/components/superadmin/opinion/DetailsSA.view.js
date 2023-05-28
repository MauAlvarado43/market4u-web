import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";
import { DateTime } from 'luxon';
import { Link, NavLink } from "react-router-dom";

const FormView = (
    {
        opinion = {},
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
                            ...opinion,
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
                                                    name="title"
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                    placeholder=" "
                                                    readonly=" "
                                                    value={values.title || ''}
                                                />
                                                <span class="input__label">
                                                    Título de la opinion
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    name="description"
                                                    as="textarea"
                                                    readonly=" "
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                    placeholder=" "
                                                    value={values.description || ''}
                                                />
                                                <span class="input__label">
                                                    Descripcion
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <div class="mb-3">
                                                <div class="form-group">
                                                    <label class="input">
                                                        <Field
                                                            type="text"
                                                            name="product"
                                                            className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                            placeholder=" "
                                                            readonly=" "
                                                            value={values.product.name + " - " + values.product.company.name || ''}
                                                        />
                                                        <span class="input__label">
                                                            Producto - Empresa
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <div class="mb-3">
                                                <div class="form-group">
                                                    <label class="input">
                                                        <Field
                                                            type="text"
                                                            name="rate"
                                                            className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                            placeholder=" "
                                                            readonly=" "
                                                            value={values.rate + " / 5" || ''}
                                                        />
                                                        <span class="input__label">
                                                            Calificacion de la opinion
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="text"
                                                    name="username"
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                    placeholder=" "
                                                    readonly=" "
                                                    value={values.user.username || ''}
                                                />
                                                <span class="input__label">
                                                    Título de la opinion
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