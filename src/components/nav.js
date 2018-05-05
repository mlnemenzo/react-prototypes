import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default props => {
    return (
        <ul className = "nav nav-tabs mt-3">
            <li className="nav-items">
                <NavLink exact to = "/" activeClassName="active selected" className = "nav-link" >Welcome</NavLink>
            </li>
            <li>
                <NavLink to = "/our-macrons" activeClassName="active selected" className = "nav-link" >Our Macrons</NavLink>
            </li>
            <li>
                <NavLink to = "/contact" activeClassName="active selected" className = "nav-link" >Contact</NavLink>
            </li>
            <li>
                <NavLink to = "/gifts_parties" activeClassName="active selected" className = "nav-link" >Gifts & Parties</NavLink>
            </li>
        </ul>
    );
}