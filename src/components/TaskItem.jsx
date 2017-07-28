import React, { Component } from 'react';

import '../static/taskItem.css';

class TaskItem extends Component{
    render(){
        console.log ('this.props.task', this.props.task);
         const{taskname,assigned,assigned_reliever, start_date, due_date, priority} =this.props.task;
        return(
            <div className="task-wrapper">
                <div className="task-header">
                   <div><h4 className="text-default">{taskname}</h4></div>
                   <div><h1 className="text-danger">{priority}</h1></div>
                </div>
                <div className="task-content">
                    <div><label>Assigned :</label>&nbsp;{assigned}</div>
                    <div><label>Assigned Reliever :</label>&nbsp;{assigned_reliever}</div>
                    <div><label>Started:</label>&nbsp;{start_date}</div>
                    <div><label>Due:</label>&nbsp;{due_date}</div>
                </div>
                <div className="task-toolbox">
                    <div><a className=" btn task-icons"><i className="material-icons">mode_edit</i></a>Edit</div>
                    <div><a className=" btn task-icons"><i className="material-icons">done</i></a> Mark Done</div>
                    <div><a className=" btn task-icons"><i className="material-icons">delete_sweep</i></a>delete</div>
                </div>
            </div>
        ); 
    }
}
export default TaskItem;