// * servidor y app
const express = require("express");
const app = express();

// *servidor socket
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.status(200).send("hello friend");
});

server.listen(8000, () => {
  console.log("el servidor esta corriendo en el puerto 8000");
});
