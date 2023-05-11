import React from 'react';

const TotalPay = () => {
  return (
    <div className="total-pay">
      <table>
        <tr className="td-padding">
          <td>Subtotal</td>
          <td>$4698.97</td>
        </tr>
        <tr>
          <td>Envío</td>
          <td>$1354</td>
        </tr>
        <tr>
          <td>IVA</td>
          <td>Incluidos en los productos</td>
        </tr>
        <tr>
          <td><b>TOTAL A PAGAR</b></td>
          <td>$4712.51</td>
        </tr>
      </table>
    </div>
  );
};

export default TotalPay;
