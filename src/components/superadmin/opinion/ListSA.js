import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/superadmin/opinion/ListSA.view";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";

const List = forwardRef(
  function SaList(props, ref) {

    const pageSize = 10;
    const [pageNum, setPageNum] = useState(1);
    const reqOpinions = usePagination(`
        {
            opinionPagination {
                totalPages
                opinions {
                    title
                    description
                    product {
                      id
                      name
                      company{
                        name
                      }
                    }
                    user{
                      id
                      username
                      
                    }
                    rate
                  }
            }
        }`, pageNum, pageSize);

    const refetchQuery = () => reqOpinions.refetch();

    useImperativeHandle(ref, () => ({ refetchQuery }));

    if (reqOpinions.loading) return <Loading />;

    if (reqOpinions.error) return "Error";

    const { opinions = [], totalPages = 0 } = reqOpinions.data.opinionPagination;

    const onClickPage = (pageNum) =>
      setPageNum(pageNum);

    return <View
      opinions={opinions}
      pageNum={pageNum}
      totalPages={totalPages}
      onClickPage={onClickPage}
    />;
  }
);

List.propTypes = {};

export default List;
