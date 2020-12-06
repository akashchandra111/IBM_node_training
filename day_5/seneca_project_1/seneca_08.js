// server as seneca_06

const service = require("seneca")({ log: "silent" });
const axios = require("axios");

const data_src = axios.get("https://jsonplaceholder.typicode.com/users");
const PORT = 3000;
const error = null;

service.add({ role: "users", cmd: "get" }, function (msg, respond) {
  data_src
    .then(function (resp) {
      let user = resp.data.filter(function (usr) {
        return usr.id === msg.id;
      });
      respond(error, { user: user });
    })
    .catch(function (err) {
      error = err;
      console.log(error);
    });
});

service.listen({ port: PORT }, () => console.log("MS at port", PORT));

// .....................

function userClient02() {
  service.act({ role: "users", cmd: "get", id: 4 }, (err, resp) => {
    if (err) return console.log(err.msg);
    console.log("response @ name: ", resp.user[0].name);
    process.exit(0);
  });
}

userClient02();
