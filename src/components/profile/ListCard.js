import React from "react";
import PropTypes from "prop-types";
import View from "components/profile/ListCard.view";
import { useQuery, useDelete } from "seed/gql";
import { Loading } from "seed/helpers";
import { DELETE_PAYMENT } from "seed/gql/queries";

function InfoCard(){

    const reqPayments = useQuery(
        `{
            payments {
                name
                cardNumber
                type
                expireDate
                bank
            }
        }`,
        "user.id = " + sessionStorage.getItem('id')
    );

    const [callDelete, reqDelete] = useDelete(DELETE_PAYMENT, {
        onCompleted: () => console.log(""),
      });

    if(reqPayments.loading) return <Loading/>;
    if(reqPayments.error) return "Error";

    const { payments } = reqPayments.data;

    const onClickDelete = (payment) => {
        let confirm = window.confirm("¿Seguro que deseas eliminar este registro?");
        if (confirm) callDelete({ id: payment.id });
    };

    return <View
                payments={payments}
                onClickDelete={onClickDelete}
            />;

}

InfoCard.propTypes = {
    payments: PropTypes.object
};

export default InfoCard;