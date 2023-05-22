import React from "react";
import PropTypes from "prop-types";
import './CartStyle.css'
import Sumary from "components/cart/Sumary";
import { Formik, Form, Field, ErrorMessage } from 'formik'


const DeliveryView = ({ user = {}, products, onSubmit, states }) => (

  <div className='row'>

    <div className='col-md-6 text-left p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
      <div>
        <h1>Detalles de entrega</h1>
        <hr style={{ border: "1px solid black" }} />
      </div>

      <Formik
        initialValues={user}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, validateForm, submitCount }) =>
          <Form>

            <div class="form-group my-4">

              <div class="row">
                <div class="col-md-6">
                  <label className="input">
                    <Field type="text" name="phone" className="form-control input__field" placeholder=" " />
                    <span class="input__label">
                      Teléfono <span className='text-danger fw-bold'>*</span>
                    </span>
                  </label>
                </div>

                <div class="col-md-6">
                  <label className="input">
                    <Field type="email" name="email" className="form-control input__field" placeholder=" " />
                    <span class="input__label">
                      Correo electrónico <span className='text-danger fw-bold'>*</span>
                    </span>
                  </label>
                </div>
              </div>

            </div>

            <div class="form-group my-4">

              <div class="row">
                <div class="col-md-6">
                  <label className="input">
                    <Field type="text" name="street" className="form-control input__field" placeholder=" " />
                    <span class="input__label">
                      Calle y número <span className='text-danger fw-bold'>*</span>
                    </span>
                  </label>
                </div>

                <div class="col-md-6">
                  <label className="input">
                    <Field type="email" name="colony" className="form-control input__field" placeholder=" " />
                    <span class="input__label">
                      Colonia <span className='text-danger fw-bold'>*</span>
                    </span>
                  </label>
                </div>
              </div>

            </div>

            <div class="form-group my-4">

              <div class="row">
                <div class="col-md-6">
                  <label className="input">
                    <Field type="text" name="cp" className="form-control input__field" placeholder=" " />
                    <span class="input__label">
                      C.P. <span className='text-danger fw-bold'>*</span>
                    </span>
                  </label>
                </div>

                <div class="col-md-6">
                  <label className="input">
                    <Field type="text" name="city" className="form-control input__field" placeholder=" " />
                    <span class="input__label">
                      Ciudad <span className='text-danger fw-bold'>*</span>
                    </span>
                  </label>
                </div>
              </div>

            </div>

            <div class="form-group my-4">

              <label className="input">
                <Field type="text" name="state" className="form-control input__field" placeholder=" " />
                <span class="input__label">
                  Estado <span className='text-danger fw-bold'>*</span>
                </span>
              </label>

            </div>

            <div class="form-group my-4">

              <label className="input">
                <Field type="text" name="references" className="form-control input__field" placeholder=" " />
                <span class="input__label">
                  Referencias <span className='text-danger fw-bold'>*</span>
                </span>
              </label>

            </div>

            {/* <div className='delivery-table'>
            <table>
              <tr>
                <td>
                  <label className='delivery-label'>Celular <span className='required'>*</span></label><br />
                  <Field className='fields-formik' name='phone' type='text' required autoComplete="off" />
                </td>
                <td>
                  <label className='delivery-label'>E-mail <span className='required'>*</span></label><br />
                  <Field className='fields-formik' name='email' type='email' required autoComplete="off" />
                </td>
              </tr>
              <tr>
                <td>
                  <label className='delivery-label'>Calle y número <span className='required'>*</span></label><br />
                  <Field className='fields-formik' name='calleNum' type='text' required autoComplete="off" />
                </td>
                <td>
                  <label className='delivery-label'>Colonia <span className='required'>*</span></label><br />
                  <Field className='fields-formik' name='colonia' type='text' required autoComplete="off" />
                </td>
              </tr>
              <tr>
                <td>
                  <label className='delivery-label'>CP <span className='required'>*</span></label><br />
                  <Field className='fields-formik' name='cp' type='text' required maxLength="5" autoComplete="off" />
                </td>
                <td>
                  <label className='delivery-label'>Ciudad <span className='required'>*</span></label><br />
                  <Field className='fields-formik' name='city' type='text' required autoComplete="off" />
                </td>
              </tr>
              {/* <tr>
                <td>
                  <label className='delivery-label'>Estado <span className='required'>*</span></label><br />
                  <Field component="select" name="estado">
                    <option value="">Selecciona una opción</option>
                    {states.map((state, index) => (
                      <option value={index}>{state}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="estado" component="div" className='required' />
                </td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <label className='delivery-label'>Referencias <span className='required'>*</span></label><br />
                  <Field className='fields-formik' name='referencias' type='text' required autoComplete="off" />
                </td>
              </tr> 
            </table>
          </div> */}

            {/* <div className='delivery-summary'>
            <h1>Resumen de compra</h1>
            <table className='summary-table'>
              <tr>
                <td>Subtotal ({finalAmount} productos):</td>
                <td>$ {totalCost.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Envío:</td>
                <td>$ 99.00</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>$ {(totalCost + 99).toFixed(2)}</td>
              </tr>
            </table>
            <div className='buttons'>
              <button type='submit' disabled={totalCost == 0} className="buttonShopping" style={{ "--bg-color-shop": '#FC4B08', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000' }}>Continuar</button>
              <button type='reset' onClick={(e) => e.preventDefault && setActiveDiv(1)} className="buttonShopping" style={{ "--bg-color-shop": '#519EA4', "--bg-color-hover": '#6ad2d9', "--bg-color-active": '#366a6e' }}>Regresar</button>
            </div>
          </div> */}

          </Form>
        }
      </Formik>

    </div>

    <div className="col-md-1"></div>

    <div className="col-md-5 mt-5">
      <Sumary products={products} onSubmit={onSubmit} />
    </div>

  </div>
);

DeliveryView.propTypes = {};

export default DeliveryView;