import React from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User";

const UserForm = (props) => {
  return (
    <Container>
      <Row>
        {props.usersDater.map((user) => {
          return (
            <User
              userinfo={user}
              key={user.id}
              deleteuser={props.deleteuser}
              eidthuser={props.eidthuser}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default UserForm;
