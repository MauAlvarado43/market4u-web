import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";
import { DateTime } from 'luxon';
import { Link, NavLink } from "react-router-dom";

const FormView = ({newAddress = {}, shipping = {}, products = {},variant={}, onSubmit, error, onCancel }) => (
    <div class="content container-fluid mt-2">

        <div className="row" >
            <div className="col-3 mr-5" style={{height:"600px", overflowY:"auto",maxWidth:"20%"}}>
                {
                    products.map((product, idx) =>
                        <div key={product.id} className="mb-3 border border-primary rounded-lg" style={{ width: "220px"}}>
                            <div class="container">
                                <div class="row">
                                    <div class="col d-flex justify-content-center mt-2 mb-2">
                                        <div >
                                            <img
                                                src={variant[idx].photos[0].url}
                                                height={110}
                                                className=""
                                                alt="Url"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div style={{color: "black"}}>
                                            {product.name}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div style={{color: "gray"}}>
                                            {product.short_description}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="" >
                                            ${variant[idx].price}
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            
                            
                        </div>
                    )
                }
            </div>
            <div className="ml-1 col-8 border border-primary rounded-lg">
                <div className="list-title">
                    <h2>Detalles del pedido</h2>
                </div>
                <Formik initialValues={{ ...newAddress,...shipping, }} onSubmit={onSubmit}>
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
                                                name="username"
                                                className="form-control input__field border-top-0 border-left-0
                                                border-right-0 border-bottom-0 border-dark rounded-0 mb-2"
                                                placeholder=" "
                                                readonly=" "
                                                value={shipping.buyer.username || ''}
                                            />
                                            <span class="input__label">
                                                Nombre del usuario
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
                                                name="address"
                                                className="form-control input__field border-top-0 border-left-0
                                                border-right-0 border-bottom-0 border-dark rounded-0 mb-2"
                                                placeholder=" "
                                                readonly=" "
                                                value={newAddress.street + ", " + newAddress.references + "." || ''}
                                            />
                                            <span class="input__label">
                                                Dirección
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
                                                name="address"
                                                className="form-control input__field border-top-0 border-left-0
                                                border-right-0 border-bottom-0 border-dark rounded-0 mb-2"
                                                placeholder=" "
                                                readonly=" "
                                                value={newAddress.telephone || ''}
                                            />
                                            <span class="input__label">
                                                Número de contacto
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 pl-3" style={{ color: "black" }}>
                                Información del pedido
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <label class="input">
                                        <Field
                                            name="info"
                                            as="textarea"
                                            className="form-control input__field border-5 border-dark rounded-4 mb-3"
                                            placeholder=" "
                                            rows="6"
                                            value={values.info || ''}
                                        />
                                        <span class="input__label">

                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center pt-2 pb-3">
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
                                    <i className="fas fa-check mr-3 fa-lg"></i>
                                    Aceptar
                                </button>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </div>
    </div>
);
//className="border border-primary rounded-lg"

FormView.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default FormView;