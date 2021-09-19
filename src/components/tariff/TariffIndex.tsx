import React from "react";
import {Button, Table} from "react-bootstrap";

interface TariffProps {
}

interface TariffState {
    tariffList: any[]
}

export default class TariffIndex extends React.Component<TariffProps, TariffState> {

    state: TariffState = {
        tariffList: []
    };

    constructor(props: TariffProps) {
        super(props);
    }

    componentDidMount = () => {
        const localList = [
            { name: "299 CZK per hour", price: 29900 },
            { name: "399 CZK per hour", price: 39900 },
            { name: "450 CZK per hour", price: 45000},
            { name: "499 CZK per hour", price: 49900 },
            { name: "600 CZK per hour", price: 60000 },
            { name: "699 CZK per hour", price: 69900 },
            { name: "999 CZK per hour", price: 99900 }
        ];
        this.setState({
            tariffList: localList
        });
    }

    render = () => {
        return (
            <div>
                <h3>Tariff - Index</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.tariffList.map((item: any, index: number) =>
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
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