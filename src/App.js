import React, { Component } from 'react';

import TaskList from './components/Task/TaskList';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <header>
          <h2 className="brand">WholeLife </h2>
        </header>
        <main>
          <TaskList />
        </main>
        <footer></footer>     
      </div>
    );
  }
}

export default App;
