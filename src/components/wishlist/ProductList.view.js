import { useQuery, gql } from '@apollo/client';
import React from "react";


function ProductList() {
  return(
    <div>
    <table  class="table table-borderless table-nowrap table-align-middle card-table dataTable no-footer" 
            role="grid" aria-describedby="datatable_info" style={{width: "100%", borderBottomColor: "black" }}>
             
      <tbody>
        <tr role="row" style={{borderBottom: "2px solid #9C9C9C",borderTop: "2px solid #9C9C9C",}} >
          <th class="text-center">
              <img style={{height: "150px", width:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBnmlNdzywUBubkfIMgX_5VF6vqlPAr3aIQ&usqp=CAU"></img>
          </th>
          
          <th class="align-middle">
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
            <div className="">product.price</div>
          </th>
          <th class="align-middle">
            <thead>Artículo agregado el product.date</thead>
            <th>
              <div>
              <button class="btn btn-secondary" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{padding:"10px"}}>
              <i class="fas fa-trash" style={{color: "#ffffff", marginRight:"10px"}}></i>Eliminar
              </button>

              </div>
            </th >
            <th class="align-middle">
              <div >
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
    
  );
}

export default ProductList;
