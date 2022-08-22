import React from "react";
import { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

import GV from "../../stores/CONSTANTS/global_variables";

let socket;

const Chat = (props) => {
  const [nameState, setNameState] = useState("");
  const [roomState, setRoomState] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const location = useLocation();

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const inputChangeHandler = (event) => setMessage(event.target.value);
  const inputEnterHandler = (event) =>
    event.key === "Enter" ? sendMessage(event) : null;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setNameState(String(name));
    setRoomState(String(room));
    socket = io({
      cors: {
        origin: `${GV.getServerURL()}`,
        methods: ["GET", "POST"],
        credentials: true,
        transports: ["websocket", "polling"],
      },
      allowEI03: true,
    });

    socket.emit("join", {
      name,
      room,
      callback: (error) => {
        if (error) {
          alert(error);
        }
      },
    });
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    console.log("message:", message, "messages:", messages);
  }, [messages]);

  return (
    <div className={"classes.outerContainer"}>
      <div className={"classes.container"}>
        {messages.map((message, i) => (
          <div key={i}>message : {message.text}</div>
        ))}
        <input
          value={message}
          onChange={inputChangeHandler}
          onKeyPress={inputEnterHandler}
        />
      </div>
    </div>
  );
};

export default Chat;
