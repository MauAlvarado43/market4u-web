import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const OpinionView = ({ shipping, selectedProduct, setSelectedProduct }) =>
  <div className="card">

    <div className="card-header">
      <h1>Escribir una opinión</h1>
    </div>

    <div className="card-body">

      <h4>Selecciona un producto</h4>
      <div className="d-flex p-3" style={{ width: "100%", overflowX: "auto" }}>
        {
          shipping.purchases.map((purchase) => (
            <div className="text-center mr-2" key={purchase.id}
              style={{ minWidth: "25%", maxWidth: "25%", cursor: "pointer" }}
              onClick={() => setSelectedProduct(purchase.id)}
            >
              {
                function () {
                  const data = JSON.parse(JSON.parse(purchase.product));
                  const product = data.product;
                  const variant = data.variant;

                  let style = {};
                  if (selectedProduct && selectedProduct == purchase.id) {
                    style.border = "2px solid #519EA4";
                    style.borderRadius = "10px";
                  }

                  return (
                    <div className="p-2" style={style}>
                      {variant.photos.length > 0 ? (
                        <img className="img-fluid" style={{ maxHeight: "10rem" }} src={variant.photos[0].url} alt="Variant image" />
                      ) : (
                        <i className="fas fa-image fa-10x text-muted"></i>
                      )} <br />
                      <h5>{product.name}</h5>
                    </div>
                  );

                }()
              }
            </div>
          ))
        }

      </div>


      <Formik
        // innerRef={formikRef}
        // validationSchema={deliverySchema}
        initialValues={{}}
      // onSubmit={onSubmit}
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
                  {
                    errors.telephone && (touched.telephone || submitCount > 0)
                      ? <div class="mt-3 alert alert-soft-danger" role="alert">
                        {errors.telephone}
                      </div>
                      : null
                  }
                </div>

                <div class="col-md-6">
                  <label className="input">
                    <Field type="text" name="title" className="form-control input__field" placeholder=" " />
                    <span class="input__label">
                      Título <span className='text-danger fw-bold'>*</span>
                    </span>
                  </label>
                  {
                    errors.title && (touched.title || submitCount > 0)
                      ? <div class="mt-3 alert alert-soft-danger" role="alert">
                        {errors.title}
                      </div> : null
                  }
                </div>
              </div>

            </div>
          </Form>
        }</Formik>

    </div>

  </div>;

OpinionView.propTypes = {};

export default OpinionView;