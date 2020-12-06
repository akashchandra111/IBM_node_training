console.log("starting  ...\n") ;

var fs = require("fs");
//var fileName = "test1.txt";
  var fileName = "zzz";

try {
	fs.readFile(fileName, "utf8", function(error, data) {
		if (error) {console.log("my error: ", error);}
		else {console.log("data: ", data);}

	  });

} catch (exception) {
    console.log("exception caught!") ;
}
