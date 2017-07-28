import React, { Component } from 'react';
import { connect} from 'react-redux';
import { firebaseApp} from '../firebase';

import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import AddTask from './AddTask';
import TaskList from './TaskList';

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
              <TaskList />
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
