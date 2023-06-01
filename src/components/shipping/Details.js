import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { PRODUCT, SET_PRODUCT, SET_SHIPPING} from "seed/gql/queries";
import View from "components/shipping/Details.view";
import { parse } from "graphql";
import { usePost } from "seed/api";
import swal from "sweetalert";

function FormSet({ match, onCompleted = () => null, onError = () => null }) {

    const shippingId = parseInt(match?.params?.shippingId??0);

    const onCancel = () => {
        onCompleted();
        window.location.href = "/orders";
    }

    const qShipping = useDetail(
    `
    {
        shipping {
            id
            address
            buyer {
                username
                telephone
            }
            purchases { 
                product
            }
            info
            status
        }
    }
    `, shippingId);

    if (qShipping.loading) return <Loading />;
    if (qShipping.error) return "Error";
    const { shipping = [] } = qShipping.data;
    
    let allVariants = []
    let allProducts = []
    let newAddress = {}
    let allPurchasesInShipping = []


    for(let i = 0; i < shipping.purchases.length ; i ++ ){
        let individualPurchase = JSON.parse(JSON.parse(shipping.purchases[i].product))
        allPurchasesInShipping.push(individualPurchase)
    }
    

    for(let i = 0; i < allPurchasesInShipping.length; i++){
        allProducts.push(allPurchasesInShipping[i].product)
        allVariants.push(allPurchasesInShipping[i].variant)
    }

    newAddress = JSON.parse(shipping.address)  

    return <View
        newAddress={newAddress}
        shipping={shipping}
        products={allProducts}
        variant={allVariants}
        onCancel={onCancel}
    />;

}

FormSet.propTypes = {
    shippingId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSet;