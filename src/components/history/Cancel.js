import React from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import swal from "sweetalert";
import View from "components/history/Cancel.view";

function Cancel({ match, onCompleted = () => null, onError = () => null, refetchQuery }) {

  const { shippingId = null } = match.params;

  const [callCancel, reqCallCancel] = usePost('/shippings/cancel', {
    onCompleted: () => {
      swal("Compra concelada", "Tu pedido ha sido cancelado, nos estaremos contactando para tu reembolso", "success")
      .then((response) => {
        refetchQuery();
        onCompleted();
      });
    },
    onError: () => {
      swal("No puedes cancelar tu compra", "Tu pedido no puede ser cancelado porque ya está en camino, pero puedes rechazarlo cuando lo recibas", "error");
    }
  })

  const onClickCancel = () => callCancel({ "shippingId": parseInt(shippingId) });

  return <View onClose={onCompleted} onClickCancel={onClickCancel}/>;
}

Cancel.propTypes = {};

export default Cancel;