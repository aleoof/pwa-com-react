import React from 'react';

import Home from "./components/home/home";

import {Container} from 'react-materialize';
import {Switch, Route} from 'react-router-dom';
import Contact from './components/contacts/contacts';
import NotFound from './components/no_found/not_found'

const Main = () =>(
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route  path='/contacts' component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
        </Container>
    </main>
    
)

export default Main;