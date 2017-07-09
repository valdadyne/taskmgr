import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskname: '',
      department:'',
      start_date:'',
      due_date:'',
      tasks: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('tasks');
    const item = {
      taskname: this.state.taskname,
      department: this.state.department,
      start_date:this.state.start_date,
      due_date:this.state.due_date
    }
    itemsRef.push(item);
    this.setState({
      taskname: '',
      department:'',
      start_date:'',
      due_date:''
    });
  }
  componentDidMount() {
    const tasksRef = firebase.database().ref('tasks');
    tasksRef.on('value', (snapshot) => {
      let tasks = snapshot.val();
      let newState = [];
      for (let task in tasks) {
        newState.push({
          id: task,
          taskname: tasks[task].taskname,
          department: tasks[task].department,
          start_date: tasks[task].start_date,
          due_date: tasks[task].due_date
        });
      }
      this.setState({
        tasks: newState
      });
    });
  }
  removeTask(taskId) {
    const taskRef = firebase.database().ref(`/tasks/${taskId}`);
    taskRef.remove();
  }
  render() {
    return (
      <div className="app">
        <header>
          <div className='wrapper'>
            <h1>WholeLife</h1>
          </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="taskname" placeholder="What's the name of the task?" onChange={this.handleChange} value={this.state.taskname}  />
                <input type="text" name="department" placeholder="Which department?"onChange={this.handleChange} value={this.state.department}  />
                <label>When does the task start?</label>
                <input type="date" name="start_date" onChange={this.handleChange} value={this.start_date} />
                <label>When is the task due?</label>
                <input type="date" name="due_date" onChange={this.handleChange} value={this.state.due_date} />
                <button>Add Task</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
                {this.state.tasks.map((task) => {
                  return (
                    <li key={task.id}>
                      <h3>{task.taskname}</h3>
                      <p>department: <strong>{task.department}</strong></p>
                      <p>started: <strong>{task.start_date}</strong></p>
                      <p>due: <strong>{task.due_date}</strong></p>
                      <button onClick={() => this.removeTask(task.id)}>Remove Task</button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>  
      </div>
    );
  }
}

export default App;
