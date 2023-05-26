import React, { useEffect } from "react";
import View from "components/App.view";
import { initGA } from "seed/ga";
import { useDetail } from "seed/gql";

function App() {

  const user_id = sessionStorage.getItem("id");
  const reqInfo = useDetail(`{ user { type } }`, user_id);
  const { user = {} } = reqInfo.data;
  const user_type = user.type;

  useEffect(() => { initGA(); });
  return <View 
          user_type={user_type}
        />;

}
App.propTypes = {};

export default App;