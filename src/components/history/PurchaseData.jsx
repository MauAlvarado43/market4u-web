/*Tabla de datos de compra esto tambien debe venir de la base de datos y los datos
Traidos por props*/

import React from "react";

const PurchaseData = () => {
  return (
    <div className="purchase-data">
      <h2>Datos de la compra</h2>
      <table>
        <tr>
          <td>Fecha</td>
          <td>15 de abril de 2023</td>
        </tr>
        <tr>
          <td>Folio</td>
          <td>12345689</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$799.99</td>
        </tr>
        <tr>
          <td>Tarjeta</td>
          <td>**** **** **** 3458</td>
        </tr>
      </table>
    </div>
  );
}

export default PurchaseData;