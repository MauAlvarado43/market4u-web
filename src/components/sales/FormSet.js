import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SALE, SET_SALE, SET_PRODUCT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "components/sales/Form.view";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { usePost } from "seed/api";
import swal from "sweetalert";
import { object, string } from "yup";

function SaleFormSet({ saleId, onCompleted = () => null, onError = () => null, refetchQuery = () => null }) {
    const qSale = useDetail(`{
        sale {
          id
          name
          disscount
          startDate
          endDate
          company {
            id
          }
          banner {
            id
          }
          products{
            id
          }
        }
      }`, saleId);    
    const qUsers = useQuery(`{ users { } }`);
    const companyId = sessionStorage.getItem("company");

    let selectedStartDate;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const todayDate = yyyy + '-' + mm + '-' + dd;

    const productSchema = object({
        name: string().test({
            name: "name",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese un nombre de la oferta" });


                return true;

            }
        }),
        disscount: string().test({
            name: "disscount",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Ingrese el descuento de la oferta" });
                if (value < 1 || value > 100)
                    return context.createError({ message: "La oferta no puede ser menor a 1 o mayor que 100" });

                return true;

            }
        }),
        startDate: string().test({
            name: "startDate",
            test(value, context) {
                selectedStartDate = value

                if (!value || value.length === 0)
                    return context.createError({ message: "Fechas de inicio ingresada incorrectamente" });

                if (value < todayDate) {
                    return context.createError({ message: "La fecha de inicio no puede ser anterior a la fecha actual" });
                }

                return true;

            }
        }),
        endDate: string().test({
            name: "endDate",
            test(value, context) {

                if (!value || value.length === 0)
                    return context.createError({ message: "Fechas de fin ingresada incorrectamente" });

                if (value < selectedStartDate)
                    return context.createError({ message: "La fecha de fin no puede ser menor que la fecha de inicio" })

                return true;

            }
        }),
    })

    const [callSet, qSet] = useSet(SET_SALE, {
        onCompleted: () => {
            swal("¡Listo!", "Se ha actualizado la oferta de manera exitosa.", "success").then(() => {
                //window.location.replace("/sales");
                refetchQuery();
            });
            onCompleted();

            //refetchQuery();

        }

    });

    const [callSetProducts, qSetProducts] = useSet(SET_PRODUCT, {
        onCompleted: () => {
        }
    });


    const [callSetNull, qSetNull] = usePost("/products/update_product_null", {
        onCompleted: () => {

        },
    });



    let qProducts = useQuery(`{ 
        products {
            id
            name
            sale {}
        } 
    }`, "company.id=" + companyId);

    qProducts.refetch();


    let { products = [] } = qProducts.data;


    const filteredProducts = products.filter(product => {
        if (product.sale == null || product.sale.id == saleId)
            return true;
        else
            return false;
    })


    const [selectedProductsCheckbox, setSelectedProductsCheckbox] = useState({});
    //Object.keys(selectedProducts).filter((key) => selectedProducts[key]);
    const [loaded, setLoaded] = useState(false);
    if (qSale.loading) return <Loading />;

    const { sale = {} } = qSale.data;
    const { users = [] } = qUsers.data;
    const error = qSet.error ? "An error has occurred" : null;

    
    if(sale.products.length > 0 && !loaded) {
        
        let x = {}
        sale.products.forEach((product) => x[product.id] = true)
        setSelectedProductsCheckbox(x)
        setLoaded(true)
    }

    const onSubmit = (values) => {
    
        values.id = parseInt(saleId);
        values.banner = parseInt(values.banner.id);
        values.disscount = parseFloat(values.disscount);
        values.startDate = DateTime.fromFormat(values.startDate, "yyyy-MM-dd");
        values.endDate = DateTime.fromFormat(values.endDate, "yyyy-MM-dd");
        values.company = parseInt(sessionStorage.getItem("company"));
        
        deleteCreateProducts(values)
        delete values.products
        callSet(values);
        
    };

    const deleteCreateProducts = () => {
        let checkboxProducts = Object.keys(selectedProductsCheckbox).filter((key) => selectedProductsCheckbox[key]);
        for (let i = 0; i < filteredProducts.length; i++) {

            let newValues = JSON.parse(JSON.stringify(filteredProducts[i]));
            newValues.product_id = newValues.id;
            delete newValues.id;

            callSetNull(newValues);
            
            if (checkboxProducts.length > 0 && i === filteredProducts.length - 1) {
                for(let j = 0; j < checkboxProducts.length ; j++){
                    let newProductValuesEdit = {
                        id: parseInt(checkboxProducts[j]),
                        sale: parseInt(saleId)
                    };
                    callSetProducts(newProductValuesEdit)
                }
            }
        }
    }

    const onCancel = () => {
        onCompleted();
    }


    return <View
        sale={sale}
        products={filteredProducts}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
        productSchema={productSchema}
        selectedProductsCheckbox={selectedProductsCheckbox}
        setSelectedProductsCheckbox={setSelectedProductsCheckbox}
    />;
}

SaleFormSet.propTypes = {
    saleId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default SaleFormSet;