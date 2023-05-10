import React from "react";
import PropTypes from "prop-types";


const WishlistView = () =>
  <div className="container" style={{ width: "100%", height: "100vh", overflowY: "scroll" }}>
    <div>
        <div class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{margin:"10px"}}>
            Todos los productos
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">Action</button>
            <button class="dropdown-item" type="button">Another action</button>
            <button class="dropdown-item" type="button">Something else here</button>
        </div>
        </div>
    </div>
    <div>
    <table  class="table table-bordered table-nowrap table-align-middle card-table dataTable no-footer" 
            role="grid" aria-describedby="datatable_info" style={{width: "100%", borderBottomColor: "black" }}>
            {/***/}<thead class="thead-light">
                <tr role="row">
                    <th style={{width:"250px"}}>P1</th>
                    <th>P1</th>
                    <th>P1</th>
                </tr>
            </thead> 
            <tbody>
                <tr role="row">
                    <th>
                        <img style={{height: "200px", width:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBnmlNdzywUBubkfIMgX_5VF6vqlPAr3aIQ&usqp=CAU"></img>
                    </th>
                    
                    <th>
                        <div className="h-1 mt-0 mb-0">
                        <span className="h3">product.name</span>
                        </div>
                        <div className="">product.shortDescription</div>
                        <div>
                            
                            <i class="far fa-star" style={{color: "#000000"}}></i>
                            <i class="far fa-star" style={{color: "#000000"}}></i>
                            <i class="far fa-star" style={{color: "#000000"}}></i>
                            <i class="far fa-star" style={{color: "#000000"}}></i>
                            <i class="far fa-star" style={{color: "#000000"}}></i>
                        </div>
                    </th>
                    <th>
                        <thead>Fecha</thead>
                        <th>
                            <div class="dropdown">
                            <button class="btn btn-secondary" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{padding:"10px"}}>
                            <i class="fas fa-trash" style={{color: "#ffffff", marginRight:"10px"}}></i>Eliminar
                            </button>
        
                            </div>
                        </th>
                        <th>
                            <div class="dropdown">
                            <button class="btn btn-primary" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{padding:"10px"}}>
                            <i class="fas fa-shopping-cart" style={{color: "#ffffff", marginRight:"10px"}}></i>Agregar a carrito
                            </button>
        
                            </div>
                        </th>
                    </th>
                </tr>
            </tbody>
          </table>
    </div>

  </div>;

WishlistView.propTypes = {};

export default WishlistView;