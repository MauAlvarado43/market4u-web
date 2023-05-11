import React from "react";
import ProductList from "components/wishlist/ProductList";
import { BrowserRouter } from "react-router-dom";

const WishListView = () => (
    <div className="container" style={{ width: "100%" }}>
      <div class="d-flex justify-content-end" style={{ margin: "15px" }}>
        <div style={{ marginLeft: "15px" }}>
          <form>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Buscar" />
              <div class="input-group-append">
                <button class="btn btn-light" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Agregados recientemente
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Más antiguos
            </a>
            <a class="dropdown-item" href="#">
              Mayor precio
            </a>
            <a class="dropdown-item" href="#">
              Menor precio
            </a>
          </div>
        </div>
        <div>
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Todos los productos
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                Categoria 1
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductList/>
      </div>
    </div>
);

WishListView.propTypes = {};

export default WishListView;
