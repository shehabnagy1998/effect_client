import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/pages/Home01";
import Projects from "./components/pages/Projects";
import ProjectDetail from "./components/pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route path="/category/:id" component={Projects}></Route>
        <Route path="/project/:id" component={ProjectDetail}></Route>
        <Redirect to="/" />
      </Switch>
      {/* {
        routes.map((data,idx) => (
          <Route exact path={data.path} component={data.component} key={idx}></Route>
        ))
      } */}
    </BrowserRouter>
  );
}

export default App;
