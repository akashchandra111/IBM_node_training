var fs = require('fs');

fs.readFile('app_01.js', "utf8", readFile
/*	 
	 (err, data) =>	{
		if (err)	{
			console.log("Can't read file");
			throw err;
		}
	 	console.log(data);
	 }
	 */
);

function readFile(err, data)	{
	if (err)	{
		console.log("Can't read file");
		throw err;
	}
	console.log(data);
}
	

console.log("Reading file");
