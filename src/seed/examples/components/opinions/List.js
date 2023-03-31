/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/opinions/List.view";

function OpinionList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqOpinions = usePagination(`
  {
    opinionPagination {
      totalPages
      opinions {
        title
        description
        rate
        createdAt
        product { }
        user { }
      }
    }
  }`, pageNum, pageSize);

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

OpinionList.propTypes = {};

export default OpinionList;