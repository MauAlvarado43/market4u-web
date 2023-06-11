import React from "react";
import PropTypes from "prop-types";
import View from "components/profile/FormCard.view";
import { SAVE_PAYMENT } from "seed/gql/queries";
import { useSave } from "seed/gql";
import { object, string } from "yup";
import swal from "sweetalert";

function FormSaveCard({ onCompleted = () => null}) {

    const [ callSave, setCallSave] = useSave(SAVE_PAYMENT, {
        onCompleted: () => {
            swal("¡Tarjeta guardada!", "La tarjeta se ha guardado correctamente", "success");
            onCompleted();
        }
    });

    const paymentSchema = object({
        name: string().test({
          name: "name",
          test(value, context) {
    
            if (!value || value.length === 0)
              return context.createError({ message: "Ingrese el nombre de la persona" });
    
            if (value.length < 3)
                return context.createError({ message: "El nombre debe tener al menos 3 caracteres" });

            return true;
    
          }
        }),
        cardNumber: string().test({
          name: "cardNumber",
          test(value, context) {
    
            const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
            const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    
            if (!value || value.length === 0)
              return context.createError({ message: "Ingrese el número de la tarjeta" });
    
            if (value.length !== 16)
              return context.createError({ message: "El número de tarjeta debe tener 16 dígitos" });
    
            if (!visaRegEx.test(value) && !mastercardRegEx.test(value)) 
              return context.createError({ message: "El número de tarjeta es inválido" });
    
            return true;
    
          }
        }),
        expireDate: string().test({
          name: "expireDate",
          test(value, context) {
    
            if (!value || value.length === 0)
              return context.createError({ message: "Ingrese la fecha de expiración" });
    
            if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value))
              return context.createError({ message: "El formato de vencimiento debe ser MM/AA" });
    
            return true;
    
          }
        }),
        cvv: string().test({
          name: "cvv",
          test(value, context) {
    
            if (!value || value.length === 0)
              return context.createError({ message: "Ingrese el cvv" });
            
            if (value.length !== 3)
              return context.createError({ message: "El CVV debe tener 3 dígitos" });
    
            return true;
    
          }
        }),
        bank: string().test({
          name: "bank",
          test(value, context) {
    
            if (!value || value.length === 0)
              return context.createError({ message: "Seleccione un bando" });
    
            return true;
    
          }
        }),
        type: string().test({
          name: "type",
          test(value, context) {
    
            if (!value || value.length === 0)
              return context.createError({ message: "Seleccione un tipo" });
    
            return true;
    
          }
        }),
        address: string().test({
          name: "address",
          test(value, context) {
    
            if (!value || value.length === 0)
              return context.createError({ message: "Ingrese una dirección" });
    
            return true;
    
          }
        }),
      });

    const onCancel = () => {
        onCompleted();
    };

    const onSumbit = (values) => {
        values.user = parseInt(sessionStorage.getItem('id'));
        callSave(values);
    }

    return <View
                onSubmit={onSumbit}
                onCancel={onCancel}
                paymentSchema={paymentSchema}
            />;
}

FormSaveCard.propTypes = {
    onCompleted: PropTypes.func,
};
  
export default FormSaveCard;