import React, {Component} from 'react';

import Task from './Task';
import './task.css';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state ={
            tasks:[
                {id:1 , taskContent:"My first task"},
                {id:2 , taskContent:"My second task"},
                {id:3 , taskContent:"My third task"},
                {id:4 , taskContent:"My fourth task"},
                {id:5 , taskContent:"My fifth task"},
                {id:6 , taskContent:"My sixth task"}
            ],
        }
    }
    render(){
        return (
            <div className="tasklist">
                <div className="tasklist-header">
                    <button> Add Task</button>
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
                </div>
            </div>
        )
    }
}
export default TaskList;