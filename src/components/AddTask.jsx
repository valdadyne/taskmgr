import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../firebase';

import {Form, FormGroup, ControlLabel, FormControl, Radio, Button} from 'react-bootstrap';
import '../static/app.css';

class AddTask extends Component{
    constructor(props) {
        super(props);
        this.state={
            taskname:'',
            assigned:'',
            assigned_reliever:'',
            start_date:'',
            due_date:'',
            priority:''
        }
    }
    addTask(){       
        const taskname = this.state.taskname;
        const assigned = this.state.assigned;
        const assigned_reliever = this.state.assigned_reliever;
        const start_date = this.state.due_date;
        const due_date = this.state.due_date;
        const priority = this.state.priority;
        
        taskRef.push({taskname,assigned,assigned_reliever,start_date,due_date,priority});
    }
    render(){
        return(
            <div className="AddTask">
                <Form>
                    <FormGroup>
                        <ControlLabel>TaskName</ControlLabel>
                        <FormControl type="text" name="taskname"
                            onChange={event => this.setState({taskname:event.target.value})}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Assigned</ControlLabel>
                        <FormControl type="text" name="assigned"
                            onChange={event => this.setState({assigned:event.target.value})}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Assigned Reliever</ControlLabel>
                        <FormControl type="text" name="assigned_reliever"
                            onChange={event => this.setState({assigned_reliever:event.target.value})}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Start Date</ControlLabel>
                        <FormControl type="date" name="start_date"
                            onChange={event => this.setState({start_date:event.target.value})}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Date Due</ControlLabel>
                        <FormControl type="date" name="due_date"
                            onChange={event => this.setState({due_date:event.target.value})}>
                        </FormControl>
                    </FormGroup>
                    <ControlLabel>Priority</ControlLabel>
                    <FormGroup>                        
                        <Radio inline name="Priority" value="1"
                            onChange={event => this.setState({priority:event.target.value})}>1
                        </Radio>{' '}
                        <Radio inline name="Priority" value="2"
                            onChange={event => this.setState({priority:event.target.value})}>2
                        </Radio>{' '}
                        <Radio inline name="Priority" value="3"
                            onChange={event => this.setState({priority:event.target.value})}>3
                        </Radio>{' '}
                        <Radio inline name="Priority" value="4"
                            onChange={event => this.setState({priority:event.target.value})}>4
                        </Radio>{' '}
                        <Radio inline name="Priority" value="5"
                            onChange={event => this.setState({priority:event.target.value})}>5
                        </Radio>{' '}
                    </FormGroup>
                    <FormGroup>
                        <Button bsStyle="success" className="pull-right" type="button"
                            onClick={() => this.addTask()}>
                            AddTask
                        </Button>
                    </FormGroup>
                </Form>
            </div>        
        );
    }
}
function mapStateToProps(state){
    const { user }= state;
    return{
        user
    }
}
export default connect(mapStateToProps,null)(AddTask);
