import React, { useState, useEffect } from "react";
import View from "components/Home.view";
import { useGetCall } from "seed/api";

function Home() {
  const [isAuth, setIsAuth] = useState(false)
  const user_id = sessionStorage.getItem("id");
  const reqInfo = useDetail(`{ user { type } }`, user_id);
  const { user = {} } = reqInfo.data;
  const user_type = user.type;
  const [callAuth, reqCall] = useGetCall("/auth/user", "", {
    onCompleted: (data) => setIsAuth(true),
    onError: (error) => {
      window.location.replace("/login")
    }
    // IMPORTANT: Switch to normal login (e.g /login) when copying
  })
  useEffect(() => {
    if (localStorage.getItem("id") != null) { //Preload data from localStorage
      sessionStorage.setItem("token", localStorage.getItem("token"));
      sessionStorage.setItem("id", localStorage.getItem("id"));
    }
    callAuth();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (!isAuth) return null;
  return <View 
          user_type={user_type}
        />;
}

Home.propTypes = {};

export default Home;