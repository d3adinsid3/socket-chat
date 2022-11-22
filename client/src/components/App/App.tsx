import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "../List";
import Chat from "../Chat";
import SetNicknameModal from "../SetNicknameModal";

import * as io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

const App = () => {
  console.log(socket);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <List />
          </Col>
          <Col xs={9}>
            <Chat />
          </Col>
        </Row>
      </Container>

      <SetNicknameModal />
    </>
  );
};

export default App;
