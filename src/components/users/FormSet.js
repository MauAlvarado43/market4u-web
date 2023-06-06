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

  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userType, setUserType] = useState("");
  const qItem = useDetail(USER, itemId);
  const { user = {} } = qItem.data;

  const [callSet, qSet] = usePost("/users/update_user_superadmin", {
    onCompleted: () => {
      swal("¡Listo!", "Se ha actualizado el usuario de manera exitosa.", "success");
      onCompleted();
    },
  });

  useEffect(() => {
    setUserType(user.type);
  }, [user.type]);

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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      document.getElementById("passConfirm").disabled = false;
    } else {
      document.getElementById("passConfirm").disabled = true;
      document.getElementById("passConfirm").value = "";
    }
  };

  const validatePassword = (pass) => {
    if (pass.length < 8) 
      return false;
    else
      return true;
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
        if (!validatePassword(password) && password) {
          return context.createError({
            message: "La contraseña no cumple con los requisitos mínimos.",
          });
        }
        return true;
      },
    }),
    passwordConfirm: string().test({
      name:"passwordConfirm",
      test(value, context) {
        if (passwordConfirm !== password) {
          return context.createError({
            message: "Las contraseñas no coinciden.",
          });
        }
        return true;
      },
    }),firstName: string().test({
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
  });

  const changeType = (event) => {
    const selectedType = event.target.value;
    setUserType(selectedType);
  }

  const companyId = sessionStorage.getItem("company");

  const onSubmit = (values) => {

    console.log(values)

    let newValues = JSON.parse(JSON.stringify(values));
    newValues.user_id = newValues.id;
    newValues.password = password;
    newValues.type = 'SELLER';

    delete newValues.id;
    delete newValues.company;

    newValues.company_id = companyId;

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
    showPassConfirm={showPassConfirm}
    validateLetters={validateLetters}
    validationSchema={validationSchema}
    setPasswordConfirm={setPasswordConfirm}
    handlePasswordChange={handlePasswordChange}
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