import React from 'react';
import CompanyIndex from './company/CompanyIndex';
import CountryIndex from './country/CountryIndex';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import { Nav } from 'react-bootstrap';

export default class App extends React.Component<any, any> {
    render = () => {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/company"} className="nav-link">Companies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/country"} className="nav-link">Country</Link>
                        </li>
                    </ul>
                </nav>
                <h1>Hello world!</h1>
                <Switch>
                    <Route path={"/company"} component={CompanyIndex} />
                    <Route path={"/country"} component={CountryIndex} />
                </Switch>
                <Redirect from="/" to="/company"/>
            </Router>

        );
    }
}