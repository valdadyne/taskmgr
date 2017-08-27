import React, { Component} from 'react';
import { connect} from 'react-redux';
import { setCompleted} from '../../actions';
import { completeTaskRef } from '../../firebase';
import moment from 'moment';

class CompleteTaskList extends Component {
  componentDidMount(){
    completeTaskRef.on('value', snap =>{
      let completeTasks =[];
      snap.forEach(completeTask =>{
        const {closer, task} = completeTask.val();
        completeTasks.push ({closer, task});
      })
      this.props.setCompleted(completeTasks);
    })
  }
  render(){
    return (
      <div className="completedList">
        {
          this.props.completeTasks.map(completeTask =>{
            return(
              <Task key={completeTask.task.id} completeTask={completeTask}/>)
            })
        }

      </div>
    )
  }
}

const Task = (props) => {
  const {closer} = props.completeTask;
  const {taskname,description, priority,start_date,due_date, Creator} = props.completeTask.task;
  return(
    <div className="completedItem">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            <strong>{taskname}</strong>
          </h3>
          <h3 className="panel-title">
            <strong>{moment(due_date).diff(moment(start_date), 'days')} days</strong>
          </h3>
          <span className="pull-right clickable">
            <i className="glyphicon glyphicon-chevron-up"></i>
          </span>
        </div>
        <div className="panel-body">
          <table>
            <tr>
              <td>Description</td>
              <td className="long">{description}</td>
            </tr>
            <tr>
              <td>Priority</td>
              <td>{priority}</td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td>{start_date}</td>
            </tr>
            <tr>
              <td>Due Date</td>
              <td>{due_date}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  const { completeTasks} = state;
  return{
    completeTasks
  }
}


export default connect(mapStateToProps,{ setCompleted })(CompleteTaskList);
