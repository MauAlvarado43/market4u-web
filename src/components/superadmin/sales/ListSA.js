import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/superadmin/sales/ListSA.view";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";

const List = forwardRef(
  function SaList(props, ref) {
    const pageSize = 6;
    const [pageNum, setPageNum] = useState(1);
    const reqSales = usePagination(`
        {
            salePagination {
                totalPages
                sales {
                    id
                    name
                    disscount
                    startDate
                    endDate
                    products {
                      id
                      name
                    }
                    banner {
                      id
                      url
                    }
                  }
            }
        }`, pageNum, pageSize);
    const refetchQuery = () => reqSales.refetch();

    useImperativeHandle(ref, () => ({ refetchQuery }));

    if (reqSales.loading) return <Loading />;

    if (reqSales.error) return "Error";

    const { sales = [], totalPages = 0 } = reqSales.data.salePagination;

    const onClickPage = (pageNum) =>
      setPageNum(pageNum);

    return <View
      sales={sales}
      pageNum={pageNum}
      totalPages={totalPages}
      onClickPage={onClickPage}
    />;
  }
);

List.propTypes = {};

export default List;
