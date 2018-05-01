import React, { Component } from 'react';

class ContactForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            form: {
                firstName : '',
                lastName : ''
            }
        };

        
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {

        const {value, name} = event.target;

        console.log(event.target);
        console.log(value);

        this.setState({
            form: { ...this.state.form, [name]: value }
        });

    }

    handleSubmit() {

    }


    render() {

        const {firstName, lastName} = this.state.form;

        return <form>
            <div className="form-group">
                <label>First Name</label><input className = "form-control" type="text" name = "firstName" value = {firstName} onChange = { this.handleInputChange }/>
            </div>
            <div className="form-group">
                <label>Last Name</label><input className = "lastName" type="text" name = "lastName" value = {lastName} onChange = { this.handleInputChange }/>
            </div>
        </form>
    }
}

export default ContactForm;

