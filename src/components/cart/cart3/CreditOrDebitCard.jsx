import React from "react";


const CreditOrDebitCard = () => {
  return (
    <section className="credict-or-debite-card">
      <div className="payment-method">
        <h2>Método de pago</h2>
      </div>

      <div className="center">
        <div className="card-master">
          <span>
            <b>Tarjeta de Crédito y Débito</b>
          </span>

        </div>

        <form className="my-form">
          <ul>
            <li>
              <label htmlFor="name">
                Nombre del titular de la tarjeta<b>*</b>
              </label>
              <input type="text" id="name" placeholder="Clarice Boone" />
            </li>
            <li>
              <label htmlFor="number-card">
                Número de tarjeta<b>*</b>
              </label>
              <input type="text" id="number-card" placeholder="XXXX-XXXX-XXXX-XXXX" />
            </li>
            <li>
              <label htmlFor="expiration">
                Vencimiento<b>*</b>
              </label>
              <input type="text" id="expiration" placeholder="MM/AAAA" />
            </li>
            <li>
              <label htmlFor="cvv" className="not-block">
                Código CVV<b>*</b>
              </label>
             
              <input type="text" id="cvv" placeholder="XXX" />
            </li>
            <li>
              <input type="checkbox" className="check-input" id="check" />
              <label htmlFor="check" className="not-block check">
                Guardar tarjeta para futuras compras
              </label>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default CreditOrDebitCard;
