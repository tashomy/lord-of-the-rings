import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  function emailHandler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(item);
  }
  function messageHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setMessageErr(true);
    } else {
      setMessageErr(false);
    }
    setMessage(item);
  }

  function submitHandler(e) {
    if (email.length < 5 || message.length < 4) {
      alert("Invalid Data");
    } else {
      alert("Message sent");
    }
    e.preventDefault();
  }

  return (
    <div id="contact-container">
      <Header></Header>
      <div className="center"></div>
      <div>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="email"
              onChange={emailHandler}
            />
            {emailErr ? <span className="text-muted">Invalid Data</span> : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              id="textarea"
              onChange={messageHandler}
            />
            {messageErr ? (
              <span className="text-muted">Invalid Data</span>
            ) : null}
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
