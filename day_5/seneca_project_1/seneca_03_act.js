const addService = require('./seneca_04_add');
const service = require('seneca')({log: 'silent'});

service.use(addService);
//service.use('./seneca_04_add.js');
service.act({ math: "sum", values: [ 10, 20, 3 ] }, (err, msg) => {
    if (err) return console.error(err);
    console.log("consumer's sum = %s", msg.sum);
});

/*
function appFn()	{
	let service=this; service.add({ math: "sum" }, (msg, respond) => { 
		let sum = 0; 
		for (let i=0;i<msg.values.length;i++) { 
			sum += msg.values[i]; 
		} 
		respond(null, { sum: sum }); }); 
}
module.exports=appFn;

const test=require("./app3");
const service = require("seneca")({log: 'silent'});
service.use("./app3.js");
service.act({ math: "sum", values: [ 10, 20, 3 ] }, (err, msg) => { 
	if (err) return console.error(err); 
	console.log("consumer's sum = %s", msg.sum); 
});
 */
