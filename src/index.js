import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {firebaseApp} from './firebase';

import allReducers from './reducers';
import {logUser} from './actions';
import App from './App';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';


const history = createBrowserHistory()
const store = createStore(allReducers);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        // console.log('user has signed in or up', user);
        const { email} = user;
        store.dispatch(logUser(email));
        history.push('/app');
    } else {
        // console.log('user has signed out or still needs to signin');
        history.replace('/signin');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router exact path="/" history={history}>
            <div>
                <Route path = "/app" component = { App }/>
                <Route exact path = "/signin" component = { SignIn } />
                <Route exact path = "/signup" component = { SignUp }/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
