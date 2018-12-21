import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Dash from './components/Dash/Dash';
import Wizard from './components/Wizard/Wizard';

const routes = (
    <Switch>
        <Route exact path="/" component={ Dash } />

        <Route path="/wizard" component={ Wizard } />

        {/* <Route path="/match/:id" component={null} /> */}

        {/*  this.props.match.id = 3 
            when path="/match/3"
        */}
    </Switch>
);

export default routes;