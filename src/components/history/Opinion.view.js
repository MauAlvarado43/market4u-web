import React from "react";
import PropTypes from "prop-types";
import { Rating } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const getDataPurchase = (purchase) => {
  const data = JSON.parse(JSON.parse(purchase.product));
  return data;
}

const OpinionView = ({
  shipping,
  opinion,
  selectedProduct,
  onSelectPurchase,
  formikRef,
  rate,
  setRate,
  onSubmit,
  onCancel,
  opinionSchema
}) =>
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
              onClick={() => onSelectPurchase(getDataPurchase(purchase).product.id)}
            >
              {
                function () {
                  const data = getDataPurchase(purchase);
                  const product = data.product;
                  const variant = data.variant;

                  let style = {};
                  if (selectedProduct && selectedProduct == getDataPurchase(purchase).product.id) {
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
        innerRef={formikRef}
        validationSchema={opinionSchema}
        initialValues={opinion}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, setFieldValue, validateForm, submitCount }) =>
          <Form>
            {
              errors.product && (touched.product || submitCount > 0)
                ? <div class="mt-2 text-danger" role="alert">
                  {errors.product}
                </div> : null
            }

            <div class="form-group my-4">
              <div class="row">

                <div class="col-md-8">
                  <label className="input">
                    <Field type="text" name="title" className="form-control input__field" placeholder=" " />
                    <span class="input__label">
                      Título <span className='text-danger fw-bold'>*</span>
                    </span>
                  </label>
                  {
                    errors.title && (touched.title || submitCount > 0)
                      ? <div class="mt-2 text-danger" role="alert">
                        {errors.title}
                      </div> : null
                  }
                </div>

                <div class="col-md-4" style={{ marginTop: "-10px" }}>
                  <h5>Calificación general</h5>
                  <Rating
                    name="rating"
                    value={rate}
                    onChange={(event, newValue) => {
                      setRate(newValue);
                      setFieldValue("rate", newValue);
                    }}
                  />
                  {
                    errors.rate && (touched.rate || submitCount > 0)
                      ? <div class="mt-2 text-danger" role="alert">
                        {errors.rate}
                      </div> : null
                  }
                </div>

              </div>
            </div>

            <div class="form-group my-4">

              <div>
                <label className="input">
                  <Field as="textarea" rows="5" name="description" className="form-control input__field" placeholder=" " />
                  <span class="input__label">
                    Descripción <span className='text-danger fw-bold'>*</span>
                  </span>
                </label>
                {
                  errors.description && (touched.description || submitCount > 0)
                    ? <div class="mt-2 text-danger" role="alert">
                      {errors.description}
                    </div> : null
                }
              </div>

            </div>

            <div class="form-group my-3">
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center pt-2">

                  <button
                    type="button" onClick={onCancel}
                    className="btn btn-secondary btn-sm rounded-pill px-5 mr-5"
                  >
                    <i className="fas fa-times mr-3 fa-lg"></i> Cancelar
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary btn-sm rounded-pill px-5 ml-5"
                  >
                    <i className="fas fa-save mr-3 fa-lg"></i> 
                    {opinion.id ? "Editar" : "Guardar"}
                  </button>

                </div>
              </div>
            </div>

          </Form>
        }</Formik>

    </div>

  </div>;

OpinionView.propTypes = {};

export default OpinionView;