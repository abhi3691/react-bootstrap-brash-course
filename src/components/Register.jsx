import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Register = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  let UpdateInPut = (e) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  let register = (e) => {
    e.preventDefault();
    console.log(state.user);
  };
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3"
                style={{ backgroundColor: "darkslateblue", color: "#fff" }}
              >
                Register
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#f7f5f0" }}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="name"
                      onChange={UpdateInPut}
                      type="text"
                      placeholder="Name"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={UpdateInPut}
                      placeholder="Email"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      name="phonenumber"
                      onChange={UpdateInPut}
                      placeholder="phoneNumber"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button
                      type="submit"
                      variant="error"
                      onClick={register}
                      style={{
                        backgroundColor: "darkslateblue",
                        color: "#fff",
                      }}
                    >
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
