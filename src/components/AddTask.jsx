import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';

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
                        <Checkbox inline>1</Checkbox>{' '}
                        <Checkbox inline>2</Checkbox>{' '}
                        <Checkbox inline>3</Checkbox>{' '}
                        <Checkbox inline>4</Checkbox>{' '}
                        <Checkbox inline>5</Checkbox>{' '}
                    </FormGroup>
                    <FormGroup>
                        <Button className="btn btn-success btn-md pull-right" type="submit">AddTask</Button>
                    </FormGroup>
                </Form>
            </div>        
        );
    }
}
export default AddTask;