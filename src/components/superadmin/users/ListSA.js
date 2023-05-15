/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";

import View from "components/superadmin/users/ListSA.view";

const List = forwardRef(
    function List(props, ref) {
        const pageSize = 6;
        const [pageNum, setPageNum] = useState(1);

        const reqItems = usePagination(
            `
            {
                userPagination {
                    totalPages
                    users{
                        id
                        username
                        firstName
                        lastName
                        email
                        type
                        street
                        city
                        cp
                        municipality
                        state
                        telephone
                    }
                }
            }
            `, 
            pageNum, 
            pageSize,
            "type = SELLER OR type = NORMAL OR type = ADMIN",
            {orderBy: "-id"}
        );


        if (reqItems.loading) return <Loading />;
        if (reqItems.error) return "Error";

        const { users = [], totalPages = 0 } = reqItems.data.userPagination;
        
        const onClickPage = (pageNum) => {
            setPageNum(pageNum);
        };
        
        return <View  
            items={users}
            pageNum={pageNum}
            totalPages={totalPages}
            onClickPage={onClickPage}
        />;
    }
); 

List.propTypes = {};

export default List;
