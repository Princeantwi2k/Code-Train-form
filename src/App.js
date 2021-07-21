import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import React, { Component } from 'react';
import UserForm from './Component/UserForm';
import AddUser from './Component/AddUser';

class App extends Component {
   constructor(props){
     super(props)
     this.state = {
       users: [
       
       ]
     }
   }
  
   adduser = (user) =>{
     user.id= Math.random().toString
     this.setState({
       users: [...this.state.users, user]
     })
   }
   handledelete =(id) =>{
    let undeleted = this.state.users.filter((user) => user.id !== id)
   this.setState({ 
     users: undeleted
   })
   }
   handleEidth =(id, updateUser) =>{
    this.setState({
      users : this.state.users.map(user=> user.id === id ? updateUser: user)
    })
    }
  render() {
    return (
      <>
      <Container fluid style={{ marginTOP: `30px` }}>
        <Row>
          <Col xs={4}  >
            <AddUser newuser={this.adduser}/>
          </Col>
          <Col xs={4}  >
            <UserForm  usersDater={this.state.users} deleteuser={this.handledelete} eidthuser={this.handleEidth}/>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default App;
