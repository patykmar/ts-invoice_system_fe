import React from 'react';
import CompanyIndex from './company/CompanyIndex';
import CountryIndex from './country/CountryIndex';

export default class App extends React.Component<any, any> {
    render = () => {
        return (
            <div>
                <h1>Hello world!</h1>
                <CountryIndex/>
                <hr />
                <CompanyIndex/>
            </div>
        );
    }
}