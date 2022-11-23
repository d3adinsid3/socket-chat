require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors()); // Add cors middleware

const server = http.createServer(app); // Add this

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const users = [];
const messages = [];

// Listen for when the client connects via socket.io-client
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("join", (nickname) => {
    users.push({ id: socket.id, nickname });
  });

  socket.on("user_typing", () => {
    const user = users[users.findIndex((user) => user.id === socket.id)];
    user.isTyping = true;
  });

  socket.on("user_stopped_typing", () => {
    const user = users[users.findIndex((user) => user.id === socket.id)];
    user.isTyping = false;
  });

  socket.on("chat_message", (data) => {
    messages.push({ author: data.nickname, text: data.text });
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected from the chat`);
    users.splice(
      users.findIndex((user) => user.id === socket.id),
      1
    );
  });
});

server.listen(4000, () => "Server is running on port 4000");

app.route("/api/users").get((req, res) => {
  res.send({
    ...users,
  });
});

app.route("/api/messages").get((req, res) => {
  res.send({
    ...messages,
  });
});
