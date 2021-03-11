import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../Home";
import About from "../About"
import Categories from "../NYTBestellers";

const Router = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/categories" component={Categories}/>
        </Switch>
     );
}
 
export default Router;