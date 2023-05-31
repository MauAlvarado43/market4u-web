import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/superadmin/users/ListSA.view";
const List = forwardRef(
    function List(props, ref) {
        const pageSize = 9;
        const [pageNum, setPageNum] = useState(1);
        const userId = sessionStorage.getItem("id")
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
                    }
                }
            }
            `, 
            pageNum, 
            pageSize,
            `(type = SELLER OR type = NORMAL OR type = ADMIN) AND id <> ${userId}`,
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
