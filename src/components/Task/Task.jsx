import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './task.css';

class Task extends Component{
    constructor(props){
        super(props);
        this.task = props.task;
        this.taskId = props.taskId;
    }
    render(){
        return (
            <div className="task">
              <span><strong>Task:</strong>&nbsp;{this.task.taskname}</span>
              <span><strong>Priority:</strong>&nbsp;{this.task.priority}</span>
            </div>
        )
    }
}

Task.PropTypes ={
    task:PropTypes.array,
}
export default Task;
