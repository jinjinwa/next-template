const CacheLoad = require("./cache");

const IS_CACHE = false;

const router = (server, app) => {
  const load = (req, res, actualPage, query) => {
    if (IS_CACHE) {
      return CacheLoad(app);
    } else {
      app.render(req, res, actualPage, query);
    }
  };

  server
    .get("/index", (req, res) => {
      return app.render(req, res, "/index", req.query);
    })
    .get("/home", (req, res) => {
      return app.render(req, res, "/home");
    })

    .get("/setting", (req, res) => {
      return app.render(req, res, "/setting");
    })

    .get("/discover", (req, res) => {
      return app.render(req, res, "/discover");
    })

    .get("/shop", (req, res) => {
      return app.render(req, res, "/shop");
    })

    .get("/", (req, res) => {
      const actualPage = "/index";
      load(req, res, actualPage);
    });

  return server;
};

module.exports = router;
