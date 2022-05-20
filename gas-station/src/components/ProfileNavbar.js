import React from 'react'
// import { NavLink } from 'react-router-dom';
import '../App.css'
import { Outlet } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <div class="navbar-nav">
                                    <a class="nav-link" href="/orders">View Orders</a>
                                    <a class="nav-link" href="/orders/new">Add Order</a>
                                </div>
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