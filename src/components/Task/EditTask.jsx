import React, {Component} from 'react';



class EditTask extends Component {
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

export default EditTask;