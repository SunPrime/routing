import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

import App         from './App.js';
import AboutPage   from './components/AboutPage.js';
import InboxPage   from './components/InboxPage.js';
import Message     from './components/Message.js';
import Home        from './components/Home.js';
import Error       from './components/Error.js';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={AboutPage}/>
                <Route exact path='/inbox' component={InboxPage}/>
                <Route path='/inbox/message/:id' component={Message}/>
                {/*<Route path='*' component={Error}/>*/}
            </Switch>
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);
