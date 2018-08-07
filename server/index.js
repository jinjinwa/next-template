const express = require("express");
const next = require("next");
const mobxReact = require("mobx-react");
const port = parseInt(process.env.PORT, 10) || 2333;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

app.prepare().then(() => {
  const server = express();

  server.get("/index", (req, res) => {
    return app.render(req, res, "/index", req.query);
  });

  server.get("/home", (req, res) => {
    return app.render(req, res, "/home");
  });

  server.get("/setting", (req, res) => {
    return app.render(req, res, "/setting");
  });

  server.get("/discover", (req, res) => {
    return app.render(req, res, "/discover");
  });

  server.get("/shop", (req, res) => {
    return app.render(req, res, "/shop");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
