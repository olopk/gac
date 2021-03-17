import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SelectOption from "./components/SelectOption";
import CarOptions from "./components/CarOptions/CarOptions";
import CarOcForm from "./components/Forms/CarOcForm";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={SelectOption} /> */}
        {/* <Route path="/" component={CarOptions} /> */}
        <Route path="/" component={CarOcForm} />
      </Switch>
    </Router>
  );
};

export default App;
