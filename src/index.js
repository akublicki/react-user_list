import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './routes/home/home.component';
import UserDetails from './routes/userDetails/userDetails.component';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/user/:user_name" component={UserDetails} />
            </div>
        </BrowserRouter>,
    document.getElementById('root'),
    registerServiceWorker()
);