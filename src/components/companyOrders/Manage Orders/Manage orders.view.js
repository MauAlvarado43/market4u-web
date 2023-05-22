import React from "react";
import './orders.css'


const orders = () => {
    return (
      <main className="wrapper">
        <section className="container">
          <div className="products">
            <ul className="products__lbls">
              <li>Folio</li>
              <li>Dirección</li>
              <li>Estado</li>
              <li>Acciones</li>
            </ul>
  
            <ul className="products__items">
              <li>000000121</li>
              <li>Robert Robertson, 1234 NW Bobcat Lane</li>
              <li>Enviado</li>
              <li>
                <button><i className="fas fa-times"></i>Cancelar</button>
                <button><i className="fas fa-pen"></i> Actualizar</button>
              </li>
            </ul>
  
            <ul className="products__items">
              <li>000000121</li>
              <li>Robert Robertson, 1234 NW Bobcat Lane</li>
              <li>Enviado</li>
              <li>
                <button><i className="fas fa-times"></i>Cancelar</button>
                <button><i className="fas fa-pen"></i> Actualizar</button>
              </li>
            </ul>
  
            <ul className="products__items">
              <li>000000121</li>
              <li>Robert Robertson, 1234 NW Bobcat Lane</li>
              <li>Enviado</li>
              <li>
                <button><i className="fas fa-eye"></i> Visualizar</button>
              </li>
            </ul>
          </div>
        </section>
        <span className="lbl__order">Pedidos</span>
      </main>
    );
  }
  
  export default orders;
  