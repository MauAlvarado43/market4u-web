import React, { useRef } from "react";
import PropTypes from "prop-types";


import View from "components/superadmin/users/UsersSA.view";


function Element() {
    // Crea una referencia mutable
    // La referencia se puede asignar a un elemento del DOM utilizando el atributo ref de React. 
    // <div ref={myRef}>
    // La referencia se puede utilizar para acceder directamente al elemento del DOM 
    // y modificar sus propiedades. 
    // También se puede utilizar useRef para almacenar valores que persisten entre renderizaciones 
    // de un componente. Como la referencia es mutable, el valor persiste entre renderizaciones
    // del componente.
    // La propiedad current de un objeto useRef en React se utiliza para acceder al valor actual 
    // de la referencia mutable.
    // const counterRef = useRef(0);
    // counterRef.current += 1;
    const listRef = useRef(null);
    // Método que se utiliza en React Query para volver a ejecutar una consulta 
    // y actualizar los datos en caché. 
    // Este método se puede utilizar para refrescar los datos de una consulta en respuesta a 
    // una acción del usuario o a un cambio en el estado de la aplicación
    const refetchQuery = () => {
        // Llama a la funcion refetchQuery que espera este almacenada en listRef
        listRef.current.refetchQuery();
    };
    return <View 
        listRef={listRef} 
        refetchQuery={refetchQuery}
    />;
}

Element.propTypes = {};

export default Element;