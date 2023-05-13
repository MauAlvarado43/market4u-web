import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ModalRoute from "components/helpers/ModalRoute";
import Nav from "components/nav/Nav";
import PropTypes from "prop-types";


// Componente de la tabla
import List from "components/superadmin/companies/ListSA";
// Componente de crear
import FormSave from "components/superadmin/companies/FormSaveSA";
// Componente de editar
import FormEdit from "components/superadmin/companies/FormSetSA";
// Componente de eliminar
import Delete from "components/superadmin/companies/DeleteSA";
// Componente de detalles
// import Details from "components/superadmin/companies/DetailsSA";


const View = ({ 
    listRef, 
    refetchQuery 
}) => (

    
    <BrowserRouter basename="/superadmin/companies">
    {/**/}
        
        <div class="content container-fluid mt-3">
            {/* Titulo */}
            <div class="row align-items-end mb-3">
                <div class="col-sm"></div>
                <div class="col-sm-auto">
                    <div class="btn-group" role="group">
                        <Link to="/create" className="btn btn-primary rounded-pill px-5">
                            <i class="text-white font-weight-bold tio-add mr-1"></i> 
                            
                            {/**/}
                            Nueva empresa
                            {/**/}

                        </Link>
                    </div>
                </div>
            </div>
            {/* Tabla */}
            {/* Asigna a este componente la referencia mutable para acceder a sus elementos */}
            {/* y propiedades */}
            <List ref={listRef} />
            {/* Ventana crear */}
            <ModalRoute
                path="/create"
                component={FormSave}
                refetchQuery={refetchQuery}
                width="920"
                height="700"
            />
            {/* Ventana editar */}
            <ModalRoute
                path="/:itemId(\d+)/edit"
                component={FormEdit}
                refetchQuery={refetchQuery}
                width="920"
                height="700"
            />
            {/* Ventana eliminar */}
            <ModalRoute
                path="/:itemId(\d+)/delete"
                component={Delete}
                refetchQuery={refetchQuery}
                width="400"
                height="400"
            />
        </div>
    </BrowserRouter>
);

View.propTypes = {
    listRef: PropTypes.element,
    refetchQuery: PropTypes.func
};

export default View;