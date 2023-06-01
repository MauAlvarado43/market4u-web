import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDetail, useSave, useSet } from "seed/gql";
import { SAVE_OPINION, SET_OPINION } from "seed/gql/queries"
import { Loading } from "seed/helpers";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { object, string, number } from "yup";
import View from "components/history/Opinion.view";

function Opinion({ match, onCompleted = () => null }) {

  const formikRef = useRef(null);
  const userId = sessionStorage.getItem("id");
  const { shippingId } = match.params;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rate, setRate] = useState(0);
  const [opinion, setOpinion] = useState({});

  const opinionSchema = object({
    title: string().test({
      name: "title",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese un título" });

        return true;

      }
    }),
    description: string().test({
      name: "description",
      test(value, context) {

        if (!value || value.length === 0)
          return context.createError({ message: "Ingrese una descripción" });

        return true;

      }
    }),
    rate: number().test({
      name: "rate",
      test(value, context) {

        if (!value || value === 0)
          return context.createError({ message: "La mínima calificación es 1 estrella" });

        return true;

      }
    }),
    product: number().test({
      name: "product",
      test(value, context) {

        if (!value)
          return context.createError({ message: "Seleccione un producto" });

        return true;

      }
    })
  })

  const [callSave, reqSave] = useSave(SAVE_OPINION, {
    onCompleted: () => {
      swal("Tu opinión importa", "Calificaste con éxito el producto, ahora otros compradores podrán verla", "success");
      onCompleted();
    },
    onError: () => {
      swal("Error al calificar el producto", "Ha ocurrido un error al calificar el producto, por favor cierra e inicia sesión", "error");
    }
  });

  const [callUpdate, reqUpdate] = useSet(SET_OPINION, {
    onCompleted: () => {
      swal("Tu opinión importa", "Actualizaste con éxito tu opinión, ahora otros compradores podrán ver la modificación", "success");
      onCompleted();
    },
    onError: () => {
      swal("Error al calificar el producto", "Ha ocurrido un error al calificar el producto, por favor cierra e inicia sesión", "error");
    }
  });

  const [callOpinion, reqOpinion] = usePost("/opinions/last_opinion", {
    onCompleted: (data) => {
      if (data.opinion) {
        setOpinion(data.opinion);
        setRate(data.opinion.rate);
        formikRef.current.setFieldValue("title", data.opinion.title);
        formikRef.current.setFieldValue("description", data.opinion.description);
        formikRef.current.setFieldValue("rate", data.opinion.rate);
      } else {
        setOpinion({});
        setRate(0);
        formikRef.current.setFieldValue("title", "");
        formikRef.current.setFieldValue("description", "");
        formikRef.current.setFieldValue("rate", 0);
      }
    }
  })

  const reqShipping = useDetail(`{
    shipping {
      info
      folio
      total
      address
      status
      createdAt
      cart {
        payment
      }
      company {
        id
        name
        commonName
      }
      purchases {
        amount
        product
        sale
      }
    }
  }`, shippingId);

  if (reqShipping.loading) return <Loading />;
  if (reqShipping.error) return "Error";

  const { shipping = {} } = reqShipping.data;

  const onSubmit = (values) => {
    if (opinion.id) {
      callUpdate({
        id: opinion.id,
        title: values.title,
        description: values.description,
        rate: values.rate
      })
    } else {
      callSave({
        title: values.title,
        description: values.description,
        rate: values.rate,
        product: values.product,
        user: parseInt(userId)
      });
    }

  }

  const onCancel = () => onCompleted();

  const onSelectPurchase = (id) => {
    callOpinion({
      product: id,
      user: parseInt(userId)
    });
    setSelectedProduct(id);
    if (formikRef.current) {
      formikRef.current.setFieldValue("product", id);
    }
  }

  console.log("opinion", opinion);

  return (
    <View
      formikRef={formikRef}
      opinion={opinion}
      shipping={shipping}
      selectedProduct={selectedProduct}
      onSelectPurchase={onSelectPurchase}
      rate={rate}
      setRate={setRate}
      onSubmit={onSubmit}
      onCancel={onCancel}
      opinionSchema={opinionSchema}
    />
  );
}

Opinion.propTypes = {};

export default Opinion;