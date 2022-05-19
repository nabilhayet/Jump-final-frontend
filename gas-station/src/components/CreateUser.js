import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';



class CreateUser extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            name: "",
            email: "",
            phoneNumber: "",
            gotUser: false,
            id: "",
            role: ""

        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const employee = {
            name: this.state.name, email: this.state.email, phoneNumber: this.state.phoneNumber,
            user:
                { username: this.state.username, password: this.state.password, role: this.state.role }
        }
        this.createNewEmployee(employee)


    }
    createNewEmployee = (employee) => {
        const configobj = {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }

        }
        console.log(this.state.role);
        fetch('http://localhost:8080/api/employees/add', configobj)
            .then(response => response.json())
            .then(employee => {
                this.setState({
                    gotUser: true,
                    id: employee.id
                })

            })
    }

    render() {
        return (
            <div class="row">

                <div class="col-6 offset-3">
                    <form onSubmit={event => this.handleSubmit(event)}>

                        <div class="mb-3">
                            <label class="form-label" for="username">Username</label>
                            <input class="form-control" type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Password</label>
                            <input class="form-control" type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="name">Name</label>
                            <input class="form-control" type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="email">Email</label>
                            <input class="form-control" type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="contact">phoneNumber</label>
                            <input class="form-control" type="text" id="phoneNumber" name="phoneNumber" onChange={this.handleChange} value={this.state.phoneNumber} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="role">Role</label>
                            <input class="form-control" type="text" id="role" name="role" onChange={this.handleChange} value={this.state.role} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3">
                            <button class="btn-success">Add User</button>
                        </div>

                        {this.state.gotUser && <Navigate to="/users/login" replace={true} />

                        }
                    </form>
                </div>
            </div>

        )
    }
};

export default CreateUser;