import React, { Component} from 'react';
import { completeTaskRef } from '../../firebase';

class CompleteTasks extends Component {
  componentDidMount(){
    completeTaskRef.on('value', snap =>{
      let completeTasks =[];
      snap.forEach(completeTask =>{
        const {closer, task} = completeTask.val();
        completeTasks.push ({closer, task});
      })
      console.log('CompleteTasks', completeTasks);
    })
  }
  render(){
    return (
      <div className="CompleteTasks"></div>
    )
  }

}

export default CompleteTasks;
