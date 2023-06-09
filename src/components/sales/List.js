import React, { useState, forwardRef } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/sales/List.view";
import { useQuery } from "seed/gql";

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

    if (reqSales.loading) return <Loading />;
    if (reqSales.error) return "Error";
    const { sales = [], totalPages = 0 } = reqSales.data.salePagination;

    let productsName = []
    for (let i = 0; i < sales.length; i++) {
        let productsNameRow = []
        for (let j = 0; j < sales[i].products.length; j++) {
            for (let k = 0; k < products.length; k++) {
                if (products[k].id == sales[i].products[j].id) {
                    productsNameRow.push(products[k].name);
                }
            }
        }
        productsName.push(productsNameRow);
    }
    
    const onClickPage = (pageNum) =>
        setPageNum(pageNum);

    return <View
        sales={sales}
        pageNum={pageNum}
        totalPages={totalPages}
        onClickPage={onClickPage}
        productsName={productsName}
    />;
}); 

SaleList.propTypes = {};

export default SaleList;