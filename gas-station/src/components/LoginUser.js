// ./src/components/authors/CreateAuthor.js
import React, { Component } from 'react'
// import { Navigate } from 'react-router-dom'


class CreateUser extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""

        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        const user = { username: this.state.username, password: this.state.password }
        this.createNewUser(user)

    }
    createNewUser = (user) => {
        const configobj = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch('http://localhost:3000/users', configobj)
            .then(response => response.json())
            .then(user => {
                this.props.addUser(user)
                this.setState({
                    gotUser: true,
                    id: user.id
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
                            <button class="btn-success">Add User</button>
                        </div>

                        {/* <input type="submit" class="btn" /> */}
                    </form>
                </div>
            </div>

        )
    }
};

export default CreateUser;