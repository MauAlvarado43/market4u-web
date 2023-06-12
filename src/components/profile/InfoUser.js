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

  if (reqUsers.loading) return <Loading />;
  if (reqUsers.error) return "Error";

  const { users } = reqUsers.data;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityConfirm = () => {
    setShowPassConfirm(!showPassConfirm);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateLetters = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!regex.test(keyValue)) 
        e.preventDefault();
  }

  const validationSchema = object({
    firstName: string().test({
      name: "firstName",
      test(value, context) {
        if(!value)
          return context.createError({
            message: "Ingresa tu nombre",
          });

        if (value.length < 3)
          return context.createError({
            message: "El nombre debe tener al menos 3 caracteres.",
          });

        return true;
      },
    }),
    lastName: string().test({
      name: "lastName",
      test(value, context) {
        if(!value)
          return context.createError({
            message: "Ingresa tu apellido",
          });
        
        if (value.length < 3) 
          return context.createError({
            message: "El apellido debe tener al menos 3 caracteres.",
          });
        
        return true;
      },
    }),
    telephone: string().test({
      name: "telephone",
      test(value, context) {
        if(document.getElementById("telephone").value)
          if(value.length !== 10)
            return context.createError({
              message: "El teléfono debe tener 10 dígitos.",
            });
          
          return true;
      },
    }),
    cp: string().test({
      name: "cp",
      test(value, context) {
        if(document.getElementById("cp").value)
          if(value.length !== 5)
            return context.createError({
              message: "El código postal debe tener 5 dígitos.",
            });
            
          return true;
      },
    }),
    password: string().test({
      name: "password",
      test(value, context) {
        if(password.length < 8 && password !== "")
          return context.createError({
            message: "La contraseña debe tener una longitud de 8 caracteres."
          });
        return true;
      }
    }),
    passwordConfirm: string().test({
      id:"passConfirm",
      test(value, context) {
        if(password !== "" && passwordConfirm === "")
          return context.createError({
            message: "Confirma tu contraseña."
          });

        if (passwordConfirm !== password) {
          return context.createError({
            message: "Las contraseñas no coinciden.",
          });
        }
        return true;
      }
    })
  });

  const onSubmit = (values) => {
    let newValues = JSON.parse(JSON.stringify(values));
    newValues.user_id = newValues.id;
    delete newValues.id;
    delete newValues.email;
    newValues.password = password;
    
    callUpdateUser(newValues);
  };

  return (
    <View
      error={error}
      users={users}
      onSubmit={onSubmit}
      setPassword={setPassword}
      showPassword={showPassword}
      showPassConfirm={showPassConfirm}
      validateLetters={validateLetters}
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
