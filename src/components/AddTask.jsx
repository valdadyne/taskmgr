import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Radio, Button} from 'react-bootstrap';

import '../static/addtask.css';

class AddTask extends Component{
    render(){
        return(
            <div className="AddTask">
                <Form>
                    <FormGroup>
                        <ControlLabel>TaskName</ControlLabel>
                        <FormControl type="text"></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Assigned</ControlLabel>
                        <FormControl type="text"></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Assigned Reliever</ControlLabel>
                        <FormControl type="text"></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Start Date</ControlLabel>
                        <FormControl type="date"></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Date Due</ControlLabel>
                        <FormControl type="date"></FormControl>
                    </FormGroup>
                    <ControlLabel>Priority</ControlLabel>
                    <FormGroup>                        
                        <Radio inline name="Priority">1</Radio>{' '}
                        <Radio inline name="Priority">2</Radio>{' '}
                        <Radio inline name="Priority">3</Radio>{' '}
                        <Radio inline name="Priority">4</Radio>{' '}
                        <Radio inline name="Priority">5</Radio>{' '}
                    </FormGroup>
                    <FormGroup>
                        <Button bsStyle="success" bsSize="medium" className="pull-right" type="submit">
                            AddTask
                        </Button>
                    </FormGroup>
                </Form>
            </div>        
        );
    }
}
export default AddTask;