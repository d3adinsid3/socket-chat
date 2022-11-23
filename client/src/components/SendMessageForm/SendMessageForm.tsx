import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./send-message-form.scss";

const SendMessageForm = () => {
  return (
    <div className="send-message-form">
      <InputGroup>
        <Form.Control
          placeholder="Enter message"
          aria-label="Enter message"
          aria-describedby="chatMessage"
        />
        <Button variant="primary" id="chatMessage">
          Send
        </Button>
      </InputGroup>
    </div>
  );
};

export default SendMessageForm;
