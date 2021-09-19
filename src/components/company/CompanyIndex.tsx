import React from "react";
import {Button, Table} from "react-bootstrap";
import {ICompany} from "../../Interfaces/ICompany";

interface CompanyIndexProps {
}

interface CompanyIndexState {
    companyList: any[]
}

export default class CompanyIndex extends React.Component<CompanyIndexProps, CompanyIndexState> {

    state: CompanyIndexState = {
        companyList: []
    };

    constructor(props: CompanyIndexProps) {
        super(props);
    }

    componentDidMount = () => {
        const companyList_local = [
            { name: "Ing. Martin Patyk", description: "Ing. Martin Patyk - Cerna", companyId: "88230104", vatNumber: "CZ8707145876",created: new Date("2014-01-13T22:17:20.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Černá 1416/5", city: "Opava - Kateřinky", zipCode: "74705",accountNumber: "670100-2209225998/6210", iban: ""},
            { name: "Vodafone Czech Republic a. s.", description: "Vodafone Czech Republic a. s.", companyId: "25788001", vatNumber: "CZ25788001", created: new Date("2003-11-18T19:53:39.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "náměstí Junkových 2", city: "Praha 5", zipCode: "15500", accountNumber: "", iban: ""},
            { name: "T-Mobile Czech Republic a.s.", description: "T-Mobile Czech Republic a.s.", companyId: "64949681", vatNumber: "CZ64949681", created: new Date("2016-01-31T17:30:43.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Tomíčkova 2144/1", city: "Praha 4", zipCode: "14800", accountNumber: "", iban: ""},
            { name: "O2 Czech Republic a.s.", description: "O2 Czech Republic a.s.", companyId: "60193336", vatNumber: "CZ60193336", created: new Date("2018-12-07T20:23:31.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Za Brumlovkou 266/2", city: "Praha 4, Michle", zipCode: "14022", accountNumber: "", iban: ""},
            { name: "RD Rýmařov s.r.o.", description: "RD Rýmařov s.r.o.", companyId: "18953581", vatNumber: "CZ18953581", created: new Date("2006-06-26T19:14:04.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "8. května 1191/45", city: "Rýmařov", zipCode: "79501", accountNumber: "", iban: ""},
            { name: "CETIN a.s.", description: "CETIN a.s.", companyId: "4084063", vatNumber: "CZ04084063", created: new Date("2010-05-26T19:32:10.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Českomoravská 2510/19", city: "Praha 9", zipCode: "19000", accountNumber: "", iban: ""},
            { name: "Maxxnet.cz s.r.o.", description: "Maxxnet.cz s.r.o.", companyId: "29459711", vatNumber: "CZ29459711", created: new Date("2015-08-22T18:49:44.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Nákladní 4", city: "Opava", zipCode: "74601", accountNumber: "256256296/0300", iban: ""},
            { name: "GAPPAY s.r.o.", description: "GAPPAY s.r.o.", companyId: "47151960", vatNumber: "CZ47151960", created: new Date("2012-01-15T08:45:14.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Olomoucká 134", city: "Slavkov u Opavy", zipCode: "74757", accountNumber: "825242821/0100", iban: ""},
            { name: "ČEZ, a. s.", description: "ČEZ, a. s.", companyId: "45274649", vatNumber: "CZ45274649", created: new Date("2021-06-18T05:24:08.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Duhová 1444/2", city: "Praha - Michle", zipCode: "14000", accountNumber: "2701577960/2010", iban: ""},
            { name: "ŠKODA AUTO a.s.", description: "ŠKODA AUTO a.s.", companyId: "177041", vatNumber: "CZ00177041", created: new Date("2018-02-21T20:44:59.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "tř. Václava Klementa 869", city: "Mladá Boleslav II", zipCode: "29301", accountNumber: "001-8336621-32", iban: "BE90001833662132"},
            { name: "Innovation Advisors s.r.o.", description: "Innovation Advisors s.r.o.", companyId: "40763200", vatNumber: "CZ40763200", created: new Date("2021-03-03T18:01:39.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Boženy Němcové 1604/24", city: "Opava", zipCode: "74601", accountNumber: "", iban: ""},
            { name: "Czech Green Energy s.r.o.", description: "Czech Green Energy s.r.o.", companyId: "9703667", vatNumber: "CZ09703667", created: new Date("2001-11-25T10:22:09.000+00:00"), modify: new Date("2021-07-07T09:37:10.000+00:00"), street: "Vinařská 460/3", city: "Brno - Pisárky", zipCode: "60300", accountNumber: "", iban: ""},
        ];
        this.setState({
            companyList: companyList_local
        });
    }

    render = () => {
        return (
            <div>
                <h3>Company - Index</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Company ID</th>
                        <th>VAT number</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Zip code</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.companyList.map((item: ICompany, index: number) =>
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.companyId}</td>
                                <td>{item.vatNumber}</td>
                                <td>{item.street}</td>
                                <td>{item.city}</td>
                                <td>{item.zipCode}</td>
                                <td>
                                    <div>
                                        <Button variant="primary" size={"sm"}>Edit</Button>{' '}
                                        <Button variant="danger" size={"sm"}>Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}