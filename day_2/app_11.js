var fs = require("fs");
var url = require("url");

var spawn = require("child_process").spawn;


var file_url = "http://collabedit.com/static/img/codinghire-ads/waitch.png";
var DOWNLOAD_DIR = __dirname;

var download_file_curl = function() {

    var file_name = url.parse(file_url).pathname.split("/").pop();
    var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

    var curl = spawn("curl", [file_url]);

    curl.stdout.on("data", function(data) { file.write(data);
 
    });

    curl.stdout.on("end", function(data) {
        file.end();
        console.log(file_name + " --> downloaded to: " + DOWNLOAD_DIR);
    });

    // on child process exit, check for error.
    curl.on("exit", function(code) {
        console.log("curl: exiting") ;
        if (code != 0) {
            console.log("Failed: " + code);
        }
    });
};

download_file_curl();
