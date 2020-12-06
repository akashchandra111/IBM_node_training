var fs = require('fs');
var http = require('http')

http.createServer(
	(req, res)=>	{
		fs.readFile('./first.html', "utf8", (err, data) =>	{
			if (err)	throw err;
			console.log(data);
			res.write(data);
			res.end();
		});
	}
).listen(3000);

