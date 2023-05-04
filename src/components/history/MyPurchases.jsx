// Primer componete donde esta la barra de buscar y seleccion

import React from "react";

const MyPurchases = () => {
  return (
    <div className='market'>
      <div className='title-purchase'>
        <h1>Mis compras</h1>
      </div>

      <div className='search-total'>
        <div className='search'>
          <input type="search" name="" id="" placeholder='Buscar' />
        </div>

        <div className='option-total'>
          <select>
            <option selected>Total</option>
            <option value="1">Últimos 3 meses</option>
            <option value="2">Últimos 6 meses</option>
            <option value="3">2023</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MyPurchases;