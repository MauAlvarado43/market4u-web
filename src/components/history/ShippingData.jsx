/*Tabla de datos de envio esto tambien debe venir de la base de datos y los datos
Traidos por props*/

import React from "react";

const ShippingData = () => {
  return (
    <div className="shipping-data">
      <h2>Datos de envio</h2>
      <table>
        <tr>
          <td>Dirección</td>
          <td>23 calle city, 1023 New York</td>
        </tr>
        <tr>
          <td>Teléfono</td>
          <td>12345689</td>
        </tr>
        <tr>
          <td>Correo</td>
          <td>correo@correo.com</td>
        </tr>
        <tr>
          <td>Detalles</td>
          <td>Enviado por Estafeta, número 1234568</td>
        </tr>
      </table>
    </div>
  );
}

export default ShippingData;