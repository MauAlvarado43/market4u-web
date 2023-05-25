import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Divider } from '@material-ui/core'

const DetallesEntrega = (props) => {
  const { cart, shipments, activeDiv, setActiveDiv, finalAmount, setFinalAmount, totalCost, setTotalCost } = props

  useEffect(() => {
    setActiveDiv(props.activeDiv);
  }, [props.activeDiv]);

  const email = cart.users[0].email
  const address = cart.users[0].address

  const [numValue, setNumValue] = useState('');

  function nextStep(values) {
      setActiveDiv(3)
  }

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    setNumValue(numericValue);
  };

  const states = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Coahuila', 'Colima', 'Chiapas', 'Chihuahua', 'Durango', 'Ciudad de México', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Estado de México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa, Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas']
  
  return (
    <div className='delivery-cart'>
      {console.log(finalAmount)}

      <div className='delivery-title'>
        <h2>Detalles de entrega</h2>
        <Divider/>
      </div>

      <div className='delivery-data'>
        
        <Formik
          initialValues={{
            celular:"0000000000",
            email:email,
            calleNum:address,
            colonia:"Colonia",
            cp:"00000",
            ciudad:"CDMX",
            estado:9,
            referencias:"Entre calle 1 y calle 2",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.estado) {
              errors.estado = 'Debes seleccionar una opción';
            }
            return errors;
          }}
          onSubmit = { nextStep }
        >
          <Form className='test'>
            <div className='delivery-table'>
              <table>
                <tr>
                  <td>
                    <label className='delivery-label'>Celular <span className='required'>*</span></label><br/>
                    <Field className='fields-formik' name='celular' type='text' required autoComplete="off" />
                  </td>
                  <td>
                    <label className='delivery-label'>e-mail <span className='required'>*</span></label><br/>
                    <Field className='fields-formik' name='email' type='email' required autoComplete="off" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className='delivery-label'>Calle y número <span className='required'>*</span></label><br/>
                    <Field className='fields-formik' name='calleNum' type='text' required autoComplete="off" />
                  </td>
                  <td>
                    <label className='delivery-label'>Colonia <span className='required'>*</span></label><br/>
                    <Field className='fields-formik' name='colonia' type='text' required autoComplete="off" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className='delivery-label'>CP <span className='required'>*</span></label><br/>
                    <Field className='fields-formik' value={numValue} onChange={handleChange} name='cp' type='text' required maxLength="5" autoComplete="off" />
                  </td>
                  <td>
                    <label className='delivery-label'>Ciudad <span className='required'>*</span></label><br/>
                    <Field className='fields-formik' name='ciudad' type='text' required autoComplete="off" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className='delivery-label'>Estado <span className='required'>*</span></label><br/>
                    <Field component="select" name="estado">
                      <option value="">Selecciona una opción</option>
                      {states.map((state,index) => (
                        <option value={index}>{state}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="estado" component="div" className='required' />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label className='delivery-label'>Referencias <span className='required'>*</span></label><br/>
                    <Field className='fields-formik' name='referencias' type='text' required autoComplete="off" />
                  </td>
                </tr>
              </table>
            </div>

            <div className='delivery-summary'>
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
              <div className='buttons'>
                <button type='submit' disabled={totalCost == 0} className="buttonShopping" style={{"--bg-color-shop": '#FC4B08', "--bg-color-hover": '#fb8332', "--bg-color-active": '#c85000'}}>Continuar</button>
                <button type='reset' onClick={(e) => e.preventDefault && setActiveDiv(1)} className="buttonShopping" style={{"--bg-color-shop": '#519EA4', "--bg-color-hover": '#6ad2d9', "--bg-color-active": '#366a6e'}}>Regresar</button>
              </div>
            </div>

          </Form>
        </Formik>
      </div>

    </div>
  )
}

export default DetallesEntrega