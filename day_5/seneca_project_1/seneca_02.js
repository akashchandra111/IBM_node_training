const service = require("seneca")({log: 'silent'});

service.add({ role: "math", cmd: "sum" }, (msg, respond) => {
  const sum = msg.left + msg.right;
  respond(null, { answer: sum });
});

service.add({ role: "math", cmd: "product" }, (msg, respond) => {
  const product = msg.left * msg.right;
  respond(null, { answer: product });
});

service.add({role: "math", cmd:"diff"}, (msg, res) =>	{
	const diff = msg.left - msg.right;
	res(null, {answer: diff});
});

service.add({role: "math", cmd:"div"}, (msg, res) =>	{
	const div = msg.left / msg.right;
	res(null, {answer: div});
});

//  .........................................


service.act({role: 'math', cmd: 'sum', left: 10, right: 2}, (err, resp) => {
    if (err) { return console.error(err); }
    console.log("sum: ", resp);
});



service.act({role: 'math', cmd: 'product', left: 10, right: 2}, (err, resp) => {
  if (err) { return console.error(err); }
  console.log("prod: ", resp);
});

service.act({role: 'math', cmd: 'diff', left: 10, right: 2}, (err, resp) => {
  if (err) { return console.error(err); }
  console.log("diff: ", resp);
});

service.act({role: 'math', cmd: 'div', left: 10, right: 2}, (err, resp) => {
  if (err) { return console.error(err); }
  console.log("div: ", resp);
});
