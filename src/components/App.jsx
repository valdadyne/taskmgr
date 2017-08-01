import React, { Component } from 'react';
import { connect} from 'react-redux';
import { firebaseApp} from '../firebase';

import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import { ButtonToolbar , ButtonGroup, Button} from 'react-bootstrap';

import AddTask from './AddTask';
import TaskList from './TaskList';
import CompletedTaskList from './CompletedTaskList';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="App">
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">WHOLELIFE</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem className="btn-link" onClick={() =>this.signOut()}>SignOut</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button className="button">
                    <a data-toggle="tab" href="#openTasks" className="text-primary">Open Tasks</a>
                  </Button>
                  <Button className="button">
                    <a data-toggle="tab" href="#completedTasks" className="text-success">Completed Tasks</a>
                  </Button>
                  <Button className="button">
                    <a data-toggle="tab" href="#pastDueTasks" className="text-danger">Past Due Tasks</a>
                  </Button>
                </ButtonGroup>                                                                                                                                                                
              </ButtonToolbar>
              <div className="content-wrapper">
                <div className="tab-content">
                  <div id="openTasks" className="tab-pane fade in active">
                    <h4 className="subtitle">Open Tasks</h4>
                    <TaskList />
                  </div>
                  <div id="completedTasks" className="tab-pane fade">
                    <h4 className="subtitle">Completed Tasks</h4>
                    <CompletedTaskList />
                  </div>
                  <div id="PastDueTasks" className="tab-pane fade">
                    <h4 className="subtitle">Past Due Tasks</h4>
                    <p>Some content in menu 2.</p>
                  </div>
                </div>
              </div>                
                
              </Col>
              <Col xs={6} md={4}>
                <AddTask />
              </Col>
            </Row>          
        </Grid>
       </div>
    );
  }
}
function mapStateToProps(state) {
    // console.log('state', state);
    return{}
}

export default connect(mapStateToProps,null)(App);
