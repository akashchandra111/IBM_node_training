//======= server.js -===================

const express = require("express");
const cors = require('cors');
const boom = require("@hapi/boom");

const app = express();

const delayInitValue = 20;
let delay = delayInitValue;

// reset delay every 20 seconds
setInterval(() => {
  if (delay !== delayInitValue) {
    delay = delayInitValue;
    console.log("Resetting flaky service delay to", delay);
  }
}, 20000);

app.use(cors());

app.get("/flakyService", (req, res) => {
  console.log("Flaky service delay", delay);
  // if we're really slowing down, just reply with an error
  if (delay > 1000) {
    console.log("Long delay encountered, returning Error 423 (Locked)");
    const {
      output: { statusCode, payload },
    } = boom.locked("Flaky service is flaky");
    res.status(statusCode).send(payload);
    return;
  }

  setTimeout(() => {
    console.log("Replying with flaky response after delay of", delay);
    delay = delay * 2;
    res.send({
      body: "Flaky service response",
      delay,
    });
  }, delay);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Express Server listening on port ${PORT}`);
});
