import React from "react";


const ResumenPedido = () => {
    return (
        <div className="summar">
            <div className="table-summar">
                <h1>Resumen del pedido</h1>
                <hr />
                <div className="contact">
                    <div className="contact__dt">
                        <p><b>Contacto</b></p>
                        <p className="contact__editar">Editar</p>
                    </div>
                    <div>234234234, email@email.com</div>
                </div>
                <hr />
                <div className="contact">
                    <div className="contact__dt">
                        <p><b>Direccion de Entrega</b></p>
                        <p className="contact__editar">Editar</p>
                    </div>
                    <div>
                        Cerrada de la preparatoria 5 <br />San lorenzo
                        565653 <br />
                        Mexico
                    </div>
                </div>
                <hr />
                <div className="contact">
                    <div className="contact__dt">
                        <p><b>Metodo de pago</b></p>
                        <p className="contact__editar">Editar</p>
                    </div>
                    <div className="contact__img">
                        <img
                            src="https://www.bbva.mx/content/dam/public-web/mexico/images/app-icons/app-bbva-icon-320.png.img.320.1634325969033.png"
                            alt=""
                        />
                        <div>
                            Terminada en 5656 <br />lorem ipsus, cnrerr
                            nexrr <br />
                            lorem ipsus
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div class="btn-placeorder">
                <button>
                    <span>Realizar Pedido</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 4z"
                        ></path>
                        <circle
                            cx="10.5"
                            cy="19.5"
                            r="1.5"
                        ></circle>
                        <circle
                            cx="16.5"
                            cy="19.5"
                            r="1.5"
                        ></circle>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ResumenPedido;
