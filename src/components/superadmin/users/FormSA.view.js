import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { MultiField, FileField } from "seed/helpers";

const FormView = (
    {
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
        userType
    }
) => (
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
                        {
                            ({
                                values,
                                setFieldValue,
                                errors,
                                touched,
                                submitCount
                            }) => (
                                <Form>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="firstName"
                                                        value={values.firstName || ''}
                                                        required
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label ">
                                                        Nombre(s)
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.firstName && (touched.firstName || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.firstName}
                                                    </div>
                                                    : null
                                            }
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
                                                        value={values.lastName || ''}
                                                        required
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Apellido(s)
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.lastName && (touched.lastName || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.lastName}
                                                    </div>
                                                    : null
                                            }
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
                                                        value={values.email || ''}
                                                        required
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Correo eléctronico
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.email && (touched.email || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.email}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="telephone"
                                                        value={values.telephone || ''}
                                                        required
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0 mb-4"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Teléfono
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.telephone && (touched.telephone || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.telephone}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <span className="h4">Dirección</span>
                                    <div class="mb-3 mt-2">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="street"
                                                        value={values.street || ''}
                                                        required
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Calle
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.street && (touched.street || submitCount > 0)
                                                    ? <div class="mt-2 text-danger" role="alert">
                                                        {errors.street}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="cologn"
                                                        value={values.cologn || ''}
                                                        required
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Colonia
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.cologn && (touched.cologn || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.cologn}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="city"
                                                        value={values.city || ''}
                                                        required
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Ciudad
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.city && (touched.city || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.city}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label class="input">
                                                    <Field
                                                        type="number"
                                                        name="cp"
                                                        required
                                                        value={values.cp || ''}
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Codigo postal
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.cp && (touched.cp || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.cp}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="mb-3 row">
                                            <div class="form-group col-md-6">
                                                <label class="input">
                                                    <Field
                                                        type="text"
                                                        name="municipality"
                                                        value={values.municipality || ''}
                                                        required
                                                        class="form-control input__field border-top-0 border-left-0
                                                        border-right-0 border-bottom-5 border-dark rounded-0"
                                                        placeholder=" "
                                                    />
                                                    <span class="input__label">
                                                        Municipio
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                                {
                                                errors.municipality && (touched.municipality || submitCount > 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.municipality}
                                                    </div>
                                                    : null
                                            }
                                            </div>
                                            <div class="form-group col-md-6 mt-1">
                                                <label class="input">
                                                    <Field
                                                        as="select"
                                                        name="state"
                                                        class="form-control input__field border-dark mb-4"
                                                        required
                                                    >
                                                        <option value="">Seleccione una opción</option>
                                                        <option value="AGUASCALIENTES">AGUASCALIENTES</option>
                                                        <option value="BAJA_CALIFORNIA">BAJA CALIFORNIA</option>
                                                        <option value="BAJA_CALIFORNIA_SUR">BAJA CALIFORNIA SUR</option>
                                                        <option value="CAMPECHE">CAMPECHE</option>
                                                        <option value="COAHUILA">COAHUILA</option>
                                                        <option value="COLIMA">COLIMA</option>
                                                        <option value="CHIAPAS">CHIAPAS</option>
                                                        <option value="CHIHUAHUA">CHIHUAHUA</option>
                                                        <option value="DURANGO">DURANGO</option>
                                                        <option value="CIUDAD_DE_MEXICO">CIUDAD DE MEXICO</option>
                                                        <option value="GUANAJUATO">GUANAJUATO</option>
                                                        <option value="GUERRERO">GUERRERO</option>
                                                        <option value="HIDALGO">HIDALGO</option>
                                                        <option value="JALISCO">JALISCO</option>
                                                        <option value="MEXICO">MEXICO</option>
                                                        <option value="MICHOACAN">MICHOACAN</option>
                                                        <option value="MORELOS">MORELOS</option>
                                                        <option value="NAYARIT">NAYARIT</option>
                                                        <option value="NUEVO_LEON">NUEVO LEON</option>
                                                        <option value="OAXACA">OAXACA</option>
                                                        <option value="PUEBLA">PUEBLA</option>
                                                        <option value="QUERETARO">QUERETARO</option>
                                                        <option value="QUINTANA_ROO">QUINTANA ROO</option>
                                                        <option value="SAN_LUIS_POTOSI">SAN LUIS POTOSI</option>
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
                                                        Estado
                                                        <span className='text-danger fw-bold'>*</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 mt-4">
                                        <div class="mb-3 row">
                                            <div class="form-group col-md-6">
                                                {item.id ? (
                                                    <label class="input" onChange={(e) => changeType(e)}>
                                                        <Field
                                                            id="typeS"
                                                            as="select"
                                                            name="type"
                                                            class="form-control input__field border-dark"
                                                        >
                                                            <option value="ADMIN">ADMIN</option>
                                                            <option value="SELLER">SELLER</option>
                                                            <option value="NORMAL">NORMAL</option>
                                                            <option value="SUPERADMIN">SUPERADMIN</option>
                                                        </Field>
                                                        <span class="input__label">
                                                            Tipo
                                                            <span className='text-danger fw-bold'>*</span>
                                                        </span>
                                                    </label>
                                                ) : (
                                                    <label class="input">
                                                        <Field
                                                            id="type"
                                                            as="select"
                                                            name="type"
                                                            class="form-control input__field border-dark"
                                                            onChange={(e) => onChangeType(e)}
                                                        >
                                                            <option value="ADMIN">ADMIN</option>
                                                            <option value="SELLER">SELLER</option>
                                                            <option value="NORMAL">NORMAL</option>
                                                            <option value="SUPERADMIN">SUPERADMIN</option>
                                                        </Field>
                                                        <span class="input__label">
                                                            Tipo
                                                            <span className='text-danger fw-bold'>*</span>
                                                        </span>
                                                    </label>
                                                )}
                                            </div>
                                            {(userType == "ADMIN" || userType == "SELLER") ? (
                                                <div
                                                    class="form-group col-md-6">
                                                    <label class="input">
                                                        <Field
                                                            id="company"
                                                            as="select"
                                                            name="company.id"
                                                            class="form-control input__field border-dark"
                                                            placeholder=" "
                                                            initialValue=""
                                                            required
                                                        >
                                                            <option value="">Seleccione una opción</option>
                                                            {companies.map((e, idx) =>
                                                                <option key={idx} value={e.id}>{e.name}</option>
                                                            )}
                                                        </Field>
                                                        <span class="input__label">
                                                            Empresa
                                                            <span className='text-danger fw-bold'>*</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            ) : null}
                                            {!item.id ? (
                                                <div
                                                    class="form-group col-md-6"
                                                    style={{ display: showCompany ? 'block' : 'none' }}>
                                                    <label class="input">
                                                        <Field
                                                            id="company"
                                                            as="select"
                                                            name="company.id"
                                                            class="form-control input__field border-dark"
                                                            placeholder=" "
                                                            required
                                                        >
                                                            <option value="">Seleccione una opción</option>
                                                            {companies.map((e, idx) =>
                                                                <option key={idx} value={e.id}>{e.name}</option>
                                                            )}
                                                        </Field>
                                                        <span class="input__label">
                                                            Empresa
                                                            <span className='text-danger fw-bold'>*</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div class="form-group text-left mb-auto">
                                        <   h4>Contraseña</h4>
                                    </div>
                                    <br /><br />
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
                                                >
                                                </Field>
                                                <span class="input__label">
                                                    Escribir contraseña
                                                    {item.id ? null : <span className='text-danger fw-bold'>*</span>}
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
                                            <ErrorMessage
                                                name="passwordConfirm"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-left">
                                                {item.id ? "En caso de no querer realizar modificaciones en tu contraseña, omite estos campos." : null}
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
                                                >
                                                </Field>
                                                <span class="input__label">
                                                    Confirmar contraseña
                                                    {item.id ? null : <span className='text-danger fw-bold'>*</span>}
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
                                            </label>
                                            {
                                                errors.password && (touched.password || submitCount >= 0)
                                                    ? <div class="text-danger mt-2" role="alert">
                                                        {errors.password}
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-left">
                                                Debe tener mínimo: 8 caracteres, un número, una mayúscula y un caracter especial
                                                (por ejemplo: &?!@).
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
    item: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    companies: PropTypes.array.isRequired,
    onChangeType: PropTypes.func,
    showPassword: PropTypes.bool,
    togglePasswordVisibility: PropTypes,
    showPassConfirm: PropTypes.bool,
    togglePasswordVisibilityConfirm: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    setPasswordConfirm: PropTypes.func
};

export default FormView;