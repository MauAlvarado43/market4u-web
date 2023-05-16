import React from "react";
import PropTypes from "prop-types";
import { useSet, useDelete, useQuery } from "seed/gql";
import { DELETE_SALE, SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/superadmin/sales/DeleteSA.view";
import { usePost } from "seed/api";

function SaleDelete({ saleId, onCompleted = () => null, onError = () => null, refetchQuery }) {

    const [callSetNull, qSetNull] = usePost("/products/nullable_products", {
        onCompleted: () => {
            console.log("se ha actualizado de manera exitosa el producto");
            onCompleted();
        },
    });

    const onClickDelete = () => {
        const sale = parseInt(saleId);
        const newValues = {}
        newValues.sale_id = sale
        console.log(newValues)
        callSetNull(newValues)
    }

    return <View
        onClose={onCompleted}
        onClickDelete={onClickDelete}
    />;
}

SaleDelete.propTypes = {
    saleId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleDelete;