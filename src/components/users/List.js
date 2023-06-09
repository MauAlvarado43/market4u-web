import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/users/List.view";
const List = forwardRef(
    function List(props, ref) {
        const pageSize = 9;
        const [pageNum, setPageNum] = useState(1);
        const userId = sessionStorage.getItem("id")
        const companyID = sessionStorage.getItem("company");
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
            `company.id=${companyID} AND id <> ${userId}`,
            {orderBy: "-id"}
        );
        reqItems.refetch();

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
