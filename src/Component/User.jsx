import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import EidthUser from "./EidthUser";
import "./User.css";

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteuser(props.userinfo.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="eidthuser">
          <Modal.Title>EidthUser</Modal.Title>
        </Modal.Header>
        <Modal.Body className="eidthuser">
          <EidthUser
            userinfo={props.userinfo}
            eidthuser={props.eidthuser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <div>
        <Col md={4}>
          <Card style={{ width: "18rem" }} className="card">
            <Card.Body>
              <Card.Title>User Card</Card.Title>
              <Card.Subtitle className="mb-2 ">
                Name : {props.userinfo.name}
                <br />
                Email : {props.userinfo.email}
                <br />
                Gen : {props.userinfo.gen}
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={handleShow}
                >
                  Eidth
                </Button>
              </Card.Link>

              <Card.Link>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default User;
