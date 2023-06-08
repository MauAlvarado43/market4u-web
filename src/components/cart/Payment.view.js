import React from "react";
import PropTypes from "prop-types";
import Sumary from "components/cart/Sumary";
import { Formik, Form, Field, ErrorMessage } from 'formik'

const PaymentView = ({ user, savePayment, setSavePayment, formikRef, products, onSubmit, onSelectCard, handleSubmit, paymentSchema }) => (
  <div className='row'>

    <div className='col-md-6 text-left p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>

      <div>
        <h1>Método de pago</h1>
        <hr style={{ border: "1px solid black" }} />
      </div>

      <div className="mt-3">
        <h3>Agregar tarjeta de crédito/débito</h3>
        <Formik
          validationSchema={paymentSchema}
          innerRef={formikRef}
          initialValues={{}}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, validateForm, submitCount }) =>
            <Form>

              <div class="form-group my-4">
                <label className="input">
                  <Field type="text" name="name" className="form-control input__field" placeholder=" " />
                  <span class="input__label">
                    Nombre que aparece en la tarjeta <span className='text-danger fw-bold'>*</span>
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

              <div class="form-group my-4">

                <div class="row">

                  <div className="col-md-6">
                    <label className="input">
                      <Field type="text" name="cardNumber" className="form-control input__field" placeholder=" " />
                      <span class="input__label">
                        Número de la tarjeta <span className='text-danger fw-bold'>*</span>
                      </span>
                    </label>
                    {
                      errors.cardNumber && (touched.cardNumber || submitCount > 0)
                        ? <div class="mt-2 text-danger" role="alert">
                          {errors.cardNumber}
                        </div>
                        : null
                    }
                  </div>

                  <div className="col-md-3">
                    <label className="input">
                      <Field type="text" name="expireDate" className="form-control input__field" placeholder=" " />
                      <span class="input__label">
                        Vencimiento <span className='text-danger fw-bold'>*</span>
                      </span>
                    </label>
                    {
                      errors.expireDate && (touched.expireDate || submitCount > 0)
                        ? <div class="mt-2 text-danger" role="alert">
                          {errors.expireDate}
                        </div>
                        : null
                    }
                  </div>

                  <div className="col-md-3">
                    <label className="input">
                      <Field type="number" name="cvv" className="form-control input__field" placeholder=" " />
                      <span class="input__label">
                        CVV <span className='text-danger fw-bold'>*</span>
                      </span>
                    </label>
                    {
                      errors.cvv && (touched.cvv || submitCount > 0)
                        ? <div class="mt-2 text-danger" role="alert">
                          {errors.cvv}
                        </div>
                        : null
                    }
                  </div>

                </div>

              </div>

              <div class="form-group my-4">

                <div class="row">

                  <div className="col-md-6">
                    <label className="input">
                      <Field as="select" name="bank" className="form-control input__field" placeholder=" " >
                        <option value="">Selecciona un banco</option>
                        <option value="BBVA">BBVA Bancomer</option>
                        <option value="Banamex">Citi Banamex</option>
                        <option value="HSBC">HSBC</option>
                        <option value="Santander">Santander</option>
                      </Field>
                      <span class="input__label">
                        Banco de la tarjeta <span className='text-danger fw-bold'>*</span>
                      </span>
                    </label>
                    {
                      errors.bank && (touched.bank || submitCount > 0)
                        ? <div class="mt-2 text-danger" role="alert">
                          {errors.bank}
                        </div>
                        : null
                    }
                  </div>

                  <div className="col-md-6">
                    <label className="input">
                      <Field as="select" name="type" className="form-control input__field" placeholder=" " >
                        <option value="">Selecciona un tipo</option>
                        <option value="DEBIT">Débito</option>
                        <option value="CREDIT">Crédito</option>
                      </Field>
                      <span class="input__label">
                        Tipo de tarjeta <span className='text-danger fw-bold'>*</span>
                      </span>
                    </label>
                    {
                      errors.type && (touched.type || submitCount > 0)
                        ? <div class="mt-2 text-danger" role="alert">
                          {errors.type}
                        </div>
                        : null
                    }
                  </div>

                </div>
              </div>

              <div class="form-group my-4">

                <label className="input">
                  <Field type="text" name="address" className="form-control input__field" placeholder=" " />
                  <span class="input__label">
                    Dirección de la tarjeta <span className='text-danger fw-bold'>*</span>
                  </span>
                </label>
                {
                  errors.address && (touched.address || submitCount > 0)
                    ? <div class="mt-2 text-danger" role="alert">
                      {errors.address}
                    </div>
                    : null
                }

              </div>

              <div class="form-group my-4">
                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                  <input type="checkbox" class="custom-control-input" id="savePayment" checked={savePayment} onChange={() => setSavePayment(!savePayment)} />
                  <label class="custom-control-label" for="savePayment">Guardar tarjeta para futuras compras</label>
                </div>
              </div>

            </Form>
          }
        </Formik>
      </div>

      <hr style={{ border: "1px solid black" }} />

      <div className="mt-5">
        {
          user.payments.map((payment) => (
            <div className="row" key={payment.id}>
              <div className="col-md-10 mx-auto">
                <div className="card d-flex border-0 bg-transparent shadow-none">
                  <div className="row">
                    <div className="col-md-2 justify-content-center align-items-center">
                      {payment.length == 0 ? (
                        <p>No tienes tarjetas registradas</p>
                      ) : payment.bank == "BBVA" ||
                        payment.bank == "BBVA Bancomer" ? (
                        <img
                          className="img-fluid rounded-circle d-flex"
                          src="https://i.pinimg.com/736x/17/cc/2b/17cc2bfef684a477c172130b0731b943.jpg"
                          alt="BBVA"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ) : payment.bank == "Banamex" ||
                        payment.bank == "Citibanamex" ? (
                        <img
                          className="img-fluid rounded-circle d-flex"
                          src="https://banamex.com/assets/img/home/citibanamexLogo.jpg"
                          alt="Banamex"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ) : payment.bank == "HSBC" ? (
                        <img
                          className="img-fluid rounded-circle"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/HSBC_logo.svg/1200px-HSBC_logo.svg.png"
                          alt="HSBC"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ) : payment.bank == "Santander" ? (
                        <img
                          className="img-fluid rounded-circle"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Santander_logo.svg/1200px-Santander_logo.svg.png"
                          alt="Santander"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ) : null}
                    </div>
                    <div className="col-md-7 d-flex flex-column">
                      <div>Terminada en {payment?.cardNumber.slice(-4)}</div>
                      <div>Banco {payment?.bank}</div>
                      <div>Vencimiento {payment?.expireDate}</div>
                    </div>
                    <div className="col-md-3">
                      <h5 className="text-center" style={{ color: "#519EA4", cursor: "pointer" }}
                        onClick={() => onSelectCard(payment.id)}>Usar</h5>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          ))
        }
        {
          user.payments.length == 0 && (
            <h2>No tienes tarjetas agregadas</h2>
          )
        }
      </div>

    </div>

    <div className="col-md-1"></div>

    <div className="col-md-5 mt-5">
      <Sumary products={products} onSubmit={handleSubmit} />
    </div>

  </div>
);

PaymentView.propTypes = {};

export default PaymentView;