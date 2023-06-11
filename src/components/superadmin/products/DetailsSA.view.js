import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import Photos from "components/superadmin/products/PhotosSA";

const ProductFormView = ({ 
  selectedIndex,
  photos,
  tabs = [],
  rows = [],
  product = {}, 
  sales = [], 
  categories = [], 
  onSubmit, 
  hideModal,
  setHideModal,
  setRename,
  onRemoveTab,
  onAddTab,
  setName,
  setCell,
  onAddRow,
  onRemoveRow,
  setPhotos,
  onShowPhotoModal,
  onCancel,
  error,
  productSchema
}) =>
  <div class="card">

    {hideModal 
      ? <></> 
      : <Photos 
          setPhotos={setPhotos}
          selectedIndex={selectedIndex}
          photos={photos}
          setHideModal={setHideModal}
      />
    }

    {/* Header */}
    <div class="card-header">
      <h1 class="card-header-title">
        Detalles del producto
      </h1>
    </div>

    {/* Body */}
    <div class="card-body" style = {{overflowX:"hidden"}}>
      <div class="row justify-content-center">
        <div class="col-md-11">
          <Formik
            validationSchema={productSchema}
            initialValues={{
              ...product
            }}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue, errors, touched, submitCount }) =>
              <Form>
                <div class="mb-3">

                  {/* Name */}
                  <div class="mb-3">

                    <div class="form-group">
                      <label class="input">
                        <Field 
                          type="text" 
                          name="name" 
                          className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                          placeholder=" " 
                          readonly= " "
                          value={values.name || ''} 
                        />
                        <span class="input__label">
                          Nombre del producto 
                        </span>
                      </label>
                    </div>

                    {
                      errors.name && (touched.name || submitCount > 0)
                        ? <div class="mt-3 mb-4 alert alert-soft-danger" role="alert">
                            {errors.name}
                          </div>
                        : null
                    }

                  </div>

                  {/* Short description */}
                  <div class="mb-3">

                    <div class="form-group">
                      <label class="input">
                        <Field 
                          type="text" 
                          name="short_description" 
                          className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                          placeholder=" " 
                          value={values.short_description || ''} 
                          readonly= " "
                        />
                        <span class="input__label">
                          Descripción
                        </span>
                      </label>
                    </div>

                    {
                      errors.short_description && (touched.short_description || submitCount > 0)
                        ? <div class="mt-3 mb-4 alert alert-soft-danger" role="alert">
                            {errors.short_description}
                          </div>
                        : null
                    }

                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div class="">
                        <label class="input">
                          <Field 
                          component="textarea"
                            name="description" 
                            className="form-control input__field border-top-0 border-left-0
                                                    border-right-0 border-bottom-5 border-dark rounded-0 mb-5"
                            placeholder=" " 
                            style={{resize: 'none', height: "7.15rem"}}
                            value={values.description || ''} 
                            readonly= " "
                          />
                          <span class="input__label">
                            Detalles del producto 
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="input">
                              <Field 
                                //type="text"
                                as="select" 
                                name="category.id" 
                                class="form-control input__field border-dark mb-4" 
                                placeholder=" "  
                                readonly= " "
                                style={{pointerEvents: "none"}}
                              >
                                <option value="">Seleccione una opción</option>
                                {categories.map((e, idx) => <option key={idx} value={e.id}>{e.name}</option>) }
                              </Field>
                              <span class="input__label">
                                Categoría 
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div class="col-md-12">
                          <div class="">
                            <label class="input">
                              <Field 
                                //type="text"
                                as="select" 
                                name="sale.id" 
                                class="form-control input__field border-dark mb-4" 
                                placeholder=" " 
                                readonly= " "
                                style={{pointerEvents: "none"}}
                              >
                                <option value="">Seleccione una opción</option>
                                {sales.map((e, idx) => <option key={idx} value={e.id}>{e.name}</option>) }
                              </Field>
                              <span class="input__label">
                                Oferta
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {
                    errors.description && (touched.description || submitCount > 0)
                      ? <div class="mt-3 mb-4 alert alert-soft-danger" role="alert">
                          {errors.description}
                        </div>
                      : null
                  }

                  {
                    errors["category.id"] && ((touched.category && touched.category.id) || submitCount > 0)
                      ? <div class="mt-3 alert alert-soft-danger" role="alert">
                          {errors["category.id"]}
                        </div>
                      : null
                  }

                  <div className="row d-flex align-items-center mt-3">
                    <div class="col-md-9">
                      <h3>Variantes</h3>
                    </div>
                    <div className="col-md-3 d-flex justify-content-end">
                      {/* <button className="btn btn-primary" type="button" onClick={onAddTab}>
                        <i className="fas fa-plus"></i> Agregar variante
                      </button> */}
                    </div>
                  </div>

                  <table className="border-0 mt-3">

                    <tr>
                      {
                        tabs.map((tab, index) => 
                          <th key={index}>
                            <a 
                              href="#"
                              onDoubleClick={() => setRename(index, true)}
                              className="d-flex align-items-center"
                            >

                              {
                                tab.rename
                                  ? <input
                                      id={`tab-${index}`}
                                      type="text"
                                      className="form-control"
                                      style={{width: "10em"}}
                                      value={tab.name}
                                      onBlur={() => setRename(index, false)}
                                      onChange={e => setName(index, e.target.value)}
                                      readonly= " "
                                    />
                                  : <button 
                                      type="button"
                                      style={{width: "10em"}}
                                      className={`btn btn-white btn-link ${tab.edit ? "pr-6" : ""}`}
                                      onDoubleClick={() => setRename(index, true)}
                                    >
                                      {tab.name}
                                    </button>
                              }
                              
                              {
                                tab.edit && !tab.rename
                                  ? <>
                                      <i
                                        style={{left: "-40px", position: "relative"}}
                                        className="fas fa-ellipsis-v ml-3"
                                        role="button"
                                        aria-haspopup="true"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                        id={"tab_dropdown_" + index}
                                      />
                                        <div class="dropdown-menu" >
                                          <a 
                                            href="#"
                                            class="dropdown-item"
                                            onClick={() => {
                                              setRename(index, true)
                                            }}>
                                              Renombrar
                                          </a>
                                          <a
                                            href="#" 
                                            class="dropdown-item" 
                                            onClick={() => onRemoveTab(index)}
                                          >
                                              Eliminar
                                          </a>
                                        </div>
                                    </>
                                  : <>
                                      <i
                                        style={{left: "-40px", position: "relative", opacity: 0}}
                                        className="fas fa-ellipsis-v ml-3"/>
                                    </>
                              }
                              
                            </a>
                          </th>
                        )
                      }
                      <th>
                        {/*<button className="btn btn-link btn-white" type="button" onClick={onAddRow}>
                          <i className="fas fa-plus"></i>
                        </button>*/}
                      </th>
                    </tr>

                    {
                      rows.map((row, rowIndex) =>
                        <tr key={"row_" + rowIndex}>
                          {
                            row.map((cell, cellIndex) =>
                              <td key={"cell_" + cellIndex} className="pt-2">
                                {
                                  tabs[cellIndex].type == "text" || tabs[cellIndex].type == "number"
                                    ? <input
                                        style={{width: "10em"}}
                                        type={tabs[cellIndex].type}
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        value={cell}
                                        onChange={e => setCell(rowIndex, cellIndex, e.target.value)}
                                        readonly= " "
                                      />
                                    : <button 
                                        type="button"
                                        className="btn btn-link btn-white" 
                                        style={{width: "10em"}}
                                        onClick={() => onShowPhotoModal(rowIndex)}
                                      >
                                        <i class="fa fa-folder-open"></i>
                                    </button>
                                  }
                              </td>
                            )
                          }
                          <td>
                            {/* <button className="btn btn-danger" type="button" onClick={() => onRemoveRow(rowIndex)}>
                              <i className="fas fa-minus"></i>
                            </button> */}
                          </td>
                        </tr>
                      )
                    }

                  </table>

                </div>
                
                <div className="d-flex justify-content-center align-items-center pt-2">

                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm rounded-pill px-5 mr-5" 
                    onClick={onCancel}
                  >
                    <i className="fas fa-times mr-3 fa-lg"></i> Cancelar
                  </button>

                  {/* <button 
                    type="submit" 
                    className="btn btn-primary btn-sm rounded-pill px-5 ml-5" 
                  >
                    <i className="fas fa-save mr-3 fa-lg"></i> Guardar
                  </button> */}

                </div>

              </Form> 
            }
          </Formik>
        </div>
      </div>
    </div>

  </div>;

ProductFormView.propTypes = {
  product: PropTypes.object,
  users: PropTypes.array,
  sales: PropTypes.array,
  categories: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  selectedIndex: PropTypes.number,
  photos: PropTypes.array,
  tabs: PropTypes.array,
  rows: PropTypes.array,
  hideModal: PropTypes.func.isRequired,
  onAddTab: PropTypes.func.isRequired,
  onRemoveTab: PropTypes.func.isRequired,
  onAddRow: PropTypes.func.isRequired,
  onRemoveRow: PropTypes.func.isRequired,
  setHideModal: PropTypes.func.isRequired,
  setRename: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setCell: PropTypes.func.isRequired,
  setPhotos: PropTypes.func.isRequired,
  onShowPhotoModal: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  productSchema: PropTypes.object.isRequired,
};

export default ProductFormView;