import React from 'react'
// import { NavLink } from 'react-router-dom';
import '../App.css'
import { Outlet, Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                {/* <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link to="/">Home</Link>
                    <Link to="/users/new">Add User</Link>
                </nav> */}
                <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" href="/">Home</a>
                                <a class="nav-link" href="/users/new">Add User</a>
                                <a class="nav-link" href="/users/login">Login</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <Outlet />
            </div >
        )
    }
}





export default Navbar;