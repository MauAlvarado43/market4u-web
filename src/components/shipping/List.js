import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/shipping/List.view";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";

const List = forwardRef(
    function List(props, ref) {
        const pageSize = 6;
        const [pageNum, setPageNum] = useState(1);
        const reqShipping = usePagination(`
            {
                shippingPagination {
                    totalPages
                    shippings {
                        id
                        folio
                        address
                        status
                        company{
                            id
                        }
                    }
                }
            }`,
            pageNum,
            pageSize,
            "company.id=" + sessionStorage.getItem("company")
        );

        const refetchQuery = () => reqShipping.refetch();

        useImperativeHandle(ref, () => ({ refetchQuery }));

        if (reqShipping.loading) return <Loading />;
        if (reqShipping.error) return "Error";

        const { shippings = [], totalPages = 0 } = reqShipping.data.shippingPagination;
        let newShippings = [];
        
        for(let i = 0; i < shippings.length;i ++) {
            let newShipping = {...shippings[i]};            
            if (shippings[i].status == "CREATED") newShipping.status = 'Por enviar';
            if (shippings[i].status == "SENT") newShipping.status = 'Enviado';
            if (shippings[i].status == "COMPLETED") newShipping.status = 'Entregado';
            if (shippings[i].status == "CANCELED") newShipping.status = 'Cancelado';

            if(shippings[i].status == "CREATED" || shippings[i].status === "SENT")
                newShipping.twoButtons = true
            else
                newShipping.twoButtons = false
            if(newShipping.address != undefined)
                newShipping.newAddress = JSON.parse(newShipping.address)
            newShippings.push(newShipping)
        

        }

        const onClickPage = (pageNum) =>
            setPageNum(pageNum);

        return <View
            shippings={newShippings}
            pageNum={pageNum}
            totalPages={totalPages}
            onClickPage={onClickPage}
        />;
    }
);

List.propTypes = {};

export default List;
