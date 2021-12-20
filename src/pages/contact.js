import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact-container">
      <Header></Header>
      <div className="center"></div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
