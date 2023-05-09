const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.get("/api/example", (req, res) => {
    res.status(200).json({ message: "Hello from the API!" });
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(8080, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:8080");
  });
});
