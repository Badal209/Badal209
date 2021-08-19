import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordResetHandler = (e) => {
    e.preventDefault();
    if (!email) {
      alert("please enter the email");
    }
    console.log("email", email);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={passwordResetHandler}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={emailChangeHandler}
                required
              />
            </Form.Group>

            <br />
            <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/login">Login now</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordReset;
