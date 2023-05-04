import React, { useState } from "react";
import View from "components/auth/Signup.view";
import { usePost } from "seed/api";

function Signup({ history }) {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordField, setPasswordField] = useState(false);
  const [confirmPasswordField, setConfirmPasswordField] = useState(false);

  const [callSignup, reqSignup] = usePost("/users/signup", {
    onCompleted: (data) => {

      window.location.href = `/verify_email/${data.token}`
    
    },
    onError: (data) => {
      setStatus("ERROR");
      setLoading(false);
      switch (data.status) {
        case 401:
          setMessage("Este correo ya se encuentra registrado");
          break;
        default:
          setMessage("Error");
          break;
      }
    },
    includeAuth: false
  });

  const onSubmit = (values) => {
    const { firstname, lastname, email, password, confirmPassword } = values;
    if (password != confirmPassword) {
      setStatus("ERROR");
      setMessage("Las contraseñas no coinciden, por favor revísalas");
    } else {
      setLoading(true);
      callSignup({
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
      });
    }
  };

  const onClickShowPassword = () => setPasswordField(!passwordField);
  const onClickShowConfirmPassword = () => setConfirmPasswordField(!confirmPasswordField);

  return (
    <View
      onSubmit={onSubmit}
      passwordField={passwordField}
      confirmPasswordField={confirmPasswordField}
      onClickShowPassword={onClickShowPassword}
      onClickShowConfirmPassword={onClickShowConfirmPassword}
      status={status}
      message={message}
      loading={loading}
    />
  );
}

Signup.propTypes = {};

export default Signup;
