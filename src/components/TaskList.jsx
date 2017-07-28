import React, { Component } from 'react';
import { connect} from 'react-redux';
import { taskRef} from '../firebase';
import { setTasks } from '../actions';
import { ButtonToolbar , ButtonGroup, Button} from 'react-bootstrap';

import TaskItem from './TaskItem';

class TaskList extends Component{
    componentDidMount(){
        taskRef.on('value', snap =>{
            let tasks =[];
            snap.forEach(task =>{
                const{taskname,assigned,assigned_reliever, start_date, due_date, priority} =task.val();
                  tasks.push({taskname,assigned,assigned_reliever, start_date, due_date, priority});
            })
            console.log('tasks', tasks);
            this.props.setTasks(tasks);
        })
    }
    render(){
        return(
            <div className="TaskList">
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button className="button"><span className="text-primary">Open Tasks</span></Button>
                    <Button className="button"><span className="text-success">Completed Tasks</span></Button>
                    <Button className="button"><span className="text-danger">Past Due Tasks</span></Button>
                  </ButtonGroup>                                                                                                                                                                
                </ButtonToolbar>
                {
                    this.props.tasks.map((task, index) =>{
                        return(
                            <TaskItem key={index} task={task} />
                        )                        
                    })
                }


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