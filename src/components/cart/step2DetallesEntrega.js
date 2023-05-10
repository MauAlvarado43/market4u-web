import React, { useEffect, useState } from 'react'
import './CartStyle.css'
import "./stylesCart2.css"

const DetallesEntrega = (props) => {
  const {cart, activeDiv, setActiveDiv} = props

  useEffect(() => {
    setActiveDiv(props.activeDiv);
  }, [props.activeDiv]);

  let shipments = cart.shippings.filter(shipment => shipment.status === "CREATED");

  
  return (
    
    <div className="content container-fluid">
      <form className="js-step-form" data-hs-step-form-options="{
              &quot;progressSelector&quot;: &quot;#checkoutStepFormProgress&quot;,
              &quot;stepsSelector&quot;: &quot;#checkoutStepFormContent&quot;,
              &quot;endSelector&quot;: &quot;#checkoutFinishBtn&quot;,
              &quot;isValidate&quot;: false
            }"
      >
        <div className="row">
          <div className="col-lg-4 order-lg-2 mb-5 mb-lg-0">
            <div className="summary">
              <div className="table-summary">
                <h1>Resumen de la compra</h1>
                <table>
                  <tr>
                    <td>Subtotal(5 productos):</td>
                    <td><b>$4698.97</b></td>
                  </tr>
                  <tr>
                    <td>Envio:</td>
                    <td>$133.54</td>
                  </tr>
                  <tr>
                    <td>Total:</td>
                    <td><b>$4712.51</b></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>


          <div className="col-lg-8">
            <div className="card mb-3 mb-lg-5">
              <div className="card-header">
                <h4 className="card-header-title">Detalles de Entrega</h4>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <label htmlFor="phoneDeliveryLabel" className="form-label">Télefono</label>
                      <input type="text" className="js-input-mask form-control" name="phoneDeliveryName" id="phoneDeliveryLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" data-hs-mask-options="{
                            &quot;mask&quot;: &quot;+0(000)000-00-00&quot;
                            }"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <label htmlFor="emailDeliveryAddressLabel" className="form-label">Email</label>
                      <input type="text" className="form-control" name="emailDeliveryAddress" id="emailDeliveryAddressLabel" placeholder="clarice@gmail.com" aria-label="clarice@gmail.com" />
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <label htmlFor="streetDeliveryAddressLabel" className="form-label">Calle y Número</label>
                      <input type="text" className="form-control" name="streetDeliveryAddress" id="streetDeliveryAddressLabel" placeholder="Cerrada #5" aria-label="Cerrada"></input>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <label htmlFor="coloniaDeliveryAddressLabel" className="form-label">Colonia</label>
                      <input type="text" className="form-control" name="coloniaDeliveryAddress" id="coloniaDeliveryAddressLabel" placeholder="San Lorenzo" aria-label="San Lorenzo" />
                    </div>
                  </div>
                </div>





                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <label htmlFor="zipCodeDeliveryAddressLabel" className="form-label">Código Postal</label>
                      <input type="text" className="form-control" name="zipCodeDeliveryAddress" id="zipCodeDeliveryAddressLabel" placeholder="55764" aria-label="55764" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <label htmlFor="cityDeliveryAddressLabel" className="form-label">Ciudad</label>
                      <input type="text" className="form-control" name="cityDeliveryAddress" id="cityDeliveryAddressLabel" placeholder="Ciudad de México" aria-label="Ciudad de"></input>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <label htmlFor="stateDeliveryAddressLabel" className="form-label">Estado</label>
                      <input type="text" className="form-control" name="stateDeliveryAddress" id="stateDeliveryAddressLabel" placeholder="Mexico" aria-label="Mexico" />
                    </div>
                  </div>
                </div>

                
                <div className="mb-4">
                  <label htmlFor="referenceDeliveryAddressLabel" className="form-label">Referencias *</label>
                  <input type="text" className="form-control" name="referenceDeliveryAddress" id="referenceDeliveryAddressLabel" placeholder="Entre calles..." aria-label="Entre calles tales..."></input>
                </div>


              </div>

            </div>
          </div>

        </div>


      </form>

      <div className="btn-continue">
        <button onClick={() => setActiveDiv(3)}>Continuar</button>
        <button onClick={() => setActiveDiv(1)}>Regresar</button>
      </div>

    </div>

  )
}

export default DetallesEntrega