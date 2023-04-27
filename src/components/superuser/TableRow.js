import React from "react";

import PropTypes from "prop-types";
import TableRowView from "components/superuser/TableRow.view";

function TableRow(props) {
    return <TableRowView
        pageName={props.pageName}
        cellValues={props.cellValues}
    />; // Pasa todas las propiedades al componente
}

TableRow.propTypes = { // Establece el tipo de dato de las propiedades
    pageName: PropTypes.string,
    cellValues: PropTypes.array
};

export default TableRow;