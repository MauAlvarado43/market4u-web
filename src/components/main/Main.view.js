import React from "react";
import PropTypes from "prop-types";
import "styles/css/main.css";

const MainView = () =>
  <div className="container" style={{height: "100vh", overflow: "scroll"}}>
    <div className="NavBar">
        <h1>Aqui esta el navbar</h1>
        
    </div>

    <div className="container-main-visual">
      <div className="container-main">
            

        <div className="banner-offers">
          <div class="box">
            <img src="https://img.freepik.com/free-psd/horizontal-banner-template-online-fashion-sale_23-2148585405.jpg?w=900&t=st=1682395828~exp=1682396428~hmac=95e44b82bde9a20be85f9cf433d02928ee93149959f3e4e679d5e9b811928321" alt="Cargando imagen..."/>
          </div>   
        </div>

        <div className="container-products">
          <div>
              <h4 className="title">PRODUCTOS DESTACADOS</h4>
          </div>

          <div className="card-deck card-container ">
            <div class="card single-card-product">
              <img class="card-img-top" src="https://media.istockphoto.com/id/185257103/photo/canvas-shoes.jpg?s=612x612&w=0&k=20&c=A9YCJyC34SDCjCRJ2bz8xEIN-DsfjlmMQTAW_3HL6xc=" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Brands Name</h5>
                <p class="card-text">Category</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div> 
          </div>

                

        </div>
      </div>

    </div>
  </div>;

MainView.propTypes = {};

export default MainView;