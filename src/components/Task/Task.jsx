import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './task.css';

class Task extends Component{
    constructor(props){
        super(props);
        this.taskContent = props.taskContent;
        this.taskId = props.taskId;
    }
    render(){
        return (
            <div className="task">
                 <div className="taskContent">{ this.taskContent }</div>
                 <div className="taskAction"></div>            
            </div>
        )
    }
}

Task.PropTypes ={
    taskContent:PropTypes.string    
}
export default Task;