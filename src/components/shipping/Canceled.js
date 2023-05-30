
import React from "react";
import PropTypes from "prop-types";
import { useSet, useDelete,useQuery } from "seed/gql";
import { SET_SHIPPING } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/shipping/Canceled.view";
import { usePost } from "seed/api";

function ShippingCancel({ shippingId, onCompleted = () => null, onError = () => null }) {

    const [callSet, qSet] = useSet(SET_SHIPPING, {
        onCompleted: () => {
            //onCompleted();
        }
    });




    const onClickCanceled= () =>{
        const shipping = {
            id:parseInt(shippingId),
            status:'CANCELED'
        }
        
        console.log(shipping)
        callSet(shipping);
        onCompleted()
    }
        

    return <View
    onClose={onCompleted}
    onClickCanceled={onClickCanceled}
    />;
}

ShippingCancel.propTypes = {
    shippingId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default ShippingCancel;