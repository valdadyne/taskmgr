import React, { Component} from 'react';
import { connect} from 'react-redux';
import { setCompleted} from '../../actions';
import { completeTaskRef } from '../../firebase';

class CompleteTaskList extends Component {
  componentDidMount(){
    completeTaskRef.on('value', snap =>{
      let completeTasks =[];
      snap.forEach(completeTask =>{
        const {closer, task} = completeTask.val();
        completeTasks.push ({closer, task});
      })
      this.props.setCompleted(completeTasks);
    })
  }
  render(){
    console.log('this.props.completeTasks', this.props.completeTasks);
    const {closer, task} = this.props.completeTasks;
    return (
      <div className="CompleteTasks">

      </div>
    )
  }

}

function mapStateToProps(state){
  const { completeTasks} = state;
  return{
    completeTasks
  }
}


export default connect(mapStateToProps,{ setCompleted })(CompleteTaskList);
