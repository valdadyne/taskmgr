import React, {Component} from 'react';
import moment from 'moment';

import './task.css';

class Task extends Component{
    render(){
        const {taskname, priority,start_date,due_date} = this.props.task;
        return (
            <div className="task">
              <span>&nbsp;{taskname}</span>
              <span><strong>Priority:</strong>&nbsp;
                <span className =
                  {(priority === 'High') ? 'text-danger' : (priority === 'Medium') ? 'text-success' : 'text-primary'}>
                  {priority}</span>
              </span>
              <span><strong>Started On:</strong>&nbsp;{start_date}</span>
              <span><strong>Due:</strong>&nbsp;{moment(new Date(due_date)).fromNow()}</span>
            </div>
        )
    }
}

export default Task;
