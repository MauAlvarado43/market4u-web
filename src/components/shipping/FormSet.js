import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { PRODUCT, SET_PRODUCT, SET_SHIPPING} from "seed/gql/queries";
import View from "components/shipping/Form.view";
import { parse } from "graphql";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { object, string } from "yup";
function FormSet({ match, onCompleted = () => null, onError = () => null }) {

    const shippingId = parseInt(match?.params?.shippingId??0);

    const productSchema = object({
        info: string().test({
            name: "info",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese información del pedido" });

                return true;

            }
        }),
    })

    const onCancel = () => {
        onCompleted();
        window.location.href = "/orders";
    }

    let shippingStatus = {
        id:parseInt(shippingId),
        status:'SENT'
    }
    

    const [callSetStatus, qSetStatus] = useSet(SET_SHIPPING);


    const [callSet, qSet] = usePost("/users/add_info_shipping", {
        onCompleted: () => {
            callSetStatus(shippingStatus)
            onCompleted();
            swal("¡Listo!", "Se ha actualizado la información de envío de manera exitosa.", "success").then(() => {
                window.location.href = "/orders";
            });
        },
    });

    

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


    const onSubmit = (values) => {
        delete values.seller
        delete values.address
        let newValues = JSON.parse(JSON.stringify(values));
        newValues.shipping_id = newValues.id;
        delete newValues.id 
        
        newValues.shipping_id = parseInt(newValues.shipping_id)

        
        console.log(shippingStatus)
        
        callSet(newValues);
    };

    const onDelivered = () => {
        shippingStatus = {
            id:parseInt(shippingId),
            status:'COMPLETED'
        };
        callSetStatus(shippingStatus);
        onCompleted();
        window.location.href = "/orders";
    }

    return <View
        newAddress={newAddress}
        shipping={shipping}
        products={allProducts}
        variant={allVariants}
        onSubmit={onSubmit}
        onCancel={onCancel}
        onDelivered={onDelivered}
        productSchema={productSchema}
    />;

}

FormSet.propTypes = {
    shippingId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormSet;