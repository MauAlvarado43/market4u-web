import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/profile/InfoUser.view";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";

function InfoUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [callUpdateUser, updateUserStatus] = usePost("/users/update_user", {
    onCompleted: () => {
      alert("Se ha actualizado correctamente");
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
    console.log(regex.test(pass));

    if(regex.test(pass)) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (values) => {
    let newValues = JSON.parse(JSON.stringify(values));
    newValues.user_id = newValues.id;
    
    if(password !== passwordConfirm){
      alert("Las contraseñas no coinciden");
      return;
    }

    if(validatePassword(password) === false){
      alert("La contraseña debe ser mínimo de 8 caracteres, que incluyen al menos un número y un caracter especial.");
      return;
    } 

    newValues.password = password;
    delete newValues.id;



    callUpdateUser(newValues);
  };

  return (
    <View
      users={users}
      onSubmit={onSubmit}
      setPassword={setPassword}
      showPassword={showPassword}
      showPassConfirm={showPassConfirm}
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
