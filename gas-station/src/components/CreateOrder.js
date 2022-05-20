import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';



class CreateOrder extends Component {
    constructor() {
        super()
        this.state = {

            id: "",
            cost: "",
            purchase_date: "",
            employe_id: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        const order = { cost: this.state.cost, purchase_date: this.state.purchase_date, employee_id: Number(this.props.user_id) }
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
                            <label class="form-label" for="purchase_date">Date</label>
                            <input class="form-control" type="date" id="purchase_date" name="purchase_date" onChange={this.handleChange} value={this.state.purchase_date} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3">
                            <button class="btn-success">Place Order</button>
                        </div>

                        {this.state.gotOrder && <Navigate to="/orders" replace={true} />

                        }
                    </form>
                </div>
            </div>

        )
    }
};

export default CreateOrder;