import React, { Component } from 'react';
import { connect } from 'react-redux';

import { taskRef, completeTaskRef } from '../../firebase';
import moment from 'moment';

import './taskItem.css';

class Task extends Component{
    constructor() {
      super();
      this.state = { isModalOpen: false }
    }
    editTask(){

    }
    completeTask(){
      const { email } = this.props.user;
      const task = this.props.task;
      taskRef.child(task.id).remove();
      completeTaskRef.push({closer:email,task});
    }
    render(){
      const {taskname,priority,due_date} = this.props.task;
      const task = this.props.task;
      return(
        <div className="taskWrapper">
          <div className="taskItem">
            <div className="due_dates">
              <span>Due</span>&nbsp;
              {moment(new Date(due_date)).fromNow()}
            </div>
            <div className="priority">
              <div className ={(priority === 'High') ? 'btn-danger' : (priority === 'Medium') ? 'btn-success' : 'btn-primary'}>
              </div>
            </div>
            <div className="taskname">{taskname}</div>
            <div className="button-group">
              <button className="btn btn-info" onClick={() =>this.completeTask()}>Done</button>
              <button className="btn btn-success" onClick={() => this.openModal()}>Edit </button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
          <Modal task={task} isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} />
        </div>
      )
    }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
  }

  class Modal extends Component {
    constructor(props){
      super(props);
      this.state ={
        taskname: '',
        description:'',
        priority:'Medium',
        start_date:'',
        due_date:''
      }
    }

    render(){

      if (this.props.isOpen === false)
      return null
      console.log('this.state', this.state);
    return (
      <div className="overlay fade" >
        <div className="editWrapper">
          <form className="form">
            <div className="col-sm-6">
              <div className="form-group">
                <label>TaskName</label>
                <input className="form-control" defaultValue={this.props.task.taskname}
                  onChange={event => this.setState({taskname:event.target.value})} required />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea rows="5" className="form-control" defaultValue={this.props.task.description}
                  onChange={event => this.setState({description:event.target.value})} required>
                </textarea>
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select className="form-control" defaultValue= {this.props.task.priority}
                    onChange={event => this.setState({priority:event.target.value})}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label>Start Date</label>
                    <input type="date" className="form-control" defaultValue= {this.props.task.start_date}
                        onChange={event => this.setState({start_date:event.target.value})} required/>
                  </div>
                  <div className="col-sm-6">
                    <label>Due Date</label>
                    <input type="date" className="form-control" defaultValue= {this.props.task.due_date}
                      onChange={event => this.setState({due_date:event.target.value})} required/>
                  </div>
                </div>
              </div>
            </div>
            <div className = 'col-sm-6'>
              <div className="form-group">
                <button type="submit" className="pull-right btn btn-success"> Save Task</button>
              </div>
              <br />
              <div className="form-group">
                <label>Assigned </label>
                <select className="form-control"name="assigned" multiple="multiple" size="5">
                </select>
              </div>
              <div className="form-group subtasks">
                <label>Subtasks</label>
                <div className="form-group input-group">
                  <input type = "text" className ="form-control" />
                  <span className = "input-group-addon"><a id="newSubtask">+</a></span>
                </div>
                  <select className="form-control"  name="assigned" multiple="multiple" size="5">
                  </select>
              </div>
            </div>
          </form>
        </div>
        <button id="btn-close" className="btn btn-danger" onClick={e => this.close(e)}>X</button>
      </div>
    )
  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}


function mapStateToProps(state){
  const { user }= state
  return{
    user
  }
}
export default connect(mapStateToProps,null)(Task);
