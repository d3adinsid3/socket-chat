import { wrapper } from "../utils/wrapper";
import { URL, ENDPOINTS } from "../constants/api";
import { Message } from "../redux/types";

import * as io from "socket.io-client";

const socket = io.connect(URL);
const { users, messages } = ENDPOINTS;

export const joinUser = (nickname: string) => {
  return socket.emit("join", nickname);
};

export const watchUserTyping = () => {
  socket.emit("user_typing");

  setTimeout(() => {
    socket.emit("user_stopped_typing");
  }, 3000);
};

export const getUsers = () => {
  return wrapper("get", URL + users);
};

export const getMessages = () => {
  return wrapper("get", URL + messages);
};

export const sendMessage = (message: Message) => {
  socket.emit("chat_message", message);
  return wrapper("post", URL + messages, message);
};
