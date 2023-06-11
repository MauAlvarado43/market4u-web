import React from "react";
import PropTypes from "prop-types";
import './CartStyle.css'
import Sumary from "components/cart/Sumary";

const getProductPrice = (product) => {
  const sale = product?.sale ?? null;
  const price = product?.variant?.price;
  if (sale) {
    const disscount = sale.disscount;
    const newPrice = price * (disscount / 100);
    return (
      <div className="d-flex">
        <div className="mr-3" style={{ textDecorationLine: "line-through" }}>
          ${price.toFixed(2)}
        </div>
        <i class="fas fa-long-arrow-alt-right mt-1"></i>
        <div className="ml-3">
          ${newPrice.toFixed(2)}
        </div>
      </div>)

  }
  return (<>${price.toFixed(2)}</>)
}

const CartView = ({
  products,
  onSubmit,
  onDeleteProduct,
  onAddAmount,
  onRemoveAmount
}) => (
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
                  style={{ backgroundColor: "#519EA4", borderRadius: "50%", width: "40px", height: "40px", color: "white", position: "absolute", bottom: "0", right: "0" }}>
                  <p style={{ paddingTop: "15px" }}>{product?.amount}</p>
                </div>
              </div>

              <div className="col-md-6">
                <h3>{product?.name}</h3>
                <h6>SKU: {product?.sku}</h6>
                <h6>Categoría: {product?.category?.name}</h6>
                <div className="row mt-3">
                  <div className="col-md-4">

                  </div>
                  <div className="col-md-8">
                    <h3><b>{getProductPrice(product)}</b></h3>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-4">

                    <div className="d-flex justify-content-center align-items-center" onClick={() => onRemoveAmount(product.id)}
                      style={{ width: "40px", height: "40px", border: "4px #081856 solid", borderRadius: "50%", color: "#081856", cursor: "pointer" }}>
                      <i class="fas fa-minus"></i>
                    </div>

                  </div>

                  <div className="col-md-4 text-center">
                    <h1>{product?.amount}</h1>
                  </div>

                  <div className="col-md-4">

                    <div className="d-flex justify-content-center align-items-center" onClick={() => onAddAmount(product.id)}
                      style={{ width: "40px", height: "40px", border: "4px #081856 solid", borderRadius: "50%", color: "#081856", cursor: "pointer" }}>
                      <i class="fas fa-plus"></i>
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
                    <i class="fas fa-trash mr-2"></i> Eliminar
                  </a>
                </div>
              </div>

            </div>
          ))
        }
      </div>

    </div>

    <div className="col-md-1"></div>

    <div className='col-md-5 mt-5'>
      <Sumary products={products} onSubmit={onSubmit} />
    </div>


  </div>
);

CartView.propTypes = {};

export default CartView;