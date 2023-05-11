import React from "react";
import "./stylesCart3.css"
import ResumenPedido from "./ResumenPedido";
import CreateCardOrderSummary from './createCardOrderSummary';
import product from './json';
import CountProduct from './CountProduct';
import TotalPay from './TotalPay';

function CartView4() {
    return (
        <div className="container">
            <div>
                <ResumenPedido />
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


CartView4.propTypes = {};

export default CartView4;