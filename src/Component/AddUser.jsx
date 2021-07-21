import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Form.css";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newuser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="form">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              className="form-input"
              placeholder="Enter name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="form-input"
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gen</Form.Label>
            <Form.Control
              type="number"
              placeholder="number"
              name="gen"
              className="form-input"
              value={this.state.gen}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddUser;
