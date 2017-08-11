import React, { Component } from 'react';
import { connect} from 'react-redux';
// import classnames from 'classnames';
import { taskRef} from '../firebase';
import { setTasks } from '../actions';

import '../static/task.css';

class TaskList extends Component{
    constructor() { 
        super();
        this.state = {checked : false};
    }
    onChecked() {
        if (this.state.checked) {
            this.setState({checked: false});
        }
        this.setState({checked: true});
    }
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
                        this.props.tasks.map((task, serverKey) =>{
                            return(
                                <TaskItem key={serverKey} task={task}/>
                            )                        
                        })
                    }                    
                </ul>                
            </div>
        );
    }
}

const TaskItem = (props) =>(
    <li className="item">
        <div className="chk-circle"></div>
        <span className="itemField">{props.task.taskname}</span>
    </li>    
);
function mapStateToProps(state){
    const { tasks } = state;
    return{
        tasks
    }
}

export default connect(mapStateToProps,{ setTasks})(TaskList);