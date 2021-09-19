import React from "react";
import {Button, Table} from "react-bootstrap";
import {ICountry} from "../../Interfaces/ICountry";

interface CountryIndexProps {
}

interface CountryIndexState {
    countryList: ICountry[]
}

export default class CountryIndex extends React.Component<CountryIndexProps, CountryIndexState> {

    state: CountryIndexState = {
        countryList: []
    };

    constructor(props: CountryIndexProps) {
        super(props);
    }

    componentDidMount = () => {
        const countryList_local: ICountry[] = [
            {id: 1, name: "CZE", iso3166alpha3: "Česká republika"},
            {id: 2, name: "CZE", iso3166alpha3: "Česká republika"},
            {id: 3, name: "POL", iso3166alpha3: "Polská republika"},
            {id: 4, name: "AUT", iso3166alpha3: "Republika Rakousko"},
            {id: 5, name: "DEU", iso3166alpha3: "Spolková republika Německo"},
        ];
        this.setState({
            countryList: countryList_local
        });
    }

    render = () => {
        return (
            <div>
                <h3>Country - Index</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>iso3166alpha3</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.countryList.map((item: ICountry, index: number) =>
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.iso3166alpha3}</td>
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