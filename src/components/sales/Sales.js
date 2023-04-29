import React from "react";
import PropTypes from "prop-types";
import View from "components/sales/Sales.view";

function Sales() {
    return <View 
        pageTitle="Ofertas"
        pageNewElement="Nueva oferta"
        tableTitles={[
            "Nombre",
            "Descuento",
            "Fecha inicio",
            "Fecha fin",
            "Productos"
        ]}
    />;
}

Sales.propTypes = {};

export default Sales;