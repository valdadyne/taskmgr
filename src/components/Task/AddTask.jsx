import React, { Component} from 'react';
import { connect } from 'react-redux';
import { taskRef} from '../../firebase';

class AddTask extends Component{
  constructor(props){
    super(props);
    this.state ={
      taskname:'',
      description:'',
      priority:'Medium',
      start_date:'',
      due_date:''
    }
  }
  addTask(){
    const { taskname, description,priority, start_date, due_date} = this.state;
    const { email } = this.props.user;
    taskRef.push({'Creator':email,taskname,description,priority,start_date,due_date});
    this.setState({ taskname:'', description:'', priority:'Medium', start_date:'', due_date:''})
  }
  render(){
    return (
      <form className="form AddTask" onSubmit={(e) => {this.addTask();e.preventDefault();}}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Taskname</label>
              <input type="text" className="form-control"  value= {this.state.taskname} placeholder="Enter taskname"
                onChange={event => this.setState({taskname:event.target.value})} required />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Priority</label>
              <select className="form-control" value= {this.state.priority}
                  onChange={event => this.setState({priority:event.target.value})}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Task Description</label>
          <textarea rows="5" className="form-control" value= {this.state.description} placeholder="Enter the description of the task"
            onChange={event => this.setState({description:event.target.value})} required>
          </textarea>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Start Date</label>
              <input type="date" className="form-control" value= {this.state.start_date}
                onChange={event => this.setState({start_date:event.target.value})} required/>
            </div>
          </div>
          <div className="col-sm-6">
            <label>Due Date</label>
            <input type="date" className="form-control" value= {this.state.due_date}
              onChange={event => this.setState({due_date:event.target.value})} required/>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success"> Add Task</button>
        </div>
      </form>
    )
  }
}
function mapStateToProps(state){
  const { user } = state;
  return{
    user
  }
}

export default connect(mapStateToProps,null)(AddTask);
