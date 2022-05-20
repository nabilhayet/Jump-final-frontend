import React from 'react';



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
        fetch('http://localhost:8080/api/purchases')
            .then(response => response.json())
            .then(orders => {
                debugger
                orders.forEach(order => {
                    if (order.id != "" && order.cost != "") {
                        this.setState({
                            orders: [...this.state.orders, order]
                        })
                    }

                })
            })
    }

    render() {
        const getAllOrders = this.state.orders.map((order) => {
            return (
                <div>
                    <table class="content-table">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Cost</th>
                                <th>Purchase Date</th>
                                <th>Employee Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>   {order.id}</td>
                                <td>  {order.cost}</td>
                                <td>   {order.purchaseDate}</td>
                                <td>  {order.employee_id}</td>
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

