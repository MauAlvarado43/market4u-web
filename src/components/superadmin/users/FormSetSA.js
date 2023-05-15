/*historyhoB
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, {useState, useEffect} from "react";
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
        },
    });

    useEffect(() => {
        setUserType(user.type);
    }, [user.type]);

    const qUsers = useQuery(`{ 
        users {
            id
            email
        } 
    }`);

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

    const changeType = (event) => {
        const selectedType = event.target.value;
        setUserType(selectedType);
    }

    const onSubmit = (values) => {

        let newValues = JSON.parse(JSON.stringify(values));
        newValues.user_id = newValues.id;
        newValues.password = password;
        
        if(values.type !== "NORMAL" && values.type !== "SUPERADMIN") 
            if(values.company == null) 
                newValues.company_id = document.getElementById(document.getElementById("company").value);
            else
                newValues.company_id = values?.company?.id;
        else
          newValues.company_id = null;

        delete newValues.id;
        delete newValues.company;

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