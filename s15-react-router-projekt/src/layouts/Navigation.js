import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "Produkty", path: "/products" },
    { name: "Kontakt", path: "/contact" },
    { name: "Panel admina", path: "/admin" },
];

const Navigation = () => {

    const menu = list.map(item => {
        return (
            <li key={item.name}><NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>
        )
    })
    return (
        <nav className="navigation">
            <ul>
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation;