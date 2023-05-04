/*Productos que se crean mediante props. Eso datos deben venir de la base de datos.*/

import React from "react";
import CreateElementCard from "./CreateElementCard";
//Importamos las imagenes que tambien deben venir de la base de datos.
import shortMen from './assets/image/botitas.png';
import shortWoman from './assets/image/zapatilla-blanca.png';



const Product= () => {
  return (
    <div className="product">
    <CreateElementCard
      image={shortMen}
      count={'1'}
      make={'Adidas black'}
      product={'Zapatos'}
      gender={'Caballero'}
      color={'Negro'}
      price={'599.99'}
    />

    <CreateElementCard
      image={shortWoman}
      count={'1'}
      make={'New Balance'}
      product={'Zapatos'}
      gender={'Dama'}
      color={'Blanco'}
      price={'200.00'}
    />
  </div>
  );
}

export default Product;