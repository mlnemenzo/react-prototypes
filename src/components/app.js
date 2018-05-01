import React, { Component } from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import ContactData from '../data';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts : ContactData
        }

        this.addContact = this.addContact.bind(this);
    }

    addContact(contact) {
        this.setState({
            contacts: [contact, ...this.state.contacts]
        })
        console.log("App: addComponent: ", contact);
    }
 

    render() {
        return (
            <div className = 'container'>
                <h1 className= 'text-center my-3'>Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add = {this.addContact}/>
                    </div>
                </div>
                <ContactList contacts = {this.state.contacts}/>
            </div>
        );
    };
}

export default App;
