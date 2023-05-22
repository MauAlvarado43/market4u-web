import React from "react";
import PropTypes from "prop-types";
import { useDetail } from "seed/gql";
import View from "components/cart/Delivery.view";

function Delivery({ user, products, setActiveStep }) {

  const states = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Coahuila',
    'Colima', 'Chiapas', 'Chihuahua', 'Durango', 'Ciudad de México', 'Guanajuato', 'Guerrero',
    'Hidalgo', 'Jalisco', 'Estado de México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León',
    'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa, Sonora', 'Tabasco',
    'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas']

  const onSubmit = (values) => {
    setActiveStep(3);
  }


  return <View user={user} products={products} onSubmit={onSubmit} states={states} />;
}

Delivery.propTypes = {};

export default Delivery;