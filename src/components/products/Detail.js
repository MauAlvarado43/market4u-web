import React, { useState } from "react";
import { useDetail } from "seed/gql";
import View from "components/products/Detail.view";
import swal from "sweetalert";
import PropTypes from "prop-types";

function Detail({ match }) {

  const productId = parseInt(match?.params?.productId ?? 0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const variantOptions = {};
  const [photoIndex, setPhotoIndex] = useState(0);
  const [prevProductId, setPrevProductId] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(0);
  let photos = [];
  let price = 0;
  let stock = 0;
  let exist = false;

  const type = sessionStorage.getItem("type");
  if (type != "NORMAL") window.location.replace("/home");

  if(prevProductId != productId) {
    setSelectedOptions({});
    setPrevProductId(productId);
  }

  const qProduct = useDetail(`
    {
      product {
        name
        shortDescription
        description
        company { name }
        category { name }
        sale {
          name
          disscount
          startDate
          endDate
        }
        opinions {
          createdAt
          title
          description
          rate
          user { 
            firstName
            lastName
            photo { url }
          }
        }
        variants {
          price
          stock
          shipment
          photos {
            url
          }
          variantoptions {
            title
            value
          }
        }
      }
    }
  `, productId);

  if (qProduct.loading) return "Loading...";
  if (qProduct.error) return "Error";

  const { product = {} } = qProduct.data;

  if (!product) return "Not found";

  product.variants.forEach(variant => {
    variant.variantoptions.forEach(option => {

      if (!variantOptions[option.title]) variantOptions[option.title] = [];

      variantOptions[option.title].push(option.value);
      variantOptions[option.title] = variantOptions[option.title]
        .filter((v, idx) => variantOptions[option.title].indexOf(v) === idx);

    });
  });

  if (Object.keys(selectedOptions).length === 0) {
    photos = product.variants[0].photos;
    price = product.variants[0].price;
    stock = product.variants[0].stock;
  } else {

    let find = false

    product.variants.forEach(variant => {

      if (find) return;
      let match = true;

      variant.variantoptions.forEach(option => {
        if (selectedOptions[option.title]
          && selectedOptions[option.title] !== ""
          && selectedOptions[option.title] !== option.value) match = false;
      });

      if (match) {
        photos = variant.photos;
        price = variant.price;
        stock = variant.stock;
        find = true;
        exist = true;
      }

    });

  }

  if (photos.length < photoIndex) setPhotoIndex(0);

  let rate = product.opinions.reduce((acc, opinion) => acc + opinion.rate, 0);
  if (product.opinions.length > 0) rate = rate / product.opinions.length;

  const onAddCart = () => {
    const rawCart = sessionStorage.getItem('cart');

    let selectedVariant = null;
    product.variants.forEach(variant => {
      let match = true;

      variant.variantoptions.forEach(option => {
        if (selectedOptions[option.title]
          && selectedOptions[option.title] !== ""
          && selectedOptions[option.title] !== option.value) match = false;
      });

      if (match) {
        selectedVariant = variant;
      }
    });

    if (!selectedVariant) {
      swal("Error de variante", "Debe seleccionar una variante válida", "error");
      return;
    }

    if (!rawCart) {

      const data = {
        product: product.id,
        variant: selectedVariant.id,
        amount: 1
      }
      const newCart = [data];
      sessionStorage.setItem('cart', JSON.stringify(newCart));

    } else {

      const cart = JSON.parse(rawCart);
      const prevProduct = cart.find((item) => item.product == product.id && item.variant == selectedVariant.id);

      if (prevProduct) {
        swal("Error", "Ya tiene esta variante de este producto en tu carrito, ve y modifica su cantidad", "error");
        return;
      }

      cart.push({
        product: product.id,
        variant: selectedVariant.id,
        amount: parseInt(selectedAmount)
      })

      sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    swal("¡Producto añadido!", "Producto añadido a carrito correctamente, ve y compra ahora mismo", "success");

  }

  const onChangeAmount = (event) => setSelectedAmount(event.target.value)

  return <View
    product={product}
    variantOptions={variantOptions}
    photos={photos}
    selectedOptions={selectedOptions}
    setSelectedOptions={setSelectedOptions}
    photoIndex={photoIndex}
    setPhotoIndex={setPhotoIndex}
    price={price}
    stock={stock}
    rate={rate}
    exist={exist}
    onAddCart={onAddCart}
    onChangeAmount={onChangeAmount}
  />;

}

Detail.propTypes = {
  match: PropTypes.object
};

export default Detail;