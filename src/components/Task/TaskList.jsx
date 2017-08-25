import React, {Component} from 'react';
import {taskRef} from '../../firebase';

import Task from './Task';
// import './task.css';

class TaskList extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
      taskRef.on('value', snap => {
        let tasks = [];
        snap.forEach(task => {
          const { Creator, taskname } = task.val();
          tasks.push({Creator,taskname});
        })
        console.log('tasks', tasks);
      })
    }
    render(){
        return (
            <div className="tasklist">
                {/* <div className="tasklist-header">
                    <button className="btn">Add Task</button>
                </div>
                <div className="tasklist-body">
                     {
                        this.state.tasks.map((task,index) =>{
                            return (
                                <Task key={index}
                                    taskId={task.id}
                                    taskContent={task.taskContent} />
                            )
                        })
                    }
                </div> */}
            </div>
        )
    }
}
export default TaskList;
