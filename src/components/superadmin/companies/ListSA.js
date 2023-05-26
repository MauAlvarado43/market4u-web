import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import View from "components/superadmin/companies/ListSA.view";

const List = forwardRef(
    function List(props, ref) {

        const pageSize = 8;
        const [pageNum, setPageNum] = useState(1);
        const reqCompanies = usePagination(
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
            `, pageNum, pageSize);

        const refetchQuery = () => {
            reqCompanies.refetch();
        };

        useImperativeHandle(ref, () => ({ refetchQuery }));

        if (reqCompanies.loading) return <Loading />;

        if (reqCompanies.error) return "Error";

        const { companies = [], totalPages = 0 } = reqCompanies.data.companyPagination;

        const onClickPage = (pageNum) => {
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
