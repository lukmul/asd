import React from 'react';
import { Route, Switch } from 'react-router-dom';
import img1 from "../images/lama1.jpg";
import img2 from "../images/lama2.jpg";
import img3 from "../images/lama3.jpg";
import img4 from "../images/lama4.jpg";
import "../styles/header.css";

const Header = () => {

    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="lama" />
                )} />
                <Route path="/products" render={() => (
                    <img src={img2} alt="lama" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img3} alt="lama" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img4} alt="lama" />
                )} />
                <Route render={() => (
                    <img src={img1} alt="lama" />
                )} />
            </Switch>
        </>
    )
}

export default Header;