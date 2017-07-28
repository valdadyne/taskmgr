import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { firebaseApp } from './firebase';
import { logUser} from './actions';
import reducer from './reducers';


import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const history = createBrowserHistory()
const store= createStore(reducer);

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
    </Provider>, document.getElementById('root')
);
