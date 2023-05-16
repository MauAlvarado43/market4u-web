import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useQuery, useDetail } from "seed/gql";
import View from "components/products/Form.view";
import { usePost } from "seed/api";
import { useHistory } from "react-router";
import { Loading } from "seed/helpers";
import { object, string } from "yup";

function ProductFormSet({ productId, onCompleted = () => null, onError = () => null, refetchQuery }) {

  const history = useHistory();
  const qProduct = useDetail(`
    {
      product {
        sku
        name
        short_description: shortDescription
        description
        createdAt
        sale { name }
        category { name }
        variants {
          stock
          price
          shipment
          photos {
            id
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
  const qSales = useQuery(`{ sales { name } }`);
  const qCategories = useQuery(`{ categories { name } }`);
  const [callSet, qSet] = usePost("/products/update_product", {
    onCompleted: () => {
      refetchQuery();
      history.goBack();
    }
  });

  const productSchema = object({
    name: string().test({
      name: "name",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese un nombre del producto" });

        return true;

      }
    }),
    short_description: string().test({
      name: "short_description",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese una descripción" });

        return true;

      }
    }),
    description: string().test({
      name: "description",
      test(value, context) {
        
        if(!value || value.length === 0) 
          return context.createError({ message: "Ingrese los detalles del producto" });

        return true;

      }
    }),
    "category.id": string().test({
      name: "category.id",
      test(value, context) {

        if(!context.parent.category || !context.parent.category.id) 
          return context.createError({ message: "Seleccione una categoría" });

        return true;

      }
    }),
  })

  const [loaded, setLoaded] = useState(false);
  const [hideModal, setHideModal] = useState(true);
  const [photos, setPhotos] = useState([ [] ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rows, setRows] = useState(null);
  const [tabs, setTabs] = useState([
    {
      "name": "Cantidad",
      "edit": false,
      "rename": false,
      "type": "number"
    },
    {
      "name": "Precio",
      "edit": false,
      "rename": false,
      "type": "number"
    },
    {
      "name": "Costo de envío",
      "edit": false,
      "rename": false,
      "type": "number"
    },
    {
      "name": "Galería",
      "edit": false,
      "rename": false,
      "type": "file"
    }
  ]);

  const { product = {} } = qProduct.data;
  const { sales = [] } = qSales.data;
  const { categories = [] } = qCategories.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onAddTab = () => {

    const newTabs = [...tabs];
    const newRows = [...rows];

    newTabs.push({
      "name": "Nuevo",
      "edit": true,
      "rename": false,
      "type": "text"
    });

    newRows.forEach(row => row.push(""));

    setTabs(newTabs);
    setRows(newRows);

  }

  const onRemoveTab = (index) => {

    if(!tabs[index].edit) return;

    const newTabs = [...tabs];
    newTabs.splice(index, 1);

    const newRows = [...rows];
    newRows.forEach(row => row.splice(index, 1));

    setTabs(newTabs);
    setRows(newRows);

  }

  const setName = (index, value) => {
      
      if(!tabs[index].rename) return;
  
      const newTabs = [...tabs];
      newTabs[index].name = value;
      setTabs(newTabs);

  }

  const setRename = (index, value) => {

    if(!tabs[index].edit) return;

    const newTabs = [...tabs];
    newTabs[index].rename = value;
    setTabs(newTabs);

  }

  const setCell = (row, col, value) => {
      const newRows = [...rows];
      newRows[row][col] = value;
      setRows(newRows);
  }

  const onAddRow = () => {
    const newRows = [...rows];
    newRows.push(new Array(tabs.length).fill(""));
    setRows(newRows);
    setPhotos([...photos, []]);
  }

  const onRemoveRow = (row) => {
    
    if(rows.length <= 1) return;

    const newRows = [...rows];
    newRows.splice(row, 1);
    
    const newPhotos = [...photos];
    newPhotos.splice(row, 1);

    setRows(newRows);
    setPhotos(newPhotos);

  }

  const onShowPhotoModal = (index) => {
    setSelectedIndex(index);
    setHideModal(false);
  }

  if(qProduct.loading) return <Loading />;
  if(qProduct.error) return "Error";
    
  if(product && !loaded) {

    let newRows = [];
    let newPhotos = [];
    let extraTabs = product.variants && product.variants.length > 0 ? product.variants[0].variantoptions
      .map(vo => ({ "name": vo.title, "edit": false, "rename": false, "type": "text" })) : [];

    let newTabs = [...tabs, ...extraTabs];
    
    if(product.variants && product.variants.length > 0)
      product.variants.forEach((variant, index) => {
        let tempRow = [variant.stock, variant.price, variant.shipment, ""];
        tempRow = [...tempRow, ...variant.variantoptions.map(vo => vo.value)]
        newRows.push(tempRow);
        newPhotos.push(variant.photos);
      });

    setRows(newRows);
    setPhotos(newPhotos);
    setTabs(newTabs);
    setLoaded(true);

  }

  const onCancel = () => {
    history.goBack();
  }

  const onSubmit = (values) => {

    const input = { ...values };
    input.variations = tabs;
    input.details = rows;
    input.photos = photos.map(photo => photo.map(p => p.id));
    input.user = sessionStorage.getItem("id");
    input.category = input.category.id;
    if(input.sale) input.sale = input.sale.id;

    input.product = productId;
    delete input.id;

    callSet(input);

  };

  return <View
    product={product}
    onShowPhotoModal={onShowPhotoModal}
    selectedIndex={selectedIndex}
    hideModal={hideModal}
    setHideModal={setHideModal}
    onAddRow={onAddRow}
    onRemoveRow={onRemoveRow}
    setCell={setCell}
    setName={setName}
    onAddTab={onAddTab}
    onRemoveTab={onRemoveTab}
    setRename={setRename}
    setPhotos={setPhotos}
    photos={photos}
    rows={rows}
    tabs={tabs}
    sales={sales}
    categories={categories}
    error={error}
    onSubmit={onSubmit}
    onCancel={onCancel}
    productSchema={productSchema}
  />;

}

ProductFormSet.propTypes = {
  refetchQuery: PropTypes.func,
  productId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProductFormSet;