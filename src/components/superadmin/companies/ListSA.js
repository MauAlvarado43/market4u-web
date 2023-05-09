/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";

/////////////////////////////////INICIO-EDITAR////////////////////////////////////
import View from "components/superadmin/companies/ListSA.view";
///////////////////////////////////FIN-EDITAR/////////////////////////////////////

// forwardRef es una funcion de React que permite a un componente pasar una ref 
// a uno de sus hijos
const List = forwardRef(
    function List(props, ref) {
        const pageSize = 6;
        // useState es un hook en React que permite agregar un estado local a un componente funcional. 
        // El hook devuelve una pareja de valores: el estado actual y una función que lo actualiza. 
        // La función que actualiza el estado se utiliza para cambiar el valor del estado y provocar 
        // una nueva renderización del componente
        const [pageNum, setPageNum] = useState(1);
        // usePagination no es un hook nativo de React. Sin embargo, existen paquetes de terceros 
        // que proporcionan un hook usePagination para ayudar a manejar el estado de la paginación 
        // en una lista de elementos.
        // En este caso devuelve un hook para ejecutar una consulta graphql con paginacion
        // sus parametros son un string que es la consulta Graphql, el numero de pagina actual,
        // la cantidad de objetos por pagina, los una consulta con parametros tipo string
        // para restricciones, un objeto opciones (onCompleted, onError, orderBy)
        const reqCompanies = usePagination(
            
            /////////////////////////////////INICIO-EDITAR////////////////////////////////////
            `
            {
                companyPagination {
                    totalPages
                    companies {
                        id
                        name
                        commonName
                        rfc
                        cp
                        phone
                        email
                        municipality
                        state
                    }
                }
            }
            `, 
            ///////////////////////////////////FIN-EDITAR/////////////////////////////////////

            pageNum, 
            pageSize
        );
        // Crea una funcion para ejecutar la consulta con paginacion
        const refetchQuery = () => {
            // El método refetch se utiliza para volver a ejecutar una consulta
            // GraphQL y actualizar los datos en el componente.
            reqCompanies.refetch();
        };
        // useImperativeHandle es un hook en React que se utiliza para personalizar la interfaz 
        // de la referencia que se pasa al componente padre cuando se utiliza ref.
        // El hook permite definir qué propiedades y métodos son accesibles desde el componente padre.
        // El hook toma dos argumentos: la referencia y una función que devuelve un objeto 
        // con las propiedades y métodos que se deben exponer a los componentes padres. 
        // La función se ejecuta en cada renderización del componente y se utiliza para 
        // actualizar la interfaz de la referencia
        useImperativeHandle(
            ref, 
            // Permite que la referencia acceda a la funcion refetchQuery 
            () => ({ 
                refetchQuery 
            })
        );
        // En React, loading es una variable de estado que se utiliza para indicar si una 
        // operación asíncrona está en curso. La variable de estado loading se establece en true 
        // cuando se inicia la operación asíncrona y se establece en false cuando se completa la operación. 
        // loading se utiliza para mostrar un indicador de carga o un mensaje de espera al usuario 
        // mientras se realiza la operación asíncrona. 
        if (reqCompanies.loading) return <Loading />;
        // En React, error es una variable de estado que se utiliza para indicar si se ha producido 
        // un error durante una operación asíncrona. La variable de estado error se establece en true 
        // cuando se produce un error durante la operación asíncrona y se establece en false cuando no 
        // se produce ningún error.
        /////////////////////////////////DESCOMENTAR/////////////////////////////////// 
        if (reqCompanies.error) return "Error";
        // Después de ejecutar una consulta GraphQL con useQuery, los datos se almacenan en la propiedad 
        // .data del objeto de resultado. Puede acceder a los datos de la consulta utilizando la propiedad 
        // .data
        // En este caso extrae el arreglo de los resultados y el total de paginas
        ///////////////////////////////DESCOMENTAR/////////////////////////////////// 
        const { companies = [], totalPages = 0 } = reqCompanies.data.companyPagination;
        ///////////////////////////////INICIO-COMENTAR/////////////////////////////////
        // let items = [
        //     {
        //         id: "1",
        //         name: "NombreFiscal",
        //         commonName: "NombreComercial",
        //         rfc: "AAAAAAAAAAAAAAAA",
        //         cp: "00000",
        //         phone: "0000000000",
        //         email: "a@b.c",
        //         municipality: "municipio",
        //         state: "estado"
        //     },
        //     {
        //         id: "2",
        //         name: "NombreFiscal",
        //         commonName: "NombreComercial",
        //         rfc: "AAAAAAAAAAAAAAAA",
        //         cp: "00000",
        //         phone: "0000000000",
        //         email: "a@b.c",
        //         municipality: "municipio",
        //         state: "estado"
        //     }
        // ];
        // let totalPages = 1;
        /////////////////////////////////FIN-COMENTAR//////////////////////////////////
        // Funcion que actualiza el numero de pagina
        const onClickPage = (pageNum) => {
            // Actualiza el valor del un estado
            setPageNum(pageNum);
        };
        return <View  
            items={companies}
            pageNum={pageNum}
            totalPages={totalPages}
            onClickPage={onClickPage}
        />;
    }
); 

List.propTypes = {};

export default List;
