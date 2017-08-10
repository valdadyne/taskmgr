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
        const{taskname} =this.props.task;
        return(
            <li class="item">
                <div class="chk-circle"></div>
                <span class="itemField">{taskname}</span>
            </li>
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