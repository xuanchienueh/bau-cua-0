import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ComponentRedux from "./component/ComponentRedux";
import ComponentContext from "./Context/component/ComponentContext";
import Header from "./Context/component/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/useredux" component={ComponentRedux} />
        <Route path="/usecontext" component={ComponentContext} />
        <Route path="/home" component={Homepage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
