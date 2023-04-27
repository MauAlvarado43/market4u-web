import React from "react";

import PropTypes from "prop-types";
import TableActionButtonsView from "components/superuser/TableActionButtons.view";

function TableActionButtons(props) {
    return <TableActionButtonsView
        pageName={props.pageName}
    />; // Pasa todas las propiedades al componente
}

TableActionButtons.propTypes = { // Establece el tipo de dato de las propiedades
    pageName: PropTypes.string
};

export default TableActionButtons;