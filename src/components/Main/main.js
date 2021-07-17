import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import ContactForm from '../Contact';
import Header from '../Header';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/header" component={Header} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={ContactForm} />
    </Switch>
)

export default Main;