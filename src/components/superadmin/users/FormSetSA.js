import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { usePost } from "seed/api";
import { USER } from "seed/gql/queries";
import View from "components/superadmin/users/FormSA.view";
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

  useEffect(() => {
    setSelectedCompany(user?.company != null ? user?.company?.id : 0);
  }, [user.company]);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userType, setUserType] = useState(user.type);
  const [selectedCompany, setSelectedCompany] = useState(user?.company != null ? user?.company?.id : 0);

  const [callSet, qSet] = usePost("/users/update_user_superadmin", {
    onCompleted: () => {
      swal("¡Listo!", "Se ha actualizado el usuario de manera exitosa.", "success").then(() => {
        onCompleted();
        qItem.refetch();
      });
    },
  });

  const qUsers = useQuery(`{ users { username } }`);
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

  const changeType = (event) => {
    const selectedType = event.target.value;
    setUserType(selectedType);
  }

  const onChangeCompany = (event) => {
    if(event.target.value == "")
      setSelectedCompany(0)
    else
      setSelectedCompany(event.target.value)
  }

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
        if (password.length < 8 && password !== "")
          return context.createError({ message: "La contraseña debe tener al menos 8 caracteres" });

        return true;

      }
    }),
    passwordConfirm: string().test({
      name: "passwordConfirm",
      test(value, context) {
        if(password !== "" && passwordConfirm === "")
          return context.createError({ 
            message: "Confrima la contraseña"
          })

        if(passwordConfirm !== password)
          return context.createError({
            message: "Las contraseñas no coinciden"
          })

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

        if (value.length < 3)
          return context.createError({
            message: "El nombre debe tener al menos 3 caracteres",
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
          return context.createError({ message: "Ingrese un correo electrónico" });

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          return context.createError({ message: "Ingrese un correo electrónico válido" });

        return true;
      }
    }),
    company_edit: object().test({
      name: "company.id",
      test(value, context){
        if(userType == "ADMIN" || userType == "SELLER")
          if(selectedCompany == 0 && (userType == "ADMIN" || userType == "SELLER"))
            return context.createError({
              message: "Seleccione una empresa para el usuario",
            });

        return true;
      },
    })
  });

  const onSubmit = (values) => {
    const existingUsername = qUsers.data.users.find(
      (user) => user.username.toLowerCase() === values.email.toLowerCase() &&
        user.id != values.id
    );

    if(existingUsername)
      return swal("¡Error!", "El correo que intentas modificar, ya está en uso", "error");

    let newValues = JSON.parse(JSON.stringify(values));
    newValues.user_id = newValues.id;
    newValues.password = password;
    delete newValues.id;
    
    if (newValues.type === "NORMAL" || newValues.type === "SUPERADMIN") 
      newValues.company_id = null;
    else 
      newValues.company_id = selectedCompany;

    delete newValues.company
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
    changeType={changeType}
    setPassword={setPassword}
    showPassword={showPassword}
    onChangeCompany={onChangeCompany}
    showPassConfirm={showPassConfirm}
    selectedCompany={selectedCompany}
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