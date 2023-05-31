import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const InfoCards = ({ 
    payments,
    onClickDelete 
}) => (
  <div className="col-md-9 ml-1">
    
    <div
      className="card mt-5 col-md-11 mx-auto"
      style={{
        minHeight: "70vh",
        borderColor: "#519EA4",
        borderWidth: "4px",
      }}
    >
      <p
        className="col-md-3 text-center"
        style={{ backgroundColor: "white" }}
      >
        <h2 className="list-title">Mis tarjetas</h2>
      </p>
      <div className="card-body mt-2" style={{ overflowY: "auto" }}>
        {payments.length == 0 ? (
          <>
            <h3 className = "text-center">No tienes tarjetas registradas.</h3>
            <img
              className="img-fluid rounded-circle d-flex mx-auto" 
              src="https://img.freepik.com/vector-premium/producto-no-encontrado-ilustracion-plana_418302-105.jpg?w=2000"
              style={{width: "400px", height: "400px"}}/>
          </>
        ) : null}
        {payments.map((payment) => (
          <div className="row" key={payment.id}>
            <div className="col-md-10 mx-auto">
              <div className="card d-flex border-0 bg-transparent shadow-none">
                <div className="row">
                  <div className="col-md-2 justify-content-center align-items-center">
                    {payment.bank == "BBVA" ||
                      payment.bank == "BBVA Bancomer" ? (
                      <img
                        className="img-fluid rounded-circle d-flex"
                        src="https://i.pinimg.com/736x/17/cc/2b/17cc2bfef684a477c172130b0731b943.jpg"
                        alt="BBVA"
                        style={{ width: "60px", height: "60px" }}
                      />
                    ) : payment.bank == "Banamex" ||
                      payment.bank == "Citibanamex" ? (
                      <img
                        className="img-fluid rounded-circle d-flex"
                        src="https://banamex.com/assets/img/home/citibanamexLogo.jpg"
                        alt="Banamex"
                        style={{ width: "60px", height: "60px" }}
                      />
                    ) : payment.bank == "HSBC" ? (
                      <img
                        className="img-fluid rounded-circle"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/HSBC_logo.svg/1200px-HSBC_logo.svg.png"
                        alt="HSBC"
                        style={{ width: "60px", height: "60px" }}
                      />
                    ) : payment.bank == "Santander" ? (
                      <img
                        className="img-fluid rounded-circle"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Santander_logo.svg/1200px-Santander_logo.svg.png"
                        alt="Santander"
                        style={{ width: "60px", height: "60px" }}
                      />
                    ) : null}
                  </div>
                  <div className="col-md-7 d-flex flex-column">
                    {payment.bank} - {payment.name}
                    <div>Terminada en **{payment.cardNumber.slice(-4)}</div>
                    <div>
                      {payment.expireDate}
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <Link to={`/payments/${payment.id}/delete`}
                      style={{ color: "blue" }}
                    >
                      Eliminar
                    </Link>
                  </div>
                </div>
                <hr/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

InfoCards.propTypes = {
  payments: PropTypes.object,
  onClickDelete: PropTypes.func,
};

export default InfoCards;