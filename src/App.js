import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SelectOption from "./components/SelectOption";
import CarOptions from "./components/CarOptions/CarOptions";
import CarOcForm from "./components/Forms/CarOcForm/CarOcForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/carinsurance/oc" component={CarOcForm} />
        <Route path="/carinsurance" component={CarOptions} />
        <Route path="/" component={SelectOption} />
      </Switch>
    </Router>
  );
};

export default App;
