import React, {Component} from 'react';
import {connect} from 'react-redux';
import {taskRef} from '../../firebase';
import { setTasks} from '../../actions';

import {AddTask,CompleteTasks, Task} from './';
import './task.css';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'allTasks'
    }
  }
  componentDidMount() {
    taskRef.on('value', snap => {
      let tasks = [];
      snap.forEach(task => {
        const id = task.key;
        const {Creator, taskname,description, priority,start_date,due_date} = task.val();
        tasks.push({id, Creator, description,taskname,priority,start_date,due_date});
      })
      // console.log('tasks', tasks);
      this.props.setTasks(tasks);
    })
  }
  handleClick(e) {
    e.stopPropagation();
    var selectedId = e.target.id;
    this.setState({activeComponent: selectedId});
  }
  render() {
    return (
      <div className="tasklist">

        <aside>
          <div><button id="allTasks" className="btn btn-custom" onClick={this.handleClick.bind(this)}>
            <i className="ion-ios-list-outline"></i><br/>All Tasks</button></div>
          <div><button id="addTask" className="btn btn-custom" onClick={this.handleClick.bind(this)}>
            <i className="ion-ios-plus-outline"></i><br/>Add Task</button></div>
          <div><button id="doneTasks" className="btn btn-custom" onClick={this.handleClick.bind(this)}>
              <i className="ion-ios-checkmark-outline"></i><br/>Completed</button></div>
          <div><button id="dueTasks" className="btn btn-custom" onClick={this.handleClick.bind(this)}>
            <i className="ion-ios-information-outline"></i><br/>Past Due</button></div>
        </aside>

        <main>
          <div className="taskComponent">
            {(this.state.activeComponent === "allTasks")
              ? <section>
                <h4>Active Tasks</h4>
                {
                  this.props.tasks.map(task =>{
                    return(
                      <Task key={task.id} task={task}/>)
                    })
                }
              </section>
              : null
            }
            {(this.state.activeComponent === "addTask")
              ? <section>
                  <h4>Create a new Task</h4>
                  <AddTask/>
                </section>
              : null
            }
            {(this.state.activeComponent === "doneTasks")
              ? <section>
                <h4>Completed Tasks</h4>
                <CompleteTasks />
              </section>
              : null
            }
            {(this.state.activeComponent === "dueTasks")
              ? <section>
                <h4>Past Due Tasks</h4>
              </section>
              : null
            }
          </div>
        </main>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { tasks } = state;
  return {
    tasks
  }
}

export default connect(mapStateToProps,{ setTasks})(TaskList);
