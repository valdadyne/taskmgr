import React, { Component} from 'react';
import {connect} from 'react-redux';
import { setCompleted} from '../actions';
import { completedTaskRef } from '../firebase';

class CompletedTaskList extends Component{
    componentDidMount(){
        completedTaskRef.on('value', snap =>{
            let completeTasks =[];
            snap.forEach(completeTask =>{
                const{
                    taskname,assigned,assigned_reliever,
                    start_date, due_date, priority,completer
                } = completeTask.val();
                completeTasks.push({
                    taskname,assigned,assigned_reliever,
                    start_date, due_date, priority, completer
                })
                this.props.setCompleted(completeTasks);
            })
        })
    }
    render(){
        return(
            <div className="CompletedList">
                {
                    this.props.completeTasks.map((completeTask, index) =>{
                        const{taskname,completer } = completeTask;
                        return(
                            <div key = {index}>
                                <div><strong>{ taskname }</strong></div>
                                <div>Completed by :<strong>{ completer}</strong></div>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
function mapStateToProps(state){
    const { completeTasks} = state;
    return{
        completeTasks
    }
}
export default connect(mapStateToProps, { setCompleted})(CompletedTaskList);