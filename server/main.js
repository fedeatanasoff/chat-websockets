// * servidor y app
const express = require("express");
const app = express();

// *servidor socket
const server = require("http").Server(app);
const io = require("socket.io")(server);
let mensajes = [
  {
    id: 1,
    text: "soy un mensaje",
    name: "fd"
  }
];

// middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("hello friend");
});

// manejo de sockets
io.on("connection", socket => {
  console.log("alguien se conecto con sockets");

  socket.emit("mensajes", mensajes);

  socket.on("front-msg", data => {
    mensajes.push(data);
    console.log("agregando =>", data);

    io.sockets.emit("mensajes", mensajes);
  });
});

server.listen(8000, () => {
  console.log("el servidor esta corriendo en el puerto 8000");
});
