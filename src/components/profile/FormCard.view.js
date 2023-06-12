import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";

const FormCard = ({ 
    paymentSchema, 
    onSubmit, 
    onCancel, 
    payment = {}
}) => (
  <div className="card">
    <div className="card-header">
        {payment.id ? 
            <h1 className="card-title">Editar método de pago</h1>
        : <h1 className="card-title">Agregar método de pago</h1>}
    </div>
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-md-11">
          <Formik
            validationSchema={paymentSchema}
            initialValues={{
                ...payment
            }}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched, submitCount }) => (
              <Form>
                <div class="form-group">
                  <label className="input">
                    <Field
                      type="text"
                      name="name"
                      className="form-control input__field"
                      value={values.name || ""}
                      placeholder=" "
                    />
                    <span class="input__label">
                      Nombre que aparece en la tarjeta{" "}
                      <span className="text-danger fw-bold">*</span>
                    </span>
                  </label>
                  {errors.name && (touched.name || submitCount > 0) ? (
                    <div class="mt-2 text-danger" role="alert">
                      {errors.name}
                    </div>
                  ) : null}
                </div>

                <div class="form-group my-4">
                  <div class="row">
                    <div className="col-md-6">
                      <label className="input">
                        <Field
                          type="text"
                          name="cardNumber"
                          className="form-control input__field"
                          value={values.cardNumber || ""}
                          placeholder=" "
                        />
                        <span class="input__label">
                          Número de la tarjeta{" "}
                          <span className="text-danger fw-bold">*</span>
                        </span>
                      </label>
                      {errors.cardNumber &&
                      (touched.cardNumber || submitCount > 0) ? (
                        <div class="mt-2 text-danger" role="alert">
                          {errors.cardNumber}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-md-3">
                      <label className="input">
                        <Field
                          type="text"
                          name="expireDate"
                          className="form-control input__field"
                          value={values.expireDate || ""}
                          placeholder=" "
                        />
                        <span class="input__label">
                          Vencimiento{" "}
                          <span className="text-danger fw-bold">*</span>
                        </span>
                      </label>
                      {errors.expireDate &&
                      (touched.expireDate || submitCount > 0) ? (
                        <div class="mt-2 text-danger" role="alert">
                          {errors.expireDate}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-md-3">
                      <label className="input">
                        <Field
                          type="number"
                          name="cvv"
                          className="form-control input__field"
                          placeholder=" "
                        />
                        <span class="input__label">
                          CVV <span className="text-danger fw-bold">*</span>
                        </span>
                      </label>
                      {errors.cvv && (touched.cvv || submitCount > 0) ? (
                        <div class="mt-2 text-danger" role="alert">
                          {errors.cvv}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div class="form-group my-4">
                  <div class="row">
                    <div className="col-md-6">
                      <label className="input">
                        <Field
                          as="select"
                          name="bank"
                          className="form-control input__field"
                          value={values.bank || ""}
                          placeholder=" "
                        >
                          <option value="">Selecciona un banco</option>
                          <option value="BBVA">BBVA Bancomer</option>
                          <option value="Banamex">Citi Banamex</option>
                          <option value="HSBC">HSBC</option>
                          <option value="Santander">Santander</option>
                        </Field>
                        <span class="input__label">
                          Banco de la tarjeta{" "}
                          <span className="text-danger fw-bold">*</span>
                        </span>
                      </label>
                      {errors.bank && (touched.bank || submitCount > 0) ? (
                        <div class="mt-2 text-danger" role="alert">
                          {errors.bank}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-md-6">
                      <label className="input">
                        <Field
                          as="select"
                          name="type"
                          className="form-control input__field"
                          value={values.type || ""}
                          placeholder=" "
                        >
                          <option value="">Selecciona un tipo</option>
                          <option value="DEBIT">Débito</option>
                          <option value="CREDIT">Crédito</option>
                        </Field>
                        <span class="input__label">
                          Tipo de tarjeta{" "}
                          <span className="text-danger fw-bold">*</span>
                        </span>
                      </label>
                      {errors.type && (touched.type || submitCount > 0) ? (
                        <div class="mt-2 text-danger" role="alert">
                          {errors.type}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div class="form-group my-4">
                  <label className="input">
                    <Field
                      type="text"
                      name="address"
                      className="form-control input__field"
                      value={values.address || ""}
                      placeholder=" "
                    />
                    <span class="input__label">
                      Dirección de la tarjeta{" "}
                      <span className="text-danger fw-bold">*</span>
                    </span>
                  </label>
                  {errors.address && (touched.address || submitCount > 0) ? (
                    <div class="mt-2 text-danger" role="alert">
                      {errors.address}
                    </div>
                  ) : null}
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

FormCard.propTypes = {
  paymentSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  payment: PropTypes.object,
};

export default FormCard;
