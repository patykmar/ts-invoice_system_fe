import React from "react";
import {Button, Table} from "react-bootstrap";

interface VatProps {
}

interface VatState {
    vatList: any[]
}

export default class VatIndex extends React.Component<VatProps, VatState> {

    state: VatState = {
        vatList: []
    };

    constructor(props: VatProps) {
        super(props);
    }

    componentDidMount = () => {
        const localList = [
            {name: "No VAT", percent: 0, multiplier: 100, default: true},
            {name: "VAT 5%", percent: 5, multiplier: 105, default: false},
            {name: "VAT 10%", percent: 10, multiplier: 110, default: false},
            {name: "VAT 15%", percent: 15, multiplier: 115, default: false},
            {name: "VAT 20%", percent: 20, multiplier: 120, default: false},
            {name: "VAT 21%", percent: 21, multiplier: 121, default: false},
            {name: "VAT 22%", percent: 22, multiplier: 122, default: false}
        ];
        this.setState({
            vatList: localList
        });
    }

    render = () => {
        return (
            <div>
                <h3>Vats - Index</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>percent</th>
                        <th>multiplier</th>
                        <th>default</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.vatList.map((item: any, index: number) =>
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.percent}</td>
                                <td>{item.multiplier}</td>
                                <td>{item.default.toString()}</td>
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