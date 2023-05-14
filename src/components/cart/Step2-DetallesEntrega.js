import React, { useEffect, useState } from 'react'
import './CartStyle.css'
import './stylesCart2.css'
import { useQuery } from 'seed/gql';
import { Divider } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import PurchaseCard from './S1-Purchase'

const DetallesEntrega = (props) => {
  const { cart, shipments, activeDiv, setActiveDiv, finalAmount, setFinalAmount, totalCost, setTotalCost } = props

  useEffect(() => {
    setActiveDiv(props.activeDiv);
  }, [props.activeDiv]);

  function Publicar(values) {
    console.log(values)
  }

  const email = cart.users[0].email
  const address = cart.users[0].address
  
  return (
    <div className='step-cart'>

      <div className='cart-info delivery-title'>
        <h2>Productos agregados ({finalAmount})</h2>
      </div>

      <div className='cart-products delivery-data'>
        
        <Formik
          initialValues={{
            celular:"5555555555",
            email:email,
            calleNum:address,
            colonia:"",
            cp:"",
            ciudad:"",
            estado:"",
            referencias:"",
          }}
        >
          <Form>
            <table className='delivery-table'>
              <tr>
                <td>
                  <label>Celular</label><br/>
                  <Field name='celular' type='text' />
                </td>
                <td>
                  <label>e-mail</label><br/>
                  <Field name='email' type='email' />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Calle y número</label><br/>
                  <Field name='calleNum'type='text' />
                </td>
                <td>
                  <label>Colonia</label><br/>
                  <Field name='colonia'type='text' />
                </td>
              </tr>
              <tr>
                <td>
                  <label>e-mail</label><br/>
                  <Field name='cp'type='text' />
                </td>
                <td>
                  <label>e-mail</label><br/>
                  <Field name='ciudad'type='text' />
                </td>
              </tr>
              <tr>
                <td>
                  <label>e-mail</label><br/>
                  <Field name='estado'type='text' />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <label>e-mail</label><br/>
                  <Field name='referencias'type='text' />
                </td>
              </tr>
            </table>
          </Form>

        </Formik>
      </div>
      
      <div className='cart-summary'>
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
        <button onClick={() => setActiveDiv(3)} disabled={totalCost == 0} className="buttonShopping" style={{"--bg-color-shop": '#FC4B08', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Continuar</button>
      </div>

    </div>
  )
}

export default DetallesEntrega