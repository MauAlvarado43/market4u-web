import React from "react";
import PropTypes from "prop-types";
import CategoryDropdown from "components/wishlist/CatDropdown.view"
import ProductList from "components/wishlist/ProductList.view"


const WishlistView = () =>
<div className="container" style={{ width: "100%", height: "100vh", overflowY: "scroll" }}>
<div class="d-flex justify-content-end" style={{margin:"15px"}}>
    <div style={{marginLeft:"15px"}}>
    <form>
        <div class="input-group">
        <input type="text" class="form-control" placeholder="Buscar"/>
        <div class="input-group-append">
            <button class="btn btn-light" type="submit">
            <i class="fa fa-search"></i>
            </button>
        </div>
        </div>
    </form>
    </div>
    
    <div class="dropdown" >
        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        Agregados recientemente
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Más antiguos</a>
        <a class="dropdown-item" href="#">Mayor precio</a>
        <a class="dropdown-item" href="#">Menor precio</a>
        </div>
    </div>
    <CategoryDropdown></CategoryDropdown>
</div>

<div>
    <ProductList></ProductList>
</div>

</div>;

WishlistView.propTypes = {};

export default WishlistView;