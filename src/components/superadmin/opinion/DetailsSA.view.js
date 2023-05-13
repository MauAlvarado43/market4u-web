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
        
        ///
        opinion = {},
        ///

        onSubmit,
        error,
        onCancel
    }
) =>

    <div class="card">

        {/* Header */}
        <div class="card-header">
            <h1 class="card-header-title">
                
                {/*///*/}
                Detalles
                {/*///*/}

            </h1>
        </div>

        {/* Body */}
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <Formik
                        initialValues={{
                            
                            ///
                            ...opinion,
                            ///

                        }}
                    >
                        {({ 
                            values, 
                            setFieldValue 
                        }) =>
                            <Form>
                                <div class="mb-3">

                                    {/* Titulo */}
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="text"
                                                    
                                                    ///
                                                    name="title"
                                                    ///

                                                    class="form-control input__field"
                                                    placeholder=" "
                                                    readonly= " "
                                                    value={values.title || ''}
                                                />
                                                <span class="input__label">
                                                    
                                                    {/*///*/}
                                                    Título de la opinion
                                                    {/*///*/}

                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Descripcion */}
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                
                                                    ///
                                                    name="description"
                                                    as="textarea"
                                                    readonly= " "
                                                    ///

                                                    class="form-control input__field"
                                                    placeholder=" "
                                                    value={values.description || ''}
                                                />
                                                
                                                <span class="input__label">
                                                    
                                                    {/*///*/}
                                                    Descripcion
                                                    {/*///*/}

                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-row">

                                        <div class="form-group col-md-6">
                                            {/* Producto */}
                                            <div class="mb-3">
                                                <div class="form-group">
                                                    <label class="input">
                                                        <Field
                                                            type="text"
                                                            name="product"
                                                            class="form-control input__field"
                                                            placeholder=" "
                                                            readonly= " "
                                                            value={values.product.name +" - " +values.product.company.name || ''}
                                                        />
                                                        <span class="input__label">
                                                            Producto - Empresa
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            {/* Calificacion */}
                                            <div class="mb-3">
                                                <div class="form-group">
                                                    <label class="input">
                                                        <Field
                                                            type="text"
                                                            name="rate"
                                                            class="form-control input__field"
                                                            placeholder=" "
                                                            readonly= " "
                                                            value={values.rate + " / 5" || ''}
                                                        />
                                                        <span class="input__label">
                                                            
                                                            {/*///*/}
                                                            Calificacion de la opinion
                                                            {/*///*/}

                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    

                                    {/* Usuario */}
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="text"
                                                    
                                                    ///
                                                    name="username"
                                                    ///

                                                    class="form-control input__field"
                                                    placeholder=" "
                                                    readonly= " "
                                                    value={values.user.username || ''}
                                                />

                                                <span class="input__label">
                                                    
                                                    {/*///*/}
                                                    Título de la opinion
                                                    {/*///*/}

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