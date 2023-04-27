import React from "react";

import "./superuserStyles.css";
import PropTypes from "prop-types";
import TableActionButtons from "components/superuser/TableActionButtons";

const TableRowView = (props) => ( // Fila de la tabla
    <tr>
        { // Inicia codigo javascript
            props.cellValues.map( // Mapea los valores del arreglo
                (cellText, i) => ( // Cada cadena y su posicion
                    <td key={props.key + i}>{cellText}</td> // A un elemento de la celda de la tabla
                )
            )
        }
        <TableActionButtons pageName={props.pageName}/> {/* Envia el nombre de la pagina al elemento */}
    </tr>
);

TableRowView.propTypes = { // Establece el tipo de dato de las propiedades
    pageName: PropTypes.string, 
    cellValues: PropTypes.array,
    key: PropTypes.string
};

export default TableRowView;