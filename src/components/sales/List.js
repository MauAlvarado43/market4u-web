/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/sales/List.view";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";

const SaleList = forwardRef(function SaList(props, ref) {
    const pageSize = 6;
    const [pageNum, setPageNum] = useState(1);
    const reqSales = usePagination(`
    {
      salePagination {
        totalPages
        sales {
          name
          disscount
          startDate
          endDate
          createdAt
          products { }
          company { }
          banner { }
        }
      }
    }`, pageNum, pageSize, "company.id=" + sessionStorage.getItem("company"));
    //"user_id=10000" + sessionStorage.getItem("id")

    const qProducts = useQuery(`{ 
        products {
            id
            name
            sale {
                id
            }
        } 
    }`, "company.id=" + sessionStorage.getItem("company"));
    const { products = [] } = qProducts.data;


    // const refetchQuery = () => reqSales.refetch();
    // useImperativeHandle(ref, () => ({ refetchQuery }));

    if (reqSales.loading) return <Loading />;
    if (reqSales.error) return "Error";
    const { sales = [], totalPages = 0 } = reqSales.data.salePagination;

    let productsName = []
    for (let i = 0; i < sales.length; i++) {
        //console.log(sales[i]);
        let productsNameRow = []
        for (let j = 0; j < sales[i].products.length; j++) {
            //console.log(sales[i].products[j]+"-")
            for (let k = 0; k < products.length; k++) {
                if (products[k].id == sales[i].products[j].id) {
                    productsNameRow.push(products[k].name);
                }
            }
        }
        productsName.push(productsNameRow);
    }
    //console.log(productsName);
    
    const onClickPage = (pageNum) =>
        setPageNum(pageNum);

    return <View
        sales={sales}
        pageNum={pageNum}
        totalPages={totalPages}
        onClickPage={onClickPage}
        productsName={productsName}
        //tableTitles={tableTitles}
    />;
}); 

SaleList.propTypes = {};

export default SaleList;