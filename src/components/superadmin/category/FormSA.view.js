import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";
import { DateTime } from 'luxon';
import { Link, NavLink } from "react-router-dom";

const FormView = ({ category = {}, onSubmit, error, onCancel }) =>
    <div class="card">
        <div class="card-header">
            <h1 class="card-header-title">
                {category.id ? "Editar categoría" : "Nueva categoría"}
            </h1>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <Formik initialValues={{ ...category, }} onSubmit={onSubmit}>
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
                                                    className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                    placeholder=" "
                                                    required
                                                    value={values.name || ''}
                                                />
                                                <span class="input__label">
                                                    Nombre de la categoría
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