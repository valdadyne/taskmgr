import React, { Component } from 'react';
import { connect} from 'react-redux';
import { taskRef} from '../firebase';
import { setTasks } from '../actions';

import '../static/task.css';

class TaskList extends Component{
    task="";
    componentDidMount(){
        taskRef.on('value', snap =>{
            let tasks =[];
            snap.forEach(task =>{
                const{taskname,assigned,assigned_reliever, start_date, due_date, priority} =task.val();
                const serverKey = task.key;
                tasks.push({serverKey,taskname,assigned,assigned_reliever, start_date, due_date, priority});
            })
            this.props.setTasks(tasks);
        })
    }
    render(){
        return(
            <div className="taskList">
                <ul id="myUL">
                    {
                        this.props.tasks.map((task, index) =>{
                            return(
                                <li className="item" key={index}>
                                    <div className="chk-circle"></div>
                                    <span className="itemField">{task.taskname}</span>
                                </li>
                            )                        
                        })
                    }
                </ul>                
            </div>
        );
    }
}
function mapStateToProps(state){
    const { tasks } = state;
    return{
        tasks
    }
}

export default connect(mapStateToProps,{ setTasks})(TaskList);