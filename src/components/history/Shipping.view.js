import React from "react";
import PropTypes from "prop-types";


const ShippingView = ({ shipping }) => (
  <div className="row">

    <div className="col-md-4">
      {
        shipping.purchases.map((purchase, idx) => (
          <div key={idx} className="row my-5">

            <div className="col-md-3">
              {
                function () {
                  const product = JSON.parse(JSON.parse(purchase?.product));
                  console.log(typeof purchase?.product);
                  console.log("product", product);
                  const variant = product.variant;
                  console.log("variant", variant);
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
                <p style={{ paddingTop: "15px" }}>{purchase?.amount}</p>
              </div>
            </div>


          </div>
        ))
      }
    </div>

    <div className="col-md-6">

    </div>

    <div className="col-md-2">

    </div>

  </div>
);

ShippingView.propTypes = {};

export default ShippingView;