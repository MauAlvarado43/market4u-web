import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { usePost } from "seed/api";
import { USER } from "seed/gql/queries";
import View from "components/users/Form.view";
import swal from "sweetalert";
import { object, string } from "yup";

function FormSet({
  itemId,
  onCompleted = () => null,
}) {

  const qItem = useDetail(USER, itemId);
  const { user = {} } = qItem.data;
  
  useEffect(() => {
    setUserType(user.type);
  }, [user.type]);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userType, setUserType] = useState(user.type);

  const [callSet, qSet] = usePost("/users/update_user_normal", {
    onCompleted: () => {
      swal("¡Listo!", "Se ha actualizado el usuario de manera exitosa.", "success").then(() => {
        window.location.replace("/users");
      });
    },
  });

  const qCompanies = useQuery(`{ 
        companies {
            id
            name
        } 
    }`);

  if (qItem.loading) return <Loading />;

  const { companies = [] } = qCompanies.data;

  const error = qSet.error ? "Error" : null;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityConfirm = () => {
    setShowPassConfirm(!showPassConfirm);
  };

  const validateLetters = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[A-Za-z\s]+$/; 

    if (!regex.test(keyValue)) 
        e.preventDefault();
  }

  const validationSchema = object({
    password: string().test({
      name: "password",
      test(value, context) {
        if (password !== "" && password.length < 8)
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        return true;

      }
    }),
    passwordConfirm: string().test({
      name: "passwordConfirm",
      test(value, context) {
        if ((passwordConfirm != context.parent.password) && password !== "")
          return context.createError({ message: "Las contraseñas no coinciden" });

        if(passwordConfirm.length === 0 && password !== "")
          return context.createError({ message: "Confirme la contraseña" });

        return true;

      }
    }),
    firstName: string().test({
      name: "firstName",
      test(value, context) {
        if (!value || value.length === 0)
          return context.createError({
            message: "Ingrese un nombre para el usuario",
          });

        return true;
      },
    }),
    lastName: string().test({
      name: "lastName",
      test(value, context) {
        if (!value || value.length === 0)
          return context.createError({
            message: "Ingrese un apellido para el usuario",
          });

        return true;
      },
    }),
    email: string().test({
      name: "email",
      test(value, context) {
        if (!value || value.length === 0)
          return context.createError({
            message: "Ingrese un correo electrónico al usuario",
          });

        return true;
      },
    }),
    company_edit: object().test({
      name: "company.id",
      test(value, context) {
        console.log(userType)
        if (userType !== "NORMAL" && userType !== "SUPERADMIN") {
          if (!value.id || value.id.length === 0)
            return context.createError({
              message: "Seleccione una empresa para el usuario",
            });
        }

        return true;
      }
    }),
  });

  const companyID = sessionStorage.getItem("company");


  const onSubmit = (values) => {

    let newValues = JSON.parse(JSON.stringify(values));
    newValues.user_id = newValues.id;
    newValues.password = password;

    newValues.type = 'SELLER';
    delete newValues.id;
    
    newValues.company_id = parseInt(companyID);
    delete newValues.company
    console.log(newValues)
    callSet(newValues);

    
  };

  const onCancel = () => {
    onCompleted();
  }

  return <View
    item={user}
    error={error}
    password={password}
    onSubmit={onSubmit}
    onCancel={onCancel}
    userType={userType}
    companies={companies}
    setPassword={setPassword}
    showPassword={showPassword}
    showPassConfirm={showPassConfirm}
    validateLetters={validateLetters}
    validationSchema={validationSchema}
    setPasswordConfirm={setPasswordConfirm}
    togglePasswordVisibility={togglePasswordVisibility}
    togglePasswordVisibilityConfirm={togglePasswordVisibilityConfirm}
  />;

}

FormSet.propTypes = {
  itemId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
};

export default FormSet;