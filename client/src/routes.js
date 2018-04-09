import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Admin from "./pages/Admin/Admin.js";
import NoMatch from "./pages/NoMatch/NoMatch.js";
import "./App.css";

const App = () =>
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/admin" component={Admin} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>;

export default App;
