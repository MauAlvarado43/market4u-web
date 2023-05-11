import React from "react";
import CreateCardOrderSummary from './createCardOrderSummary';
import product from './json';
import CountProduct from './CountProduct';
import TotalPay from './TotalPay';
import CreditOrDebitCard from './CreditOrDebitCard';

const AppOrderSummary = () => {
  return (
    <div className="container">
      <div>
        <CreditOrDebitCard />
      </div>

      <div>
        <div className="content-product">
          <CountProduct />

          <section className="product">
            {product.map(cards => (
            <CreateCardOrderSummary key={cards.id} card={cards} />
            ))}
          </section>

          <TotalPay />
        </div>
      </div>
    </div>
  );
}

export default AppOrderSummary;