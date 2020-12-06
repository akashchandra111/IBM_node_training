const Seneca = require("seneca");
const Express = require("express");
const Web = require("seneca-web");

const port = 3000;

const Routes = [
  {
    prefix: "/stock/v2",
    pin: "role:api,cmd:*",
    map: {
      pens: { GET: true },
      erasers: { GET: true }

    },
  },
  {
    prefix: "/stock/v1",
    pin: "role:api,cmd:*",
    map: {
      pencils: { GET: true }
    },
  },
];


const seneca = Seneca({ log: "silent" });

const config = {
  routes: Routes,
  adapter: require("seneca-web-adapter-express"),
  context: Express(),
};

seneca
  .client()
  .use(Web, config)
  .ready(() => {
    const server = seneca.export("web/context")();
    server.listen(port, () => {
      console.log("server started on:", port);
    });
  });


// .........................................  

seneca.add({ role: "api", cmd: "pens" }, function (args, done) {
  done(null, { data: { item: "pen", price: 200, qty: 32 } });
});

seneca.add({ role: "api", cmd: "pencils" }, function (args, done) {
  done(null, { data: { item: "pencil", price: 10, qty: 54, suppliers: ['flipkart', 'camlin'] } });
});

seneca.add({ role: "api", cmd: "erasers" }, function (args, done) {
  done(null, { data: { item: "eraser", price: 5, qty: 71 } });
});

