import React, { Component } from 'react';
import { connect} from 'react-redux';
import { firebaseApp} from '../firebase';

import AddTask from './AddTask';
import TaskList from './TaskList';
import CompletedTaskList from './CompletedTaskList';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="app-wrapper">
        <nav className="navbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/"><i className="material-icons">supervisor_account</i>Admin</a></li>
            <li><a href="/"><i className="material-icons">person_outline</i>SignOut</a></li>
          </ul>
          <a className="navbar-brand" href="/">WholeLife</a>
        </nav>
       </div>
    );
  }
}
function mapStateToProps(state) {
    return{}
}

export default connect(mapStateToProps,null)(App);
