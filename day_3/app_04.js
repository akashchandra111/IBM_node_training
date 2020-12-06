const fs = require('fs');

process.on("uncaughtException", function(error) {
	console.log("===>>  exception caught @ process!") ;

});

//  ..................

function myErr01 () {
	var fileName = "zz";

	fs.readFile(fileName, "utf8", function(error, data) {
		if (error) {
			console.log("my error 1 info: ", error);
			let err = new Error("Can't read");
			throw err;
		}
		console.log("--- data received: ---->>> \n", data);

	});
}


 myErr01 () ;
