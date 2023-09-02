//node server which will handle socket io connections

const io = require("socket.io")(8000);

const users = {};

io.on("connection", (socket) => {
  //socket.io instanace which listen for multiple request
  socket.on("new-user-joined", (name) => {
    console.log("new User", name);
    console.log("demo");
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
    console.log(users);
  });
  socket.on("send", (message) => {
    socket.broadcast.emit("receive", {
      message: message,
      name: users[socket.id],
    });
  });
});
