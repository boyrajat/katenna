import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Detail from "./pages/Detail";
import DepDetail from "./pages/DepDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Tasks} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/tasks/:id" component={Detail} />
        <Route exact path="/tasks/dept/:department" component={DepDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
