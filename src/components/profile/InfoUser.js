import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/profile/InfoUser.view";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";
import swal from "sweetalert";
import { object, string } from "yup";

function InfoUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(null);

  const [callUpdateUser, updateUserStatus] = usePost("/users/update_user", {
    onCompleted: () => {
      swal("¡Listo!", "Se ha actualizado la información", "success");
    },
  });

  const reqUsers = useQuery(
    `{
      users {
        firstName
        lastName
        email
        street
        city
        municipality
        telephone
        state
        cologn
        cp
        type
        company{ 
          name
          website
          commonName
          phone
          email
          street
          city
          municipality
          state
          cologn
          cp
          rfc
        }
      }
    }`,
    "id = " + sessionStorage.getItem("id")
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityConfirm = () => {
    setShowPassConfirm(!showPassConfirm);
  };

  if (reqUsers.loading) return <Loading />;
  if (reqUsers.error) return "Error";

  const { users } = reqUsers.data;

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
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    if(regex.test(pass)) {
      return true;
    } else {
      return false;
    }
  };

  const validationSchema = object({
    password: string().test({
      name: "password",
      test(value, context) {
        if(!validatePassword(password) && (password))
          return context.createError({
            message: "La contraseña debe de tener al menos 8 caracteres, un caracter especial y un número."
          });

        return true;
      }
    }),
    passwordConfirm: string().test({
      id:"passConfirm",
      test(value, context) {
        if (passwordConfirm !== password) {
          return context.createError({
            message: "Las contraseñas no coinciden",
          });
        }
       
        return true;
       
      }
    })
  });

  const onSubmit = (values) => {
    let newValues = JSON.parse(JSON.stringify(values));
    newValues.user_id = newValues.id;

    if(!password) {
      delete newValues.id;
      newValues.password = password;
      callUpdateUser(newValues);
    } else {
      validationSchema.validate({ password }); 
      delete newValues.id;
      newValues.password = password;
      callUpdateUser(newValues);
    }
  };

  return (
    <View
      error={error}
      users={users}
      onSubmit={onSubmit}
      setPassword={setPassword}
      showPassword={showPassword}
      showPassConfirm={showPassConfirm}
      validationSchema={validationSchema}
      setPasswordConfirm={setPasswordConfirm}
      handlePasswordChange={handlePasswordChange}
      togglePasswordVisibility={togglePasswordVisibility}
      togglePasswordVisibilityConfirm={togglePasswordVisibilityConfirm}
    />
  );
}

InfoUser.propTypes = {
  user: PropTypes.object,
};

export default InfoUser;
