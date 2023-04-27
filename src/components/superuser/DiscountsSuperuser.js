import React from "react";

import SuperuserAdminView from "components/superuser/SuperuserAdmin.view";
import TableRowView from "components/superuser/TableRow.view";
import WindowDiscountsSuperuserDelete from "components/superuser/windows/WindowDiscountsSuperuserDelete";
import WindowDiscountsSuperuserEdit from "components/superuser/windows/WindowDiscountsSuperuserEdit";
import WindowDiscountsSuperuserAdd from "components/superuser/windows/WindowDiscountsSuperuserAdd";

function DiscountsSuperuser() {
    const tableData = []; // Arreglo de string con los datos de la tabla
    for (let i = 1; i <= 20; i++) { // Llena la tabla con datos de ejemplo
        tableData.push(
            <TableRowView 
                pageName="discountsSuperuser" 
                cellValues={[
                    "Ofertas de Verano",
                    "18 %",
                    "01/10/2023",
                    "12/11/2023",
                    "Listado"
                ]}
                key={String(i)}
            />
        );
    }
    return <SuperuserAdminView
        pageTitle="Ofertas" 
        pageNewElementIcon={ // El icono de nuevo de la pagina
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
        }
        pageNewElement="Nueva oferta"
        tableTitles={[
            "Nombre",
            "Descuento",
            "Fecha inicio",
            "Fecha fin",
            "Productos"
        ]}
        tableData={tableData}
        pageName="discountsSuperuser"
        deleteWindow={WindowDiscountsSuperuserDelete}
        editWindow={WindowDiscountsSuperuserEdit}
        addWindow={WindowDiscountsSuperuserAdd}
    />;
}
DiscountsSuperuser.propTypes = {};

export default DiscountsSuperuser;