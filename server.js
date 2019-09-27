const express = require("express");
const http = require("http");

const express_app = express();
express_app.use(express.json());

const server = http.createServer(express_app);

let message_list = [];

express_app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

express_app.get("/message", (req, res) => {
  res.json(message_list);
});

express_app.post("/message", (req, res) => {
  message = req.body.message;
  message_list.push(message);

  res.json({ success: true });
});

const SERVER_PORT = 3000 || process.env.PORT;
server.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`);
});
