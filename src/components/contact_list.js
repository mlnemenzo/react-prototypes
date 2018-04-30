import React, { Component } from 'react';
import ContactCard from './contact_card';
import contactData from '../data/contacts';

class ContactList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contacts : contactData
        }
    }

    render () {
        return <h1>Contact List</h1>
    }
}

export default ContactList;

