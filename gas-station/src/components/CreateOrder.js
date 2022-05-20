import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

import { user_id } from './LoginUser';

class CreateOrder extends Component {
    constructor() {
        super()
        this.state = {

            id: "",
            cost: "",
            purchaseDate: "",
            employe_id: 0,
            gotUser: "",
            employe: "",
            gotOrder: false
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/${this.props.user_id}`)
            .then(response => response.json())
            .then(employe => {
                console.log(employe);
                this.setState({
                    gotUser: true,
                    employe: employe
                })

            })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const order = { cost: this.state.cost, purchaseDate: this.state.purchaseDate, employee: { id: this.state.employe.id } }
        this.createNewOrder(order)
    }
    createNewOrder = (order) => {
        const configobj = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }

        }
        fetch('http://localhost:8080/api/add/purchase', configobj)
            .then(response => response.json())
            .then(order => {
                debugger
                this.setState({
                    gotOrder: true,
                    id: order.id
                })
            })
    }

    render() {
        return (
            <div class="row">

                <div class="col-6 offset-3">
                    <form onSubmit={event => this.handleSubmit(event)}>

                        <div class="mb-3">
                            <label class="form-label" for="cost">Cost</label>
                            <input class="form-control" type="number" id="cost" name="cost" onChange={this.handleChange} value={this.state.cost} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="purchaseDate">Date</label>
                            <input class="form-control" type="date" id="purchaseDate" name="purchaseDate" onChange={this.handleChange} value={this.state.purchaseDate} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3">
                            <button class="btn-success">Place Order</button>
                        </div>
                    </form>
                    {this.state.gotOrder && <Navigate to="/orders" replace={true} />}
                </div>
            </div>

        )
    }
};

export default CreateOrder;