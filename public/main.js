const socket = io.connect("http://localhost:8000", { forceNew: true });

socket.on("mensajes", msg => {
  console.log("mensajes =>", msg);
  renderizarMensajes(msg);
});

let renderizarMensajes = mensajes => {
  let html = mensajes.map((msg, key) => {
    return `
      <div><span class="badge badge-info">${msg.name}</span> ${msg.text}</div>
      `;
  });

  document.getElementById("mensajes").innerHTML = html;
};

let agregarMsg = e => {
  let data = {
    name: document.getElementById("name").value,
    text: document.getElementById("text").value
  };

  socket.emit("front-msg", data);

  return false;
};
