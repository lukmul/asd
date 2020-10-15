import React from 'react';
import '../styles/ContactPage.css'
import { Prompt } from 'react-router-dom'

class ContactPage extends React.Component {

    state = {
        value: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas.</h3>
                    <textarea onChange={this.handleChange} value={this.state.value}></textarea>
                    <button>Wyslij</button>
                </form>
                <Prompt when={this.state.value !== "" && true} message="Masz przejebane" />
            </div>
        );
    }
}

export default ContactPage;