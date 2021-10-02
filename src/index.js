import React from "react"
import ReactDom from "react-dom";
import MainPage from "../src/pages/main";
import SecondMain from "./pages/SecondMain";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

ReactDom.render(
    <React.StrictMode>
        <Router>
            <div>
                <Link to="/MainPage">MainPage</Link>
                <Link to="/SecondMain">SecondMain</Link>
                <Switch>
                    <Route path="/MainPage">
                        <MainPage />
                    </Route>
                    <Route path="/SecondMain">
                        <SecondMain />
                    </Route>
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);