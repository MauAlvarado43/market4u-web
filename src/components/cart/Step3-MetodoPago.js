import React, { useEffect, useState } from 'react'
import './CartStyle.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Divider } from '@material-ui/core'
import PurchaseCard from './S1-Purchase'
import PaymentCard from './S4-PaymentCard'

const MetodoPago = (props) => {
  
  const { cart, shipments, activeDiv, setActiveDiv, finalAmount, setFinalAmount, totalCost, setTotalCost, prodAmounts, updateProdAmount } = props

  useEffect(() => {
    setActiveDiv(activeDiv);
  }, [activeDiv]);

  function updateAmount(num) {
    setFinalAmount(finalAmount + num)
  }
  
  function updateTotalCost(cost) {
    setTotalCost(totalCost + cost)
  }

  function nextStep(values) {
    setActiveDiv(3)
  }

  const [cardNumber, setCardNumber] = useState('');

  const cardNumberChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    setCardNumber(numericValue);
  };

  const [cvv, setCvv] = useState('');

  const cvvChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    setCvv(numericValue);
  };

  
  return (
    <div className='payment-div'>

      <div className='payment-order-div'>
        <h2>Método de pago</h2>
        
        <Divider/>

        <div className='deb-cred-card'>
          Tarjeta de crédito o débito 
          <svg xmlns="http://www.w3.org/2000/svg" style={{'marginLeft':'5%'}} width="30" height="30" fill="currentColor" className="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"/>
          </svg>
        </div>

        <div className='payment-section'>
          <Formik
            initialValues={{
              firstName:"",
              lastName:"",
              cardNumber:"",
              expireDate:"",
              cvv:"",
              saveCardCheck: false,
            }}
            onSubmit = { nextStep }
          >
            {({ values }) => (
            <Form>
              <div>
                <table>
                  <tr>
                    <td colSpan={3}>
                      <label>Titular de la tarjeta</label><br/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Nombre <span className='required'>*</span></label><br/>
                      <Field className='fields-formik' name='firstName' type='text' required autoComplete="off" />
                    </td>
                    <td colSpan={2}>
                      <label>Apellidos <span className='required'>*</span></label><br/>
                      <Field className='fields-formik' name='lastName' type='text' required autoComplete="off" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Número de tarjeta <span className='required'>*</span></label><br/>
                      <Field className='fields-formik' name='cardNumber' value={cardNumber} type='text' required autoComplete="off" onChange={cardNumberChange} maxLength="16" />
                    </td>
                    <td>
                      <label>Vencimiento <span className='required'>*</span></label><br/>
                      <Field className='fields-formik' name='expireDate' type='text' required autoComplete="off"/>
                    </td>
                    <td>
                      <label>
                        CVV 
                        <span className='required'>* </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                        </svg>
                      </label><br/>
                      <Field className='fields-formik' name='cvv' value={cvv} type='text' required autoComplete="off" onChange={cvvChange} maxLength="4" />
                    </td>
                  </tr>
                </table>
              </div>

              <label>
                <Field type="checkbox" name="saveCardCheck"/>
                Guardar tarjeta para futuras compras
              </label>

            </Form>
            )}
          </Formik>
        </div>

        <div className='payment-section'>
          {cart.users[0].payments.map((payment, index) =>(
              <PaymentCard
                payment={payment}
                index={index}
              />
            ))}
        </div>

        <Divider/>



      </div>



      <div className='payment-products'>

        <div>
          <div className='payment-num-prods'>
            <h2>{finalAmount === 1 ? `${finalAmount} producto` : `${finalAmount} productos`}</h2>
          </div>
          <div className='payment-prods-edit' onClick={() => setActiveDiv(1)}>
            <h2>Editar</h2>
          </div>
        </div>

        <Divider/>

        <div>
          {shipments.map((shipment,indexs) => (
            <div id={indexs}>
              {shipment.purchases.map((purchase, indexp) =>(
                <PurchaseCard
                  activeDiv = {activeDiv}
                  indexs = {indexs}
                  indexp = {indexp}
                  purchase = {purchase}
                  updateAmount = {updateAmount}
                  updateTotalCost = {updateTotalCost}
                  updateProdAmount = {updateProdAmount}
                  prodAmounts = {prodAmounts}
                />
              ))}
            </div>
          ))}
        </div>

        <Divider/>

        <div>
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
              <td colSpan={2}>
                <Divider/>
              </td>
            </tr>
            <tr>
              <td>IVA</td>
              <td>Incluido en los productos</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Divider/>
              </td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>$ {(totalCost + 99).toFixed(2)}</td>
            </tr>
          </table>

          <Divider/>

          <div className='buttons'>
            <button onClick={(e) => setActiveDiv(4)}  disabled={totalCost == 0} className="buttonShopping" style={{"--bg-color-shop": '#FC4B08', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Continuar</button>
            <button onClick={(e) => setActiveDiv(2)} className="buttonShopping" style={{"--bg-color-shop": '#519EA4', "--bg-color-hover": '#6ad2d9', "--bg-color-active": '#366a6e'}}>Regresar</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MetodoPago