import React from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import swal from "sweetalert";
import View from "components/cart/Purchase.view";

function Purchase({ user, data, setData, products, setActiveStep }) {

  const [callSave, reqSave] = usePost('/carts/purchase', {
    onCompleted: () => {

      sessionStorage.removeItem("cart");
      swal("¡Todo listo!", "Compraste con éxito, ahora puedes ver el estatus de tu pedido en tu sesión", "success")
      .then((respuesta) => {
        if (respuesta) {
          window.location.href = "/home";
        }
      });

    },
    onError: (error) => {
      swal("Error", "Error interno, por favor vuelva a intentarlo mas tarde", "error");
    }
  })

  const onSubmit = () => {
    console.log("data", data);

    callSave({
      user: parseInt(sessionStorage.getItem('id')),
      products: data.products,
      delivery: data.delivery,
      payment: data.payment
    });
  }

  return <View products={products} data={data} setActiveStep={setActiveStep} onSubmit={onSubmit} />;
}

Purchase.propTypes = {};

export default Purchase;