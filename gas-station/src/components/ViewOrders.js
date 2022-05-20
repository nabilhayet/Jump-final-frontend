import React from 'react';

import { user_id } from './LoginUser';

class ViewOrders extends React.Component {

    constructor() {
        super()
        this.state = {
            cost: "",
            date: "",
            id: "",
            gotOrder: "",
            orders: []

        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/users/${user_id}/purchases`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    orders: data
                })
            })
    }

    render() {
        const getAllOrders = this.state.orders.map((order) => {
            return (
                <div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Order Cost</th>
                                <th scope="col">Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>   {order.id}</td>
                                <td>  {order.cost}</td>
                                <td>   {order.purchaseDate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            )
        })
        return <div>{getAllOrders}</div>
    }
}
export default ViewOrders;

