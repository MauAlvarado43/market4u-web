import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/profile/InfoUser.view";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";

function InfoUser() {

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

  const [callUpdateUser, updateUserStatus] = usePost("/users/update_user", {
    onCompleted: () => {
      alert("Se ha actualizado correctamente");
      reqUsers.refetch();
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (reqUsers.loading) return <Loading />;
  if (reqUsers.error) return "Error";

  const { users } = reqUsers.data;

  const onSubmit = (values, event) => {

    let newValues = JSON.parse(JSON.stringify(values));
    newValues.user_id = newValues.id;
    newValues.password = password;
    delete newValues.id;
    callUpdateUser(newValues);
  };

  return (
    <View
      showPassword={showPassword}
      togglePasswordVisibility={togglePasswordVisibility}
      users={users}
      onSubmit={onSubmit}
      setPassword={setPassword}
    />
  );
}

InfoUser.propTypes = {
    user: PropTypes.object
};

export default InfoUser;