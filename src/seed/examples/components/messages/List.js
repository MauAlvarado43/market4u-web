/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/messages/List.view";

function MessageList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqMessages = usePagination(`
  {
    messagePagination {
      totalPages
      messages {
        content
        createdAt
        sender { }
        target { }
      }
    }
  }`, pageNum, pageSize);

  if (reqMessages.loading) return <Loading />;
  if (reqMessages.error) return "Error";
  const { messages = [], totalPages = 0 } = reqMessages.data.messagePagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    messages={messages}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

MessageList.propTypes = {};

export default MessageList;