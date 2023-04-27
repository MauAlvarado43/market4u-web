import React from "react";

import "../superuserStyles.css";
import PropTypes from "prop-types";
import WindowSuperuserView from "components/superuser/windows/WindowSuperuser.view";


import { Formik, Form, Field } from 'formik';


const WindowDiscountsSuperuserView = (props) => (
    // Ventana de agregar o editar ofertas
    <WindowSuperuserView
        windowTitle={props.windowTitle}
        windowContent={

            <Formik
                initialValues={
                    {
                        saleName: "Oferta",
                        saleStartDate: "26/04/2023",
                    }
                }
                onSubmit={
                    () => {

                    }
                }
            >
                {
                    ({ values, setFieldValues }) =>
                        <Form>

                            {/* Key */}
                            <div class="mb-3 mt-5"> {/* margen-inferior-mediano margen-superior-grande */}

                                <div class="form-group">
                                    <label className="input">
                                        <Field type="text" name="saleName" className="form-control input__field form-field-style" placeholder=" " required /> {/* input */}
                                        <span class="input__label form-field-style">
                                            Nombre de la oferta
                                            <span className='text-danger fw-bold'>*</span>
                                        </span>
                                    </label>
                                </div>

                                <div class="form-group">
                                    <label className="input">
                                        <Field type="number" name="saleDiscount" className="form-control input__field form-field-style" placeholder=" " required /> {/* input */}
                                        <span class="input__label form-field-style">
                                            Descuento %
                                            <span className='text-danger fw-bold'>*</span>
                                        </span>
                                    </label>
                                </div>

                                <div class="form-group">
                                    <label className="input">
                                        <Field type="date" name="saleStartDate" className="form-control input__field form-field-style" placeholder=" " required /> {/* input */}
                                        <span class="input__label form-field-style">
                                            Fecha inicial
                                            <span className='text-danger fw-bold'>*</span>
                                        </span>
                                    </label>
                                </div>

                                <div class="form-group">
                                    <label className="input">
                                        <Field type="date" name="saleEndDate" className="form-control input__field form-field-style" placeholder=" " required /> {/* input */}
                                        <span class="input__label form-field-style">
                                            Fecha de fin
                                            <span className='text-danger fw-bold'>*</span>
                                        </span>
                                    </label>
                                </div>

                                <div class="custom-file form-field-style">
                                    <input type="file" class="custom-file-input" id="" />
                                    <label class="custom-file-label form-field-style" for="" data-browse="Seleccionar banner">Ningún archivo seleccionado</label>
                                </div>

                                <div class="form-group">
                                    <label className="input">
                                        <select name="saleBanner" className="form-control input__field" placeholder=" " required> {/* NO FUNCIONA MULTIPLE */}
                                            <option>Producto 1</option>
                                            <option>Producto 2</option>
                                            <option>Producto 3</option>
                                        </select>
                                        <span class="input__label">
                                            Productos con la oferta
                                            <span className='text-danger fw-bold'>*</span>
                                        </span>
                                    </label>
                                </div>

                            </div>

                        </Form>
                }
            </Formik>

        }
        windowButtonIcon={props.windowButtonIcon}
    />
);

WindowDiscountsSuperuserView.propTypes = { // Establece el tipo de dato de las propiedades
    windowTitle: PropTypes.string,
    formValues: PropTypes.array,
    windowButtonIcon: PropTypes.element
};

export default WindowDiscountsSuperuserView;