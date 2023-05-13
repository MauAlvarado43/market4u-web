import React from "react";
import PropTypes from "prop-types";
import ProductList from "components/wishlist/ProductList";
import DeleteProduct from "components/wishlist/Delete";
import { BrowserRouter } from "react-router-dom";
import { ModalRoute } from "seed/helpers";

const WishListView = ({
  categories,
  selectedCategory,
  selectedPriceFilter,
  handleCategoryFilter,
  handlePriceFilter
}) => (
  <BrowserRouter baseName="/wishlist">
    <div className="container" style={{ width: "100%", overflowY:"auto", maxHeight:"75vh"}}>
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
            Filtrar por
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="dropdown-item" onClick={() => handlePriceFilter("all")}>
              Todos
            </div>
            <div class="dropdown-item" onClick={() => handlePriceFilter("highest")}>
              Mayor precio
            </div>
            <div class="dropdown-item" onClick={() => handlePriceFilter("lowest")}>
              Menor precio
            </div>
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
              Filtrar por categoría
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button" onClick={() => handleCategoryFilter("all")}>
                Todas las categorías
              </button>
              {categories.map((category) => (
              <button className="dropdown-item" 
                type="button" 
                key={category.id}
                onClick={() => handleCategoryFilter(category.name)}>
                {category.name}
              </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductList
          selectedCategory={selectedCategory}
          selectedPriceFilter={selectedPriceFilter}
          />
      </div>
    </div>

    <ModalRoute
      path="/wishlist/:productId(\d+)/delete"
      component={DeleteProduct} 
      width="400"
      height="400" 
      style = {{position:"fixed", marginTop:"0", marginLeft:"0"}}
    />

  </BrowserRouter>
);

WishListView.propTypes = {
  categories: PropTypes.array,
  selectedCategory: PropTypes.object,
  selectedPriceFilter: PropTypes.string,
  handleCategoryFilter: PropTypes.func,
  handlePriceFilter: PropTypes.func
};

export default WishListView;
