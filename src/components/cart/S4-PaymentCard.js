import React, { useEffect, useState } from 'react'
import './CartStyle.css'
import { Divider } from '@material-ui/core'

const PaymentCard = (props) => {

  const { payment, index } = props

  // Aquí deberían ir atributos de las tarjetas bancarias
  const logoBanco = 'https://www.bcreporteros.com/wp-content/uploads/2021/09/fallas-en-bancomer-675x420.jpg'
  const nombreBanco = 'BBVA México, S.A., Institución de Banca Múltiple, Grupo Financiero BBVA México'

  return (
    <div>
      <Divider/>
      <div className='card-info' key={index}>
        <div className='card-img'>
          <img
            src={logoBanco}/>
        </div>
        <div className='card-data'>
          <p>Terminada en {(payment.cardNumber).slice(12, 16)}</p>
          <p>{nombreBanco}</p>
          <p>Vencimiento: {payment.expireDate}</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentCard