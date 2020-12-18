import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/pages/Home01";
import Projects from "./components/pages/Projects";
import ProjectDetail from "./components/pages/ProjectDetail";

function App() {
  return (
    <Switch>
      <Route exact path={"/"} component={Home}></Route>
      <Route path="/category/:id" component={Projects}></Route>
      <Route path="/project/:catId/:id" component={ProjectDetail}></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
