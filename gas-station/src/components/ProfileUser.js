import React from 'react'
import Navbar from './Navbar';
import ProfileNavbar from './ProfileNavbar';
import { useParams } from 'react-router';
import CreateOrder from './CreateOrder';

export default function ProfileUser() {
    let params = useParams();
    return (
        <div>
            <div class="navbar-nav">
                <div class="navbar-nav">
                    <a class="nav-link" href="/orders">View Orders</a>
                    <a class="nav-link" href="/orders/new">Add Order</a>
                </div>
            </div>
            {/* {<ProfileNavbar />} */}
            <h4 class="text-center">Welcome User, Your user id is {params.id}</h4>
            <CreateOrder user_id={params.id} />
        </div>
    );
}