import React from "react";
import PropTypes from "prop-types";
import './CartStyle.css'
import Sumary from "components/cart/Sumary";
import { states, getStateName } from "components/utils/constants";
import { Formik, Form, Field, ErrorMessage } from 'formik'


const DeliveryView = ({ user = {}, formikRef, products, onSubmit }) => (

  <div className='row'>

    <div className='col-md-6 text-left p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
      <div>
        <h1>Detalles de entrega</h1>
        <hr style={{ border: "1px solid black" }} />
      </div>

      <Formik
        innerRef={formikRef}
        initialValues={user}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, validateForm, submitCount }) =>
          <Form>

            <div class="form-group my-4">

              <div class="row">
                <div class="col-md-6">
                  <label className="input">
                    <Field type="text" name="telephone" className="form-control input__field" placeholder=" " />
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
                    <Field type="email" name="cologn" className="form-control input__field" placeholder=" " />
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
                <Field as="select" name="state" className="form-control input__field" placeholder=" ">
                  <option value="">Selecciona un estado</option>
                  {
                    states.map((state, idx) => {
                      <option key={idx} value={state}>{getStateName(state)}</option>
                    })
                  }
                </Field>
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