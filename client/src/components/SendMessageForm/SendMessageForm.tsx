import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SendMessageForm = () => {
  return (
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
  );
};

export default SendMessageForm;
