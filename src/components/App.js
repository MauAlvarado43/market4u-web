import React, { useEffect } from "react";
import View from "components/App.view";
import { initGA } from "seed/ga";
import { useDetail } from "seed/gql";

function App() {

  useEffect(() => { initGA(); });
  return <View/>;

}
App.propTypes = {};

export default App;