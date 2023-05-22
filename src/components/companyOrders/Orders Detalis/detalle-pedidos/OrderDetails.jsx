import React from "react";

const OrderDetails = ({ order }) => {
  const { nameUser, address, contact, information } = order;

  return (
    <form className="">
      <fieldset className="border-color-839a99 border-radius-10 p-4">
        <legend className="legend-w-30 pl-3 pr-3">Detalles del pedido</legend>
        <div className="pl-4">
          <span>Nombre de usuario</span>
          <p className="text-20 text-dark">{nameUser}</p>
        </div>

        <div className="pl-4 mt-4 mb-4">
          <span>Dirección</span>
          <p className="text-20 text-dark">{address}</p>
        </div>

        <div className="pl-4">
          <span>Número de contacto</span>
          <p className="text-20 text-dark">{contact}</p>
        </div>

        <div className="pl-4 mt-4">
          <span className="d-block mb-2">Información de rastreo</span>
          <div className="h-info border border-secondary border-radius-10">
            <p>{information}</p>
          </div>
        </div>

        <div className='w-50 m-auto pt-4'>
          <button
            className="border-0 w-btn bg-color-Ff4406 border-radius-10 p-2 mr-5 text-white hover-shadow ">
            <i className="fas fa-times"></i>     Cancelar
          </button>

          <button
            className="border-0 w-btn bg-color-50a3a6 border-radius-10 p-2 text-white hover-shadow ">
            <i class="fas fa-check"></i>     Aceptar
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default OrderDetails;