import React, { Component } from 'react';
import {firebaseApp} from './firebase';
import { connect } from 'react-redux';

import {AddTask, TaskList} from './components/Task';
import './App.css';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="app-wrapper">
        <header>
          <h2 className="brand">WholeLife </h2>
          <div className="button-group">
            <button className="btn btn-danger"
              onClick={() => this.signOut()}>SignOut</button>
          </div>
        </header>
        <main>
          <TaskList />
        </main>
        <footer></footer>
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log('state', state);
  return {}
}
export default connect(mapStateToProps, null)(App);
