import React, { Component } from "react";
import "./EidthUser.css";
class EidthUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userinfo.name,
      email: props.userinfo.email,
      gen: props.userinfo.gen,
      id: props.userinfo.id,
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.eidthuser(this.state.id, this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
      id: "",
    });
    this.props.closeModal();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name: <br />
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder={this.props.name}
        />
        <br />
        Email: <br />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder={this.props.email}
        />
        <br />
        Gen: <br />
        <input
          name="gen"
          type="number"
          value={this.state.gen}
          onChange={this.handleChange}
          placeholder={this.props.gen}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EidthUser;
