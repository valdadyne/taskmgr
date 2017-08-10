import React, { Component } from 'react';
import { connect} from 'react-redux';
import { taskRef} from '../firebase';
import { setTasks } from '../actions';

import TaskItem from './TaskItem';
import '../static/task.css';

class TaskList extends Component{
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
                {
                    this.props.tasks.map((task, index) =>{
                        return(
                            <div>
                                <h6 class="subheading">Active Tasks</h6>
                                    <ul id="myUL">
                                        <TaskItem key={index} task={task} />
                                    </ul>
                            </div>
                        )                        
                    })
                }
                <hr/>
                
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