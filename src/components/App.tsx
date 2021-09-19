import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import CompanyIndex from './company/CompanyIndex';
import CountryIndex from './country/CountryIndex';
import PaymentTypeIndex from './paymentType/PaymentTypeIndex';
import InvoiceIndex from './invoice/InvoiceIndex';
import TariffIndex from "./tariff/TariffIndex";
import VatIndex from "./vat/VatIndex";

export default class App extends React.Component<any, any> {
    render = () => {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/companies"} className="nav-link">Companies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/countries"} className="nav-link">Countries</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/payment-types"} className="nav-link">Payment types</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/invoices"} className="nav-link">Invoices</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/tariffs"} className="nav-link">Tariffs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/vats"} className="nav-link">Vats</Link>
                        </li>
                    </ul>
                </nav>
                <h1>Invoice system</h1>
                <Switch>
                    <Route path={"/companies"} component={CompanyIndex} />
                    <Route path={"/countries"} component={CountryIndex} />
                    <Route path={"/payment-types"} component={PaymentTypeIndex} />
                    <Route path={"/invoices"} component={InvoiceIndex} />
                    <Route path={"/tariffs"} component={TariffIndex} />
                    <Route path={"/vats"} component={VatIndex} />
                </Switch>
                <Redirect from="/" to="/companies"/>
            </Router>

        );
    }
}