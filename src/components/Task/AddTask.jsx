import React, { Component} from 'react';
import { connect } from 'react-redux';
import { taskRef} from '../../firebase';

class AddTask extends Component{
  constructor(props){
    super(props);
    this.state ={
      taskname:'',
      description:'',
      start_date:'',
      due_date:''
    }
  }
  addTask(){
    console.log('this', this);
    const { taskname, description, start_date, due_date} = this.state;
    const { email } = this.props.user;
    taskRef.push({'Creator':email,taskname,description,start_date,due_date});
  }
  render(){
    return (
      <div className="form">
        <div className="form-group">
          <label>Taskname</label>
          <input type="text" className="form-control"  placeholder="Enter taskname"
            onChange={event => this.setState({taskname:event.target.value})}/>
        </div>
        <div className="form-group">
          <label>Task Description</label>
          <textarea className="form-control" placeholder="Enter the description of the task"
            onChange={event => this.setState({description:event.target.value})} >
          </textarea>
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input type="date" className="form-control"
            onChange={event => this.setState({start_date:event.target.value})}/>
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input type="date" className="form-control"
            onChange={event => this.setState({due_date:event.target.value})}/>
        </div>
        <div className="form-group">
          <button className="btn btn-success"
            onClick={() => this.addTask()}>
              AddTask</button>
        </div>
      </div>
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
