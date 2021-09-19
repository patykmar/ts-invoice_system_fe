import React from "react";
import {Button, Table} from "react-bootstrap";

interface PaymentTypeProps {
}

interface PaymentTypeState {
    invoiceList: any[]
}

export default class InvoiceIndex extends React.Component<PaymentTypeProps, PaymentTypeState> {

    state: PaymentTypeState = {
        invoiceList: []
    };

    constructor(props: PaymentTypeProps) {
        super(props);
    }

    componentDidMount = () => {
        const localList = [
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:10.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-23T00:00:00.000+00:00",vs: "2021370342",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-17T00:00:00.000+00:00",vs: "2021489971",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-25T00:00:00.000+00:00",vs: "2021343353",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-16T00:00:00.000+00:00",vs: "2021027054",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-16T00:00:00.000+00:00",vs: "2021367695",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-23T00:00:00.000+00:00",vs: "2021550986",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-15T00:00:00.000+00:00",vs: "2021817759",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-22T00:00:00.000+00:00",vs: "2021842852",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-19T00:00:00.000+00:00",vs: "2021910495",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-20T00:00:00.000+00:00",vs: "2021188212",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-16T00:00:00.000+00:00",vs: "2021693788",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-22T00:00:00.000+00:00",vs: "2021003402",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-15T00:00:00.000+00:00",vs: "2021363244",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-21T00:00:00.000+00:00",vs: "2021080919",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-21T00:00:00.000+00:00",vs: "2021628431",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-20T00:00:00.000+00:00",vs: "2021121764",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-25T00:00:00.000+00:00",vs: "2021401737",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-21T00:00:00.000+00:00",vs: "2021983085",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-17T00:00:00.000+00:00",vs: "2021931332",ks: null },
            {name: null,due: 14,invoiceCreated: "2021-07-07T09:37:11.000+00:00",dueDate: "2021-07-21T00:00:00.000+00:00",paymentDate: "2021-07-25T00:00:00.000+00:00",vs: "2021683973",ks: null }
        ];
        this.setState({
            invoiceList: localList
        });
    }

    render = () => {
        return (
            <div>
                <h3>Invoices</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Invoice ID</th>
                        <th>Due</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.invoiceList.map((item: any, index: number) =>
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.vs}</td>
                                <td>{item.due}</td>
                                <td>{item.invoiceCreated}</td>
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