import React from "react";
import Cards from "./Cards";
import MyPurchases from "./MyPurchases";
import './index.css'

const App = () => {
  return (
    <div className="center">
      <MyPurchases />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;