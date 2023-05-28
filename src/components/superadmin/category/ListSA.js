import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/superadmin/category/ListSA.view";

const List = forwardRef(
    function SaList(props, ref) {
        const pageSize = 9;
        const [pageNum, setPageNum] = useState(1);
        const reqCategories = usePagination(`
            {
                categoryPagination {
                    totalPages
                    categories {
                    name
                    }
                }
            }`,
            pageNum,
            pageSize
        );

        const refetchQuery = () => reqCategories.refetch();

        useImperativeHandle(ref, () => ({ refetchQuery }));

        if (reqCategories.loading) return <Loading />;
        if (reqCategories.error) return "Error";

        const { categories = [], totalPages = 0 } = reqCategories.data.categoryPagination;

        const onClickPage = (pageNum) =>
            setPageNum(pageNum);

        return <View
            categories={categories}
            pageNum={pageNum}
            totalPages={totalPages}
            onClickPage={onClickPage}
        />;
    }
);

List.propTypes = {};

export default List;
