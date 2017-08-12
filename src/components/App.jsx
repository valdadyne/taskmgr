import React, { Component } from 'react';
import { connect} from 'react-redux';
import { firebaseApp} from '../firebase';

import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
// import CompletedTaskList from './CompletedTaskList';

import '../static/app.css';

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
            <li><a onClick={() => this.signOut()}><i className="material-icons">person</i>SignOut</a></li>
          </ul>
          <a className="navbar-brand" href="/">WholeLife</a>
        </nav>
        <main>
          <button className=" pull-left btn btn-primary" data-toggle="modal" data-target="#AddTask">
            AddTask
          </button>
          <div className="submenu col-md-offset-3 col-md-6">
            <ul className="nav nav-tabs nav-justified">
              <li className="active"><a data-toggle="tab" href="#activeTasks">Active Tasks</a></li>
              <li><a data-toggle="tab" href="#completedTasks">Completed Tasks</a></li>
              <li><a data-toggle="tab" href="#dueTasks">Past Due Tasks</a></li>
              <li><a data-toggle="tab" href="#Reports">Reports</a></li>
            </ul>
          </div>
          <div className ="clearfix"></div>
          <section className="tab-content">
            <div id="activeTasks" className="tab-pane fade in active">              
              <TaskList />
              <TaskDetail />
            </div>
            <div id="completedTasks" className="tab-pane fade">completed</div>
            <div id="dueTasks" className="tab-pane fade">due</div>
            <div id="Reports" className="tab-pane fade">Reports</div>
          </section>
        </main>
        <AddTask />
      </div>
    );
  }
}
function mapStateToProps(state) {
    return{}
}

export default connect(mapStateToProps,null)(App);
