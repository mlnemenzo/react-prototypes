import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import Macrons from './our_macrons';
import Contact from './contact';
import Gifts from './gifts_parties';

function App() {
    return (
        <div>
            <Nav/>
            <Route exact path = "/" component = {Welcome}/>
            <Route path = "/our-macrons" component = {Macrons}/>
            <Route path = "/contact" component = {Contact}/>
            <Route path = "/gifts_parties" component = {Gifts}/>

        </div>
    );
}

export default App;