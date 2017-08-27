import React, { Component } from 'react';
import { connect } from 'react-redux';

import { taskRef, completeTaskRef } from '../../firebase';
import moment from 'moment';

import './task.css';

class Task extends Component{
    constructor() {
      super();
      this.state = {
        childVisible: false
      }
    }
    completeTask(){
      const { email } = this.props.user;
      const task = this.props.task;
      taskRef.child(task.id).remove();
      completeTaskRef.push({closer:email,task});
    }
    render(){
        const {taskname,description, priority,start_date,due_date} = this.props.task;
        const task = this.props.task;
        return (
          <div className="taskItem">
            <div className="task">
              <span onClick={() => this.onClick()}>&nbsp;{taskname}</span>
              <span><strong>Priority:</strong>&nbsp;
                <strong
                  className ={(priority === 'High') ? 'text-danger' : (priority === 'Medium') ? 'text-success' : 'text-primary'}>{priority}
                </strong>
              </span>
              <span><strong>Started On:</strong>&nbsp;{start_date}</span>
              <span><strong>Due:</strong>&nbsp;{moment(new Date(due_date)).fromNow()}</span>
              <button className="btn btn-primary" onClick={() =>this.completeTask()}>
                <i style={{fontSize:'20px'}} className="ion-checkmark-circled"></i>
              </button>
            </div>
            {
              this.state.childVisible
                ? <div className="modal-Details fade">
                    <header>
                      <h2>Edit Task</h2>
                      <a className="btn btn-close btn-danger" onClick={() => this.onClick()}>
                        X</a>
                    </header>
                    <Child task={task}/>
                  </div>
                : null
            }
          </div>
        )
    }
    onClick() {
      this.setState({childVisible: !this.state.childVisible});
    }
}
class Child extends React.Component {
  render() {
    const {taskname,description, priority,start_date,due_date} = this.props.task;
      return (
        <div>

        </div>
      );
    }
  }

function mapStateToProps(state){
  const { user }= state
  return{
    user
  }
}
export default connect(mapStateToProps,null)(Task);
