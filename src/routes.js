import React from "react";
import { Switch, Route } from "react-router-dom";
import Hanoi from './pages/Hanoi';
import Home from './pages/Home';
import Page404 from "./pages/Page404";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/torre-de-hanoi" component={Hanoi} />
            <Route component={Page404} />
        </Switch>
    );
}
