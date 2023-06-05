import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { MultiField, FileField } from "seed/helpers";

const FormView = ({
    item = {},
    onSubmit,
    onCancel,
    companies = [],
    onChangeType,
    showPassword,
    validationSchema,
    togglePasswordVisibility,
    togglePasswordVisibilityConfirm,
    setPasswordConfirm,
    showPassConfirm,
    handlePasswordChange,
    showCompany,
    changeType,
    userType,
    setSelectedType,
    selectedType,
    validateLetters
}) => (
    <div class="card">
        <div class="card-header">
            <h1 class="card-header-title">
                {item.id ? "Editar usuario" : "Nuevo usuario"}
            </h1>
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-md-11">
                    <Formik
                        initialValues={item}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ values, setFieldValue, errors, touched, submitCount }) => (
                            <Form>
                                <div class="mb-3">
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="text"
                                                    name="firstName"
                                                    value={values.firstName || ""}
                                                    required
                                                    class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                    placeholder=" "
                                                    onKeyPress={(e) => { validateLetters(e) }}
                                                />
                                                <span class="input__label ">
                                                    Nombre(s)
                                                    <span className="text-danger fw-bold">*</span>
                                                </span>
                                            </label>
                                            {/* {
                                                errors.firstName && (touched.firstName || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.firstName}
                                                    </div>
                                                    : null
                                            } */}
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="text"
                                                    name="lastName"
                                                    value={values.lastName || ""}
                                                    required
                                                    class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                    placeholder=" "
                                                    onKeyPress={(e) => { validateLetters(e) }}
                                                />
                                                <span class="input__label">
                                                    Apellido(s)
                                                    <span className="text-danger fw-bold">*</span>
                                                </span>
                                            </label>
                                            {/* {
                                                errors.lastName && (touched.lastName || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.lastName}
                                                    </div>
                                                    : null
                                            } */}
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label class="input">
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    value={values.email || ""}
                                                    required
                                                    class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0 mb-3"
                                                    placeholder=" "
                                                />
                                                <span class="input__label">
                                                    Correo eléctronico
                                                    <span className="text-danger fw-bold">*</span>
                                                </span>
                                            </label>
                                            {/* {
                                                errors.email && (touched.email || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.email}
                                                    </div>
                                                    : null
                                            } */}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-left mb-auto">
                                    <h4>Contraseña</h4>
                                </div>
                                <br />
                                <br />

                                <div className="d-flex mb-5 mt-auto">
                                    <div className="form-group col-md-6">
                                        <label className="input">
                                            <Field
                                                id="pass"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                onChange={handlePasswordChange}
                                                {...(item.id ? null : { required: true })}
                                            ></Field>
                                            <span class="input__label">
                                                Escribe la contraseña
                                                {item.id ? null : (
                                                    <span className="text-danger fw-bold">*</span>
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={togglePasswordVisibility}
                                                    className="btn btn-outline-secondary bg-transparent border-0"
                                                >
                                                    <i
                                                        className={
                                                            showPassword
                                                                ? "fas fa-eye"
                                                                : "fas fa-eye-slash"
                                                        }
                                                    />
                                                </button>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label className="text-left">
                                            {item.id ? (
                                                "En caso de no querer realizar modificaciones en tu contraseña, omite estos campos."
                                            ) : (
                                                "La contraseña debe tener una longitud mínima de 8 caracteres"
                                            )}
                                        </label>
                                    </div>
                                </div>

                                <div className="d-flex mb-5 mt-auto">
                                    <div className="form-group col-md-6">
                                        <label className="input">
                                            <Field
                                                id="passConfirm"
                                                name="passwordConfirm"
                                                type={showPassConfirm ? "text" : "password"}
                                                className="form-control input__field border-top-0 border-left-0
                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                                                onChange={(ev) => setPasswordConfirm(ev.target.value)}
                                                {...(item.id ? null : { required: true })}
                                            ></Field>
                                            <span class="input__label">
                                                Confirmar contraseña
                                                {item.id ? null : (
                                                    <span className="text-danger fw-bold">*</span>
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={togglePasswordVisibilityConfirm}
                                                    className="btn btn-outline-secondary bg-transparent border-0"
                                                >
                                                    <i
                                                        className={
                                                            showPassConfirm
                                                                ? "fas fa-eye"
                                                                : "fas fa-eye-slash"
                                                        }
                                                    />
                                                </button>
                                            </span>
                                            <ErrorMessage
                                                name="passwordConfirm"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </label>
                                        {errors.password &&
                                            (touched.password || submitCount >= 0) ? (
                                            <div class="mt-3 alert alert-soft-danger" role="alert">
                                                {errors.password}
                                            </div>
                                        ) : null}
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
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
);

FormView.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    companies: PropTypes.array.isRequired,
    onChangeType: PropTypes.func,
    showPassword: PropTypes.bool,
    togglePasswordVisibility: PropTypes,
    showPassConfirm: PropTypes.bool,
    togglePasswordVisibilityConfirm: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    setPasswordConfirm: PropTypes.func,
};

export default FormView;