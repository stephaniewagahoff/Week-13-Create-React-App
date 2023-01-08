import React from 'react';

export default class NavbarMenu extends React.Component{
    render() {
        return(
                <nav class="navbar navbar-expand-lg navbar-light">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link text-white" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Items</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Contact Us</a>
                    </li>
                    </ul>
                </nav>
        );
    }
}
