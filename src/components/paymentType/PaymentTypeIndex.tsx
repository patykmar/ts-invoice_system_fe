import React from "react";
import {Button, Table} from "react-bootstrap";
import { IPaymentType } from "../../Interfaces/IPaymentType";

interface PaymentTypeProps {
}

interface PaymentTypeState {
    paymentTypeList: any[]
}

export default class PaymentTypeIndex extends React.Component<PaymentTypeProps, PaymentTypeState> {

    state: PaymentTypeState = {
        paymentTypeList: []
    };

    constructor(props: PaymentTypeProps) {
        super(props);
    }

    componentDidMount = () => {
        const countryList_local = [
            {name: "převodním příkazem", default: true},
            {name: "hotově", default: false}
        ];
        this.setState({
            paymentTypeList: countryList_local
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
                        <th>Is default</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.paymentTypeList.map((item: any, index: number) =>
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
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