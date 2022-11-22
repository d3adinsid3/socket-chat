import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import "./set-nickname-modal.scss";

const SetNicknameModal = () => {
  const [showModal, setShowModal] = React.useState(true);

  const handleSetNickname = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} centered>
      <Modal.Header>
        <Modal.Title>Set your nickname first</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <Form.Control
            placeholder="Enter nickname"
            aria-label="Enter nickname"
            aria-describedby="chatNicknane"
          />
          <Button variant="primary" onClick={handleSetNickname}>
            Save Changes
          </Button>
        </InputGroup>
      </Modal.Body>
    </Modal>
  );
};

export default SetNicknameModal;
