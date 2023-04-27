import React from "react";

import PropTypes from "prop-types";
import WindowSuperuserDeleteView from "components/superuser/windows/WindowSuperuserDelete.view";

function WindowDiscountsSuperuserDelete() {
    return <WindowSuperuserDeleteView 
        windowTitle="¿Desea eliminar la oferta?"
        windowMessage="Si elige eliminar, los datos se borrarán de forma permanente"
    />; // Pasa todas las propiedades al componente
}

WindowDiscountsSuperuserDelete.propTypes = { // Establece el tipo de dato de las propiedades
};

export default WindowDiscountsSuperuserDelete;