const express = require("express");
const http = require("http");
const web_socket = require("ws");

const express_app = express();
express_app.use(express.json());

const server = http.createServer(express_app);

const web_socket_server = new web_socket.Server({
  server: server,
  path: "/websocket"
});

let message_list = [];
let ws_connections = [];

web_socket_server.on("connection", new_ws_connection => {
  ws_connections.push(new_ws_connection);

  new_ws_connection.on("message", () => {
    if (message_list.length > 0) {
      new_ws_connection.send(JSON.stringify(message_list));
    }
  });
});

express_app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

express_app.get("/message", (req, res) => {
  res.json({ messages: message_list });
});

express_app.post("/message", (req, res) => {
  message = req.body.message;
  message_list.push(message);

  // alternatively can use broadcast
  ws_connections.forEach(connection => {
    connection.send(JSON.stringify({ messages: message_list }));
  });

  res.json({ success: true });
});

const SERVER_PORT = 3000;

server.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`);
});
