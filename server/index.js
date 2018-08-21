const express = require("express");
const next = require("next");
const mobxReact = require("mobx-react");
const port = parseInt(process.env.PORT, 10) || 2333;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const compression = require("compression");
var https = require("https");
var fs = require("fs");
var path = require("path");

const handle = app.getRequestHandler();
const routers = require("./routers");

const SSLPORT = 2334;

//根据项目的路径导入生成的证书文件
var privateKey = fs.readFileSync(
  path.join(__dirname, "./certificate/server.key"),
  "utf8"
);
var certificate = fs.readFileSync(
  path.join(__dirname, "./certificate/server.cert"),
  "utf8"
);
var credentials = { key: privateKey, cert: certificate };

mobxReact.useStaticRendering(true);

//node gzip compression
function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }
  // fallback to standard filter function
  return compression.filter(req, res);
}

//https服务器
var httpsServer = server => https.createServer(credentials, server);

app.prepare().then(() => {
  const server = express();
  server.use(compression({ filter: shouldCompress }));
  server.use(express.static(`${__dirname}/static`));

  routers(server, app).get("*", (req, res) => {
    return handle(req, res);
  });

  //http
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  //https
  httpsServer(server).listen(SSLPORT, err => {
    if (err) throw err;
    console.log(
      `HTTPS Server is running on https://localhost:${SSLPORT}`,
      process.env.NODE_ENV
    );
  });
});
