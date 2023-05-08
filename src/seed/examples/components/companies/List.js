/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/companies/List.view";

function CompanyList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqCompanies = usePagination(`
  {
    companyPagination {
      totalPages
      companies {
        name
        commonName
        rfc
        cp
        phone
        email
        active
        municipality
        state
        cologn
        website
        street
        city
        createdAt
        photo { }
        users { }
      }
    }
  }`, pageNum, pageSize);

  if (reqCompanies.loading) return <Loading />;
  if (reqCompanies.error) return "Error";
  const { companies = [], totalPages = 0 } = reqCompanies.data.companyPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    companies={companies}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

CompanyList.propTypes = {};

export default CompanyList;