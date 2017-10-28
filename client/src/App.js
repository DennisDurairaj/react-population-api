import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className="ui container">
      <Route path="/" exact component={Home} />
    </div>
  );
};

export default App;
