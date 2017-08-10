import React, { Component } from 'react';
import { connect} from 'react-redux';
import { completedTaskRef, taskRef} from '../firebase';

import '../static/task.css';

class TaskItem extends Component{
    completeTask(){
        const {email} = this.props.user;
        const{serverKey,taskname,assigned,assigned_reliever, start_date, due_date, priority} = this.props.task;
        taskRef.child(serverKey).remove();
        completedTaskRef.push({'completer': email,taskname,assigned,assigned_reliever, start_date, due_date, priority})

    }
    deleteTask(){
        taskRef.set([]);
    }
    render(){
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
                    <div>
                        <a className=" btn task-icons">
                            <i className="material-icons">mode_edit</i>
                        </a>Edit
                    </div>
                    <div>
                        <a className=" btn task-icons"
                            onClick={() => this.completeTask()}>
                            <i className="material-icons">done</i>
                        </a> Mark Done
                    </div>
                    <div>
                        <a className=" btn task-icons"
                            onClick={() => this.deleteTask()}>
                            <i className="material-icons">delete_sweep</i>
                        </a>delete
                    </div>
                </div>
            </div>
        ); 
    }
}
function mapStateToProps(state){
    const {user} = state;
    return{
        user
    }
}
export default connect(mapStateToProps,null)(TaskItem);