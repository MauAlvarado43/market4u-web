import React, { useState } from "react";
import View from "components/Home.view";
import { useDetail } from "seed/gql";

function Home() {
  const [isAuth, setIsAuth] = useState(false)
/*   const [callAuth, reqCall] = useGetCall("/auth/user", "", {
    onCompleted: (data) => setIsAuth(true),
    onError: (error) => {
      window.location.replace("/login")
    }
    // IMPORTANT: Switch to normal login (e.g /login) when copying
  }) */
/*   useEffect(() => {
    if (localStorage.getItem("id") != null) { //Preload data from localStorage
      sessionStorage.setItem("token", localStorage.getItem("token"));
      sessionStorage.setItem("id", localStorage.getItem("id"));
    }
    callAuth();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (!isAuth) return null; */
  return <View />;
}

Home.propTypes = {};

export default Home;