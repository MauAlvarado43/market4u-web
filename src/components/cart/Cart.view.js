import React from "react";
import PropTypes from "prop-types";
import './CartStyle.css'

const getTotal = (products) => {
  let total = 0;
  for (let product of products) { 
    total += (product?.variant?.price * product?.amount)
  }
  return total;
}

const CartView = ({ products, onSubmit, onDeleteProduct, onAddAmount, onRemoveAmount }) => (
  <div className='row'>

    <div className='col-md-6 text-left'>
      <h2>Productos agregados ({products.length})</h2>
      <hr style={{ border: "1px solid black" }} />
      <div>
        {
          products.map((product, idx) => (
            <div className="row my-5" key={idx}>

              <div className="col-md-3">
                {
                  function () {
                    const variant = product.variant;
                    if (variant.photos.length > 0) {
                      return (
                        <img className="img-fluid" style={{ maxHeight: "10rem" }} src={variant.photos[0].url} alt="Variant image" />
                      )
                    } else {
                      return (
                        <i className="fas fa-image fa-10x text-muted"></i>
                      )
                    }
                  }()
                }
                <div class="d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#519EA4", borderRadius: "50%", width: "40px", height: "40px", color: "white", position: "absolute", top: "80%", left: "0" }}>
                  <p style={{ paddingTop: "15px" }}>{ product?.amount }</p>
                </div>
              </div>

              <div className="col-md-6">
                <h3>{product?.name}</h3>
                <h6>SKU: {product?.sku}</h6>
                <h6>{product?.category?.name}</h6>
                <div className="row mt-3">
                  <div className="col-md-4">

                  </div>
                  <div className="col-md-8">
                    <h3><b>${product?.variant?.price.toFixed(2)}</b></h3>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-4">

                    <div className="d-flex justify-content-center align-items-center" onClick={() => onAddAmount(product.id)}
                      style={{ width: "40px", height: "40px", border: "4px #081856 solid", borderRadius: "50%", color: "#081856", cursor: "pointer" }}>
                      <i class="fas fa-plus"></i>
                    </div>

                  </div>

                  <div className="col-md-4 text-center">
                    <h1>{ product?.amount }</h1>
                  </div>

                  <div className="col-md-4">

                    <div className="d-flex justify-content-center align-items-center" onClick={() => onRemoveAmount(product.id)}
                      style={{ width: "40px", height: "40px", border: "4px #081856 solid", borderRadius: "50%", color: "#081856", cursor: "pointer" }}>
                      <i class="fas fa-minus"></i>
                    </div>

                  </div>
                </div>
                <div className="text-center mt-2">
                  <a
                    type="button"
                    onClick={() => onDeleteProduct(product.id)}
                    className="btn btn-sm rounded-pill"
                    style={{ backgroundColor: "#FC4B08", color: "white" }}
                  >
                    <i class="fas fa-trash mr-2"></i> Eliminar producto
                  </a>
                </div>
              </div>

            </div>
          ))
        }
      </div>

    </div>

    <div className="col-md-1"></div>

    <div className='col-md-5 text-center mt-5'>
      <div className="p-5" style={{ border: "5px #519EA4 solid", borderRadius: "20px" }}>

        <h1 style={{ fontSize: "2rem" }}>Resumen de compra</h1>
        <table className='summary-table'>
          <tr>
            <td><h3>Subtotal ({products.length} productos):</h3></td>
            <td><h3>$ {getTotal(products).toFixed(2)}</h3></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <ul>
                {
                  products.map((product) => (
                    <li key={product.id}>
                      {product?.amount} x {product?.sku} = {(product?.amount * product?.variant?.price).toFixed(2)}
                    </li>
                  ))
                }
              </ul>
            </td>
          </tr>
          <tr>
            <td><h3>Envío:</h3></td>
            <td><h3>$ {
              function () {
                let total = 0;
                for (let product of products) {
                  total += product?.variant?.shipment
                }
                return total.toFixed(2);
              }()
            }</h3></td>
          </tr>
          <tr>
            <td><h3>Total:</h3></td>
            <td><h3>$ {
              function () {
                let totalShipment = 0;
                let total = getTotal(products);
                for (let product of products) {
                  totalShipment += product?.variant?.shipment
                }
                total += totalShipment;
                return total.toFixed(2);
              }()
            }</h3></td>
          </tr>
        </table>
        <div className='text-center'>
          <button onClick={onSubmit} className="buttonShopping" style={{ backgroundColor: "#FC4B08" }}>Continuar</button>
        </div>
      </div>

    </div>


  </div>
);

CartView.propTypes = {};

export default CartView;