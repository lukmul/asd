import React from 'react';
import { Route } from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            <Route path="" exact render={(props) => (
                <p>Jestes na stronie glownej</p>
            )} />
            <Route path="/:page" render={(props) => (
                <p>Jestes na stronie <span>{props.match.params.page}</span></p>
            )} />
            <Route path="/:page/:id" render={(props) => (
                <p>Jestes na stronie <span>{props.match.params.id}</span></p>
            )} />


        </div>
    )
}

export default Footer;