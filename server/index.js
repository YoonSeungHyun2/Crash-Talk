const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const cors = require("cors");
const { Server, Socket } = require("socket.io");

const PORT = process.env.PORT || 3001;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

io.on("connect", (socket) => {
  socket.on("join", ({ name, room, callback }) => {
    const user = addUser({ id: socket.id, name: name, room: room });

    console.log(`JoinEvent_User:${user.id}`);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined!;`,
    });

    socket.join(user.room);

    //callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("User had left");
  });
});

app.use(router);
app.post("/register", (req, res) => {
  res.send({ data: { validity: true, ...req.data } });
  console.log(res);
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
