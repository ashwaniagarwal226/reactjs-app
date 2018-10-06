import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import BeerDetails from './BeerDetails';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {
                        routes.map((route, index) => (
                            <Route key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            ></Route>
                        ))
                    }
                </div>
                {/* <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/beerdetails" exact component={BeerDetails}></Route>
                    </Switch> */}
            </Router>


        );
    }
}
const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/beerdetails",
        exact: true,
        component: BeerDetails
    }
];


export default App;
